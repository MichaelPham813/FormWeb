let passwordBox = document.querySelectorAll(".input-box");
let inputBox = document.querySelectorAll(".fill-out-box");
let fillBox = "";
let inputsPassword = "";
let confirmsPassword = "";

function checkPassword()
{
    for(let i = 0 ; i < passwordBox.length;i++)
    {
        const inputPassword = passwordBox[4];
        const confirmPassword = passwordBox[5];
        
        inputsPassword = inputPassword;
        confirmsPassword = confirmPassword;

    }
    for(let i = 0 ; i < inputBox.length ; i++)
    {
        const inputsBox = inputBox[4];
        fillBox = inputsBox;
    }
    if(inputsPassword.value == confirmsPassword.value) return;
    const paragraph = document.createElement("p");
    const textParagraph = document.createTextNode("* Password do not match");
    paragraph.style = "color:red; font-size: 9px; margin:0px;";
    inputsPassword.style = "border:1px solid red;";
    confirmsPassword.style = "border:1px solid red;";
    paragraph.appendChild(textParagraph);
    fillBox.appendChild(paragraph);
}