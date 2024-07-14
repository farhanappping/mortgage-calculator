document.querySelectorAll('input[type="radio"][name="customRadio"]').forEach(radio=>{
    console.log(radio);
    radio.addEventListener('change', function(){
        document.querySelectorAll('.type-checkbox').forEach(checkbox=>{
            checkbox.classList.remove('type-active')
        })
        if(this.checked){
            this.parentElement.classList.add('type-active')
        }
        console.log(this.parentElement);
    })
})

document.addEventListener('DOMContentLoaded', function(){
  

  
  let calculatorBtn = document.querySelector('.calculator-btn')
  let clearBtn = document.querySelector('.clearBtn')

  calculatorBtn.addEventListener('click', function(event){
    event.preventDefault()

    

  let amount = parseFloat(document.getElementById('amount').value) 
  let term =  parseInt(document.getElementById('term').value) * 12
  let rate = parseFloat(document.getElementById('rate').value) / 100;
  let totalamount = document.getElementById('total-amount')
  const monthlyRate = rate / 12; // Convert annual rate to monthly rate
  const repayment = document.getElementById('repayment').checked
  const interest = document.getElementById('interestOnly').checked

    let monthlyPayment;
    let totalAmountRate;
    if (repayment) {
      // Repayment mortgage calculation
      monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    } else if (interest) {
      // Interest only mortgage calculation
      monthlyPayment = amount * monthlyRate;
     
    }
    totalAmountRate = monthlyPayment * term
    document.getElementById('results').textContent = `£${monthlyPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    totalamount.textContent = `£${totalAmountRate.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
  })

  clearBtn.addEventListener('click', function() {
   let amount = document.querySelector('#amount')
   let rate = document.querySelector('#rate')
   let term = document.querySelector('#term')
   const repayment = document.getElementById('repayment')
   const interest = document.getElementById('interestOnly')

   amount.value = ''
   rate.value = ''
   term.value = ''
   repayment.checked = false;
   interest.checked = false;
   document.querySelectorAll('.type-checkbox').forEach(checkbox=>{
    checkbox.classList.remove('type-active')
})
});
})
  
 