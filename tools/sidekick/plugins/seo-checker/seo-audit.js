/**
 * Comprehensive SEO Audit Function
 * Analyzes current page and generates detailed SEO report
 * @returns {Object} Complete SEO audit report with scores and recommendations
 */
export async function performSEOAudit() {
    const report = {
        url: window.location.href,
        timestamp: new Date().toISOString(),
        overallScore: 0,
        categories: {},
        summary: {
            critical: [],
            warnings: [],
            passed: []
        }
    };

    // 1. Title Tag Analysis
    function analyzeTitleTag() {
        const titleElement = document.querySelector('title');
        const title = titleElement ? titleElement.textContent.trim() : '';
        const length = title.length;
        
        let score = 0;
        const issues = [];
        const recommendations = [];

        if (!title) {
            issues.push('Missing title tag');
        } else {
            if (length >= 30 && length <= 60) score += 40;
            else if (length > 0) score += 20;
            
            if (length < 30) recommendations.push('Title too short (< 30 chars)');
            if (length > 60) recommendations.push('Title too long (> 60 chars)');
            if (title.toLowerCase() === title) recommendations.push('Consider title case formatting');
        }

        return {
            score: Math.min(score, 100),
            title,
            length,
            issues,
            recommendations,
            weight: 15
        };
    }

    // 2. Meta Description Analysis
    function analyzeMetaDescription() {
        const metaDesc = document.querySelector('meta[name="description"]');
        const description = metaDesc ? metaDesc.getAttribute('content').trim() : '';
        const length = description.length;
        
        let score = 0;
        const issues = [];
        const recommendations = [];

        if (!description) {
            issues.push('Missing meta description');
        } else {
            if (length >= 120 && length <= 160) score += 40;
            else if (length > 0) score += 20;
            
            if (length < 120) recommendations.push('Meta description too short (< 120 chars)');
            if (length > 160) recommendations.push('Meta description too long (> 160 chars)');
        }

        return {
            score: Math.min(score, 100),
            description,
            length,
            issues,
            recommendations,
            weight: 10
        };
    }

    // 3. Heading Structure Analysis
    function analyzeHeadings() {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const h1s = document.querySelectorAll('h1');
        
        let score = 0;
        const issues = [];
        const recommendations = [];
        const structure = [];

        // Analyze heading hierarchy
        let lastLevel = 0;
        headings.forEach((heading, index) => {
            const level = parseInt(heading.tagName.charAt(1));
            const text = heading.textContent.trim();
            
            structure.push({
                tag: heading.tagName.toLowerCase(),
                text: text.substring(0, 100),
                length: text.length
            });

            // Check for proper hierarchy
            if (index > 0 && level > lastLevel + 1) {
                issues.push(`Heading hierarchy skip from H${lastLevel} to H${level}`);
            }
            lastLevel = level;
        });

        // H1 Analysis
        if (h1s.length === 0) {
            issues.push('Missing H1 tag');
        } else if (h1s.length > 1) {
            issues.push(`Multiple H1 tags found (${h1s.length})`);
            score += 30;
        } else {
            score += 50;
        }

        // General heading structure
        if (headings.length > 0) score += 30;
        if (headings.length >= 3) score += 20;

        return {
            score: Math.min(score, 100),
            totalHeadings: headings.length,
            h1Count: h1s.length,
            structure,
            issues,
            recommendations,
            weight: 12
        };
    }

    // 4. Content Analysis
    function analyzeContent() {
        const content = document.body ? document.body.textContent.trim() : '';
        const wordCount = content.split(/\s+/).filter(word => word.length > 0).length;
        const readingTime = Math.ceil(wordCount / 200); // 200 WPM average
        
        let score = 0;
        const issues = [];
        const recommendations = [];

        if (wordCount < 300) {
            issues.push('Content too short (< 300 words)');
            score += 20;
        } else if (wordCount >= 300 && wordCount < 1000) {
            score += 60;
        } else {
            score += 100;
        }

        // Check for duplicate content (basic)
        const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 10);
        const duplicates = sentences.filter((sentence, index) => 
            sentences.indexOf(sentence) !== index
        ).length;

        if (duplicates > 0) {
            recommendations.push(`${duplicates} potential duplicate sentences found`);
        }

        return {
            score: Math.min(score, 100),
            wordCount,
            readingTime,
            duplicateSentences: duplicates,
            issues,
            recommendations,
            weight: 15
        };
    }

    // 5. Image Analysis
    function analyzeImages() {
        const images = document.querySelectorAll('img');
        let score = 0;
        const issues = [];
        const recommendations = [];
        const imageData = [];

        let imagesWithAlt = 0;
        let imagesWithoutAlt = 0;
        let largeImages = 0;

        images.forEach(img => {
            const alt = img.getAttribute('alt');
            const src = img.getAttribute('src');
            const width = img.naturalWidth || img.width;
            const height = img.naturalHeight || img.height;

            imageData.push({
                src: src ? src.substring(0, 100) : 'No src',
                alt: alt || 'Missing alt text',
                dimensions: `${width}x${height}`,
                hasAlt: !!alt
            });

            if (alt && alt.trim()) {
                imagesWithAlt++;
            } else {
                imagesWithoutAlt++;
            }

            // Check for potentially large images
            if (width > 1920 || height > 1080) {
                largeImages++;
            }
        });

        if (images.length === 0) {
            score = 100; // No images, no issues
        } else {
            const altPercentage = (imagesWithAlt / images.length) * 100;
            score = altPercentage;
        }

        if (imagesWithoutAlt > 0) {
            issues.push(`${imagesWithoutAlt} images missing alt text`);
        }

        if (largeImages > 0) {
            recommendations.push(`${largeImages} potentially oversized images found`);
        }

        return {
            score: Math.min(score, 100),
            totalImages: images.length,
            imagesWithAlt,
            imagesWithoutAlt,
            largeImages,
            imageData: imageData.slice(0, 10), // Limit to first 10
            issues,
            recommendations,
            weight: 8
        };
    }

    // 6. Link Analysis (Asynchronous)
async function analyzeLinks() {
    const allLinks = [...document.querySelectorAll('a[href]')];
    const internalLinks = [];
    const externalLinks = [];
    const brokenLinks = [];
    const redirectedLinks = [];
    let score = 100;

    // Use a Set to only check unique URLs, which is more efficient
    const uniqueUrls = new Set(allLinks.map(link => link.href));

    const promises = [...uniqueUrls].map(url => 
        fetch(url, { method: 'HEAD' }).catch(err => ({ error: true, url, reason: err.message }))
    );

    // Promise.allSettled waits for all checks to complete, even if some fail
    const results = await Promise.allSettled(promises);

    results.forEach(result => {
        if (result.status === 'fulfilled') {
            const response = result.value;
            if (response.error) {
                // This typically catches CORS errors or network failures
                brokenLinks.push({ url: response.url, status: 'CORS or Network Error' });
                score -= 5;
            } else if (response.status >= 400) {
                // 404 Not Found, 403 Forbidden, etc.
                brokenLinks.push({ url: response.url, status: response.status });
                score -= 10;
            } else if (response.redirected) {
                redirectedLinks.push({ url: response.url, status: response.status });
                score -= 2; // Small penalty for redirects
            }
        } else {
            // Promise was rejected (e.g., invalid URL)
            brokenLinks.push({ url: result.reason.url, status: 'Failed to fetch' });
            score -= 5;
        }
    });
    
    // Categorize links after checking
    allLinks.forEach(link => {
        const isExternal = link.href && (link.href.startsWith('http') && !link.href.includes(window.location.hostname));
        if(isExternal) {
            externalLinks.push(link.href);
        } else {
            internalLinks.push(link.href);
        }
    });

    const issues = brokenLinks.map(l => `Broken link (${l.status}): ${l.url}`);
    const recommendations = redirectedLinks.map(l => `Redirected link: ${l.url}`);

    return {
        score: Math.max(0, score),
        totalLinks: allLinks.length,
        internalLinks: internalLinks.length,
        externalLinks: externalLinks.length,
        brokenLinks: brokenLinks.length,
        redirectedLinks: redirectedLinks.length,
        issues,
        recommendations,
        weight: 10
    };
}

    // 7. Technical SEO
    function analyzeTechnicalSEO() {
        let score = 0;
        const issues = [];
        const recommendations = [];
        const techData = {};

        // Viewport meta tag
        const viewport = document.querySelector('meta[name="viewport"]');
        techData.hasViewport = !!viewport;
        if (viewport) score += 20;
        else issues.push('Missing viewport meta tag');

        // Charset
        const charset = document.querySelector('meta[charset]') || document.querySelector('meta[http-equiv="Content-Type"]');
        techData.hasCharset = !!charset;
        if (charset) score += 15;
        else issues.push('Missing charset declaration');

        // Language
        const lang = document.documentElement.getAttribute('lang');
        techData.hasLang = !!lang;
        techData.lang = lang;
        if (lang) score += 15;
        else issues.push('Missing lang attribute on html element');

        // Canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        techData.hasCanonical = !!canonical;
        techData.canonical = canonical ? canonical.getAttribute('href') : null;
        if (canonical) score += 20;
        else recommendations.push('Consider adding canonical URL');

        // Robots meta
        const robots = document.querySelector('meta[name="robots"]');
        techData.robots = robots ? robots.getAttribute('content') : null;
        if (robots) score += 10;

        // Open Graph
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        techData.openGraph = {
            hasTitle: !!ogTitle,
            hasDescription: !!ogDesc,
            hasImage: !!ogImage
        };
        
        if (ogTitle && ogDesc) score += 20;
        else recommendations.push('Add Open Graph tags for social media');

        return {
            score: Math.min(score, 100),
            techData,
            issues,
            recommendations,
            weight: 20
        };
    }

    // 8. Performance Indicators
    function analyzePerformance() {
        let score = 80; // Default good score, reduce for issues
        const issues = [];
        const recommendations = [];
        const perfData = {};

        // DOM size
        const domSize = document.querySelectorAll('*').length;
        perfData.domElements = domSize;
        if (domSize > 3000) {
            recommendations.push(`Large DOM size: ${domSize} elements`);
            score -= 20;
        }

        // Script tags
        const scripts = document.querySelectorAll('script');
        const inlineScripts = Array.from(scripts).filter(s => !s.src).length;
        perfData.totalScripts = scripts.length;
        perfData.inlineScripts = inlineScripts;
        
        if (inlineScripts > 5) {
            recommendations.push(`${inlineScripts} inline scripts found`);
            score -= 10;
        }

        // CSS files
        const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
        perfData.cssFiles = cssLinks.length;
        if (cssLinks.length > 10) {
            recommendations.push(`${cssLinks.length} CSS files (consider bundling)`);
            score -= 10;
        }

        // Page load timing (if available)
        if (window.performance && window.performance.timing) {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            perfData.loadTime = loadTime;
            
            if (loadTime > 3000) {
                issues.push(`Slow load time: ${(loadTime/1000).toFixed(2)}s`);
                score -= 30;
            }
        }

        return {
            score: Math.max(score, 0),
            perfData,
            issues,
            recommendations,
            weight: 10
        };
    }

    // Execute all analyses
    report.categories.titleTag = analyzeTitleTag();
    report.categories.metaDescription = analyzeMetaDescription();
    report.categories.headings = analyzeHeadings();
    report.categories.content = analyzeContent();
    report.categories.images = analyzeImages();
    report.categories.links = analyzeLinks();
    report.categories.technical = analyzeTechnicalSEO();
    report.categories.performance = analyzePerformance();

    // Calculate overall weighted score
    let totalWeightedScore = 0;
    let totalWeight = 0;

    Object.values(report.categories).forEach(category => {
        totalWeightedScore += (category.score * category.weight);
        totalWeight += category.weight;
        
        // Categorize issues
        category.issues.forEach(issue => report.summary.critical.push(issue));
        category.recommendations.forEach(rec => report.summary.warnings.push(rec));
        
        if (category.score >= 80) {
            report.summary.passed.push(`${Object.keys(report.categories).find(key => report.categories[key] === category)} passed`);
        }
    });

    report.overallScore = Math.round(totalWeightedScore / totalWeight);

    // Add score interpretation
    report.scoreInterpretation = {
        grade: report.overallScore >= 90 ? 'A' : 
               report.overallScore >= 80 ? 'B' : 
               report.overallScore >= 70 ? 'C' : 
               report.overallScore >= 60 ? 'D' : 'F',
        status: report.overallScore >= 80 ? 'Good' : 
                report.overallScore >= 60 ? 'Needs Improvement' : 'Poor'
    };

    return report;
}

// Quick SEO check function for console use
export function quickSEOCheck() {
    const report = performSEOAudit();
    console.log(`\n🔍 SEO Score: ${report.overallScore}/100 (${report.scoreInterpretation.grade})`);
    console.log(`📊 Status: ${report.scoreInterpretation.status}\n`);
    
    if (report.summary.critical.length > 0) {
        console.log('🚨 Critical Issues:');
        report.summary.critical.forEach(issue => console.log(`  - ${issue}`));
    }
    
    if (report.summary.warnings.length > 0) {
        console.log('⚠️ Recommendations:');
        report.summary.warnings.slice(0, 5).forEach(warning => console.log(`  - ${warning}`));
    }
    
    return report;
}

// To save report as JSON file
export function downloadSEOReport() {
    const report = performSEOAudit();
    const dataStr = JSON.stringify(report, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `seo-audit-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        performSEOAudit,
        quickSEOCheck,
        downloadSEOReport
    };
}