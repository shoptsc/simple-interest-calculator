    
let rate = document.querySelector('#rate')
let rateText = document.querySelector('.rate')
let selectYear  = document.querySelector('#year')
let button = document.querySelector('button')
let result = document.querySelector('#result')
let start = 0;
let end = 100;
let step = 1;
let arrayLength = Math.floor(((end - start) / step)) + 1;
let range = [...Array(arrayLength).keys()].map(x => (x * step) + start);


// Assign options with values to select.
for(i in range){
    let option = document.createElement('option')
    let optionText = document.createTextNode(range[i])
    option.value = range[i]
    option.appendChild(optionText)
    option.classList.add('option')
    selectYear.appendChild(option)
}


// Make the button compute interest
button.addEventListener('click', (e)=> {
    e.preventDefault();
    let amount = document.querySelector('#principal')   
    amount = parseFloat(amount.value)
    if(!amount || amount === "" || amount === '0' || Math.sign(amount) === -1 ) {
        alert('Please enter a positive number')
    }else{
        if(!rateValue){
            alert('Please select a rate')
        }else{
            if(!yearValue){
                alert('Please select a year')
            }else{
                let interest = (amount * yearValue * rateValue)/100
                let span1 = document.querySelector('.one')
                let span2 = document.querySelector('.two')
                let span3 = document.querySelector('.three')
                let span4 = document.querySelector('.four')
                let newDate = new Date().getFullYear() + yearValue
                span1.innerHTML = `${amount},`
                span2.innerHTML = `${rateValue}%,`
                span3.innerHTML = `${interest},`
                span4.innerHTML = newDate
                result.style.display = 'block'
            }
        }
    }
    console.log(amount)   
})


let yearValue;
let rateValue;

// Get the value of the year
selectYear.addEventListener('change', (e)=> {
    yearValue =  parseFloat(e.target.value)
})

// Get the rate
rate.addEventListener('change', (e)=> {
    let getValue = parseFloat(e.target.value)
    rateText.innerHTML = `${getValue}%`
    rateValue = getValue;
})

