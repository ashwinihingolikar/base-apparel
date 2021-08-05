const emailVal = document.getElementById("email");
const preText = document.querySelector(".preText");



//event listeners and keyup//
emailVal.addEventListener("keyup", (e)=>{
    e.preventDefault()
    const isValidEmail = emailVal.checkValidity()

    if(isValidEmail){
        preText.textContent = "Correct!"
        preText.style.paddingTop = "1%"
        preText.style.fontWeight = "600"
         preText.style.color = "green"
        preText.style.paddingLeft = "7%"
       
    }else{
        preText.textContent = "Please provide a valid email!"
        preText.style.paddingTop = "1%"
        preText.style.fontWeight = "600"
        preText.style.color = "hsl(0, 36%, 70%)"
        preText.style.paddingLeft = "7%"
      
    }
});
