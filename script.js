let startbox = document.querySelector('.start-box')
let inputcounter = document.querySelector('#input-counter');
let startcounter = document.querySelector('#start-counter');
let timercircle = document.querySelector('.c100')
let timerNum = document.querySelector('.c100 > span')
let loadingMessage = document.querySelector('.message .loading')
let successMessage = document.querySelector('.message .success')



startcounter.addEventListener('click' , function(e){
     let seconds = parseInt(inputcounter.value)
     
    if(isNaN(seconds)) return toggletErrorMessage({ show : true , message :'زمان را به درستی وارد کنید'})
   
    toggletErrorMessage({ show : false })
    startbox.classList.remove('active')
    timercircle.style.display = 'block'
     timerNum.textContent = seconds;
     loadingMessage.style.display = 'block'
     successMessage.style.display = 'none'


     let originalseconds = seconds;
     let lastPercent = ''
     let timerId = setInterval(() => {
         if(lastPercent) timercircle.classList.remove(lastPercent)

         if(seconds <= 0) {
            clearInterval(timerId)
            startbox.style.display = 'block'
            timercircle.style.display = 'none'
            loadingMessage.style.display = 'none'
            successMessage.style.display = 'block'
            inputcounter.value = ''
            return;
            
         }

         if(lastPercent) timercircle.classList.remove(lastPercent)



        seconds -= 1;
        timerNum.textContent = seconds;

        let percent = lastPercent = `p${Math.abs(Math.floor((( (originalseconds - seconds) / originalseconds ) * 100 )  - 100))}` 
        timercircle.classList.add(percent)
      
     }, 1000);
})



let toggletErrorMessage = ({ show , message}) => {
let errorElement = document.querySelector('#error-message');
    if(show) {
        errorElement.textContent = message;
        errorElement.classList.add('active')
    } else {
        errorElement.classList.remove('active')
    }
}