let submitButton=document.getElementById("submitButton");

let errors={}

submitButton.addEventListener("click",function(e){
       e.preventDefault();
       let signUpForm=document.forms["signUpForm"];
       let fNameInput=signUpForm.fName;
       let lNameInput=signUpForm.lName;

       if(fNameInput.value==""){
            errors.fName="First Name Should Not Be Empty";

            // let fNameGroup=document.getElementById("fNameGroup");
            // let fNameMessage=document.querySelector("#fNameGroup .message");
            // fNameMessage.textContent="First Name Should Not Be Empty";
            // fNameGroup.classList.add("error");
       }

       if(lNameInput.value==""){
            errors.lName="Last Name Should Not Be Empty";

            // let lNameGroup=document.getElementById("lNameGroup");
            // let lNameMessage=document.querySelector("#lNameGroup .message");
            // lNameMessage.textContent="Last Name Should Not Be Empty";
            // lNameGroup.classList.add("error");
       }
       console.log(errors);

for(let error in errors){}
});

