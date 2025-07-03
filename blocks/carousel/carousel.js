import Swiper from '../carousel/swiper-bundle.min.js'

export default function decorate(block) {
    debugger
    const rows = Array.from(block.children);
    const swiperWrapper = document.createElement('div');
    swiperWrapper.classList.add('swiper-wrapper');

    rows.forEach(row => {
        row.classList.add('swiper-slide');
        swiperWrapper.append(row);
    });
    block.append(swiperWrapper);
    swiperInit(block);
}


function swiperInit(block) {
    const swiperConfig = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    };

    const isDesktop = window.matchMedia('(min-width: 900px)');

    if (block.classList.contains('pagination')) {
        const swiperPagination = document.createElement('div');
        swiperPagination.classList.add('swiper-pagination');
        block.append(swiperPagination);
        swiperConfig.pagination = {
            el: '.carousel.block.pagination .swiper-pagination',
            clickable: true,
        }
    }

    if (block.classList.contains('deals-carousel')) {
        swiperConfig.breakpoints = {
            320: { slidesPerView: 1, spaceBetween: 15 },
            1024: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 15 }
        }
    }

    if (block.classList.contains('banner-carousel')) {
        swiperConfig.breakpoints = {
            320: { slidesPerView: 1 },
            1024: { slidesPerView: 1 }
        }
    }

    if (block.classList.contains('services-carousel') || block.classList.contains('experience-carousel')) {
        const slides = block.querySelectorAll('.swiper-slide');
        slides.forEach(slide => {
            const anchor = slide.querySelectorAll('p.button-container a');
            const link = anchor.href;
            const newAnchor = document.createElement('a');
            newAnchor.href = link;

            const picture = slide.querySelector('picture');
            const imgWrapper = picture.parentElement;
            newAnchor.append(picture);
            imgWrapper.append(newAnchor);
        })

        if (block.classList.contains('services-carousel') && block.classList.contains('experience-carousel')) {
            if (isDesktop.matches) {
                return
            }
            swiperConfig.breakpoints = {
                320: { slidesPerView: 1, spaceBetween: 15 },
            }
        }
        else if (block.classList.contains('services-carousel')) {
            swiperConfig.breakpoints = {
                320: { slidesPerView: 1, spaceBetween: 15 },
                1024: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 30 }
            }
        }
    }

    const nextBtn = document.createElement('div');
    nextBtn.classList.add('swiper-button-next');
    const prevBtn = document.createElement('div');
    prevBtn.classList.add('swiper-button-prev');
    block.append(nextBtn, prevBtn)
    new Swiper(block, swiperConfig)
}