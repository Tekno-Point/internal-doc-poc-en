// emi-calculator.js

import { endpoint } from "../../scripts/scripts.js";
const exclude = ['author-p48457-e1275402.adobeaemcloud.com'];

// Helper function to calculate EMI
function calculateEMI(principal, annualInterestRate, tenureInMonths) {
    // Convert annual interest rate to monthly interest rate in decimal
    const monthlyInterestRate = (annualInterestRate / 100) / 12;

    if (monthlyInterestRate === 0) {
        return principal / tenureInMonths; // Simple division if interest is 0
    }

    // EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi = principal * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), tenureInMonths) / (Math.pow((1 + monthlyInterestRate), tenureInMonths) - 1);
    return isNaN(emi) ? 0 : emi; // Return 0 if result is NaN (e.g., initial state with 0 tenure)
}


// Function to update the appearance of the range slider
function updateRangeSliderFill(rangeInput) {
    const min = parseFloat(rangeInput.min);
    const max = parseFloat(rangeInput.max);
    const value = parseFloat(rangeInput.value);

}


export default async function decorate(block) {

    if (window.location.href.includes("author-p48457-e1275402.adobeaemcloud.com")) return block;
    if (!block.textContent.trim()) {
        return block;
    }
    const configResp = await fetch(endpoint + '/config.json');
    const config = await configResp.json();
    let origin = config.data[0].value;
    if (exclude.includes(window.location.host)) {
        origin = 'https://author-p48457-e1275402.adobeaemcloud.com';
    }

    const item = block.querySelector('a');
    if (!item) {
        console.error("Link element not found in the block.");
        return;
    }

    const formurl = new URL(item.href)?.pathname.replace('.html', '');
    const url = `${origin}/graphql/execute.json/internal-aem-eds-poc/calculator;path=${formurl}`;

    let respData;
    try {
        const response = await fetch(url, { method: "GET" });
        respData = await response.json();
    } catch (error) {
        console.log("error while fetching")
    }

    const itemData = respData?.data?.formByPath?.item;
    // const itemData = {
    //     "_path": "/content/dam/internal-aem-eds-poc/calculator",
    //     "title": "Dream Bigger, Plan Smarter With Our",
    //     "heading": "EMI Calculator",
    //     "circletext": "MONTHLY PAYABALE AMOUNT",
    //     "loanTypeTittle": "Loan Type",
    //     "loanTypeText": "Personal Loan",
    //     "loanAmountText": "Loan Amount",
    //     "loanAmountMin": "100000",
    //     "loanAmountMax": "5000000",
    //     "interestRateText": "Interest Rate",
    //     "interestRateMin": "9.99%",
    //     "interestRateMax": "30%",
    //     "loanTenure": "Loan Tenure1",
    //     "loanTenureMin": "12",
    //     "loanTenureMax": "84",
    //     "button": null
    // }

    const {
        title = '',
        heading = '',
        circletext = '',
        loanTypeTittle = '',
        loanTypeText = '',
        loanAmountText = '',
        loanAmountMin = '100000',
        loanAmountMax = '5000000',
        interestRateText = '',
        interestRateMin = '10.5%',
        interestRateMax = '21%',
        loanTenure = 'loan Tenure',
        loanTenureMin = '12',
        loanTenureMax = '84',
        button = 'Apply Now',
        buttonUrl = '#'
    } = itemData;

    const parsedLoanAmountMin = parseFloat(loanAmountMin.replace(/[^0-9.]/g, ''));
    const parsedLoanAmountMax = parseFloat(loanAmountMax.replace(/[^0-9.]/g, ''));
    const parsedInterestRateMin = parseFloat(interestRateMin.replace(/[^0-9.]/g, ''));
    const parsedInterestRateMax = parseFloat(interestRateMax.replace(/[^0-9.]/g, ''));
    const parsedLoanTenureMin = parseFloat(loanTenureMin.replace(/[^0-9.]/g, ''));
    const parsedLoanTenureMax = parseFloat(loanTenureMax.replace(/[^0-9.]/g, ''));

    let currentLoanAmount = parsedLoanAmountMin;
    let currentInterestRate = parsedInterestRateMin;
    let currentLoanTenure = parsedLoanTenureMin;


    block.innerHTML = `
        <div class="emi-calculator-container">

            <div class="emi-content">
                <div class="emi-controls">
                    <div class="control-group loan-amount">
                        <div class="value-txt-wrapper">
                        <div class="amount-words"></div>
                        <div class="input-display-wrapper">
                            <div class="amount-text">Loan Amount</div>
                            <input type="text" id="loanAmountDisplay" class="value-display" value="₹ ${Number(currentLoanAmount).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}">
                        </div>
                        </div>
                        <input type="range" id="loanAmountRange" min="${parsedLoanAmountMin}" max="${parsedLoanAmountMax}" value="${currentLoanAmount}">
                        <div class="range-labels">
                            <span>${Number(parsedLoanAmountMin).toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                            <span>${Number(parsedLoanAmountMax).toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                        </div>
                    </div>

                    <div class="control-group loan-tenure">
                    <div class="value-txt-wrapper">
                        <div class="input-display-wrapper">
                            <label for="loanTenureRange">Loan Tenure</label>
                            <input type="text" id="loanTenureDisplay" class="value-display" value="${currentLoanTenure} Months">
                        </div>
                    </div>
                        <input type="range" id="loanTenureRange" min="${parsedLoanTenureMin}" max="${parsedLoanTenureMax}" value="${currentLoanTenure}">
                        <div class="range-labels">
                            <span>${parsedLoanTenureMin} Months</span>
                            <span>${parsedLoanTenureMax} Months</span>
                        </div>
                    </div>

                    <div class="control-group interest-rate">
                    <div class="value-txt-wrapper">
                        <div class="input-display-wrapper">
                            <label for="interestRateRange">Interest Rate</label>
                            <input type="text" id="interestRateDisplay" class="value-display" value="${currentInterestRate} %">
                        </div>
                    </div>
                        <input type="range" id="interestRateRange" min="${parsedInterestRateMin}" max="${parsedInterestRateMax}" step="0.01" value="${currentInterestRate}">
                        <div class="range-labels">
                            <span>${parsedInterestRateMin}%</span>
                            <span>${parsedInterestRateMax}%</span>
                        </div>
                    </div>

                </div>
            </div>
            <div class="emi-result">
                <div class="emi-value">
                    <p class="emi-text">Your Monthly EMI will be</p>
                    <p class="emi-value-txt">₹27,831</p>
                </div>
                <div class="emi-cnt">
                    <div class="emi-par-val">
                        <p class="emi-par-text">Amount Payable</p>
                        <p class="emi-amt amt-pay">₹13,35,876</p>
                    </div>
                    <div class="emi-par-val">
                        <p class="emi-par-text">Interest Amount</p>
                        <p class="emi-amt int-amt">₹3,35,876</p>
                    </div>
                    <div class="emi-par-val">
                        <p class="emi-par-text">Principle Amount</p>
                        <p class="emi-amt og-amt">₹10,00,000</p>
                    </div>
                </div>
                <div class="emi-btn-wrap">
                    <div class="emi-btn active">
                    <p>Apply Now</p>
                         <span></span>
                    </div>
                    <div class="emi-btn">
                         <p>Know More</p>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.querySelectorAll('.emi-btn').forEach((btn) => {
  btn.addEventListener('mouseenter', () => {
    btn.classList.add('active');
  });
  btn.addEventListener('mouseleave', () => {
    btn.classList.remove('active');
  });
});

if (window.matchMedia("(max-width: 768px)").matches) {
  document.querySelectorAll(".emi-btn").classList.remove('active');
}

    const monthlyPayableAmountEl = block.querySelector('#monthly-payable-amount');
    const principalAmountDisplayEl = block.querySelector('#principal-amount-display');
    const interestPayableDisplayEl = block.querySelector('#interest-payable-display');
    const btn = block.querySelector('.emi-value-txt');
    const amtPay = block.querySelector('.amt-pay');
    const intPay=block.querySelector('.int-amt');
    const ogAmt=block.querySelector('.og-amt');

    const loanAmountRange = block.querySelector('#loanAmountRange');
    const loanAmountDisplay = block.querySelector('#loanAmountDisplay');

    const interestRateRange = block.querySelector('#interestRateRange');
    const interestRateDisplay = block.querySelector('#interestRateDisplay');

    const loanTenureRange = block.querySelector('#loanTenureRange');
    const loanTenureDisplay = block.querySelector('#loanTenureDisplay');

    const updateCalculator = () => {
        const principal = parseFloat(loanAmountRange.value);
        const interestRate = parseFloat(interestRateRange.value);
        const tenure = parseFloat(loanTenureRange.value);

        const emi = calculateEMI(principal, interestRate, tenure);
        const totalPayable = emi * tenure;
        const totalInterest = totalPayable - principal;
        btn.textContent = '₹' + Math.round(emi).toLocaleString("en-IN");
        amtPay.textContent='₹' + Math.round(totalPayable).toLocaleString("en-IN");
        intPay.textContent='₹' + Math.round(totalInterest).toLocaleString("en-IN");
        ogAmt.textContent='₹' + Math.round(principal).toLocaleString("en-IN");


        // console.log(totalInterest);
        

        // monthlyPayableAmountEl.textContent ="₹  "+ Number(emi).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        // principalAmountDisplayEl.textContent = "₹  "+ Number(principal).toLocaleString('en-IN', {  minimumFractionDigits: 0, maximumFractionDigits: 0 });
        // interestPayableDisplayEl.textContent = "₹  "+ Number(totalInterest).toLocaleString('en-IN', {  minimumFractionDigits: 0, maximumFractionDigits: 0 });

        updateRangeSliderFill(loanAmountRange);
        updateRangeSliderFill(interestRateRange);
        updateRangeSliderFill(loanTenureRange);
    };

    loanAmountRange.addEventListener('input', () => {
        loanAmountDisplay.value = "₹ " + Number(parseFloat(loanAmountRange.value)).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        updateCalculator();
    });
    interestRateRange.addEventListener('input', () => {
        interestRateDisplay.value = parseFloat(interestRateRange.value) + " %";
        updateCalculator();
    });
    loanTenureRange.addEventListener('input', () => {
        loanTenureDisplay.value = parseFloat(loanTenureRange.value) + " Months";
        updateCalculator();
    });

    loanAmountDisplay.addEventListener('change', () => {
        let val = parseFloat(loanAmountDisplay.value.replace(/[^0-9.]/g, ''));
        if (isNaN(val) || val < parseFloat(loanAmountRange.min)) val = parseFloat(loanAmountRange.min);
        if (val > parseFloat(loanAmountRange.max)) val = parseFloat(loanAmountRange.max);
        loanAmountRange.value = val;
        loanAmountDisplay.value = "₹ " + Number(val).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        updateCalculator();
    });

    interestRateDisplay.addEventListener('change', () => {
        let val = parseFloat(interestRateDisplay.value.replace(/[^0-9.]/g, ''));
        if (isNaN(val) || val < parseFloat(interestRateRange.min)) val = parseFloat(interestRateRange.min);
        if (val > parseFloat(interestRateRange.max)) val = parseFloat(interestRateRange.max);
        interestRateRange.value = val;
        interestRateDisplay.value = val;
        updateCalculator();
    });

    loanTenureDisplay.addEventListener('change', () => {
        let val = parseFloat(loanTenureDisplay.value.replace(/[^0-9.]/g, ''));
        if (isNaN(val) || val < parseFloat(loanTenureRange.min)) val = parseFloat(loanTenureRange.min);
        if (val > parseFloat(loanTenureRange.max)) val = parseFloat(loanTenureRange.max);
        loanTenureRange.value = val;
        loanTenureDisplay.value = val;
        updateCalculator();
    });

    updateCalculator();

    function updateSliderBackground(slider) {
    const min = slider.min ? parseFloat(slider.min) : 0;
    const max = slider.max ? parseFloat(slider.max) : 100;
    const value = parseFloat(slider.value);
    const percent = ((value - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(to right, #004c8f ${percent}%, #ffffff ${percent}%)`;
  }

  document.querySelectorAll('input[type="range"]').forEach((slider) => {
    updateSliderBackground(slider);
    slider.addEventListener('input', () => updateSliderBackground(slider));
  });
}
