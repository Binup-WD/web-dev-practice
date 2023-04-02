let submitButton=document.getElementById("submitButton");

let errors={}

submitButton.addEventListener("click",function(e){
       e.preventDefault();
       let signUpForm=document.forms["signUpForm"];
       let fNameInput=signUpForm.fName;
       let lNameInput=signUpForm.lName;
       let emailInput=signUpForm.email;
       let passwordInput=signUpForm.password;

       if(fNameInput.value==""){
            errors.fName="First Name Should Not Be Empty";

            // let fNameGroup=document.getElementById("fNameGroup");
            // let fNameMessage=document.querySelector("#fNameGroup .message");
            // fNameMessage.textContent="First Name Should Not Be Empty";
            // fNameGroup.classList.add("error");
       }

       if(lNameInput.value==""){
            errors.lName="Last Name Should Not Be Empty";

            
       }

       if(emailInput.value==""){
          errors.email="Email should not be empty";
       }

       if(passwordInput.value.length<=5){
          errors.password="Password should have min 6 characters";
       }

for(let error in errors){
            let lNameGroup=document.getElementById(`${error}Group`);
            let lNameMessage=document.querySelector(`#${error}Group .message`);
            lNameGroup.classList.add("error");
            lNameMessage.textContent=errors[error];
            
};

if (Object.keys(errors).length==0){
     signUpForm.submit();
}
});
