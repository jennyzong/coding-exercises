const continueBtn = document.getElementById('continue-btn')
const acceptTerms = document.getElementById('accept-terms')
const mailTerm = document.getElementById("mail-term")

continueBtn.addEventListener('click', function(){
    
/*
Challenge:
1. Add a second checkbox to see if a user
   wants to be added to the mailing list.
2. If they do, log out "mail accepted" when 
   the continue button is clicked. If they
   don't, log out "mail not accapted."
*/
    if (acceptTerms.checked){
        console.log("Terms accepted!")    
    }
    else{
        console.log("Terms refused!")         
    }
    if(mailTerm.checked){
        console.log("mail accepted")
    }else{
        console.log("mail not accapted")
    }
})