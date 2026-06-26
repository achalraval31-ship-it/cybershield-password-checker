function startChecker(){

window.location.href="checker.html";

}



function showPassword(){

let pass=document.getElementById("password");


if(pass.type==="password"){

pass.type="text";

}

else{

pass.type="password";

}

}





function copyPassword(){

let pass=document.getElementById("password");


navigator.clipboard.writeText(pass.value);


alert("Password copied!");

}





function checkPassword(){


let password=document.getElementById("password").value;


let score=0;



if(password.length>=8){

score+=20;

document.getElementById("length").innerHTML="✅ Minimum 8 characters";

}

else{

document.getElementById("length").innerHTML="❌ Minimum 8 characters";

}




if(/[A-Z]/.test(password)){

score+=20;

document.getElementById("upper").innerHTML="✅ Uppercase letter";

}

else{

document.getElementById("upper").innerHTML="❌ Uppercase letter";

}




if(/[a-z]/.test(password)){

score+=20;

document.getElementById("lower").innerHTML="✅ Lowercase letter";

}

else{

document.getElementById("lower").innerHTML="❌ Lowercase letter";

}





if(/[0-9]/.test(password)){

score+=20;

document.getElementById("number").innerHTML="✅ Number";

}

else{

document.getElementById("number").innerHTML="❌ Number";

}





if(/[!@#$%^&*]/.test(password)){

score+=20;

document.getElementById("symbol").innerHTML="✅ Special character";

}

else{

document.getElementById("symbol").innerHTML="❌ Special character";

}





document.getElementById("score").innerHTML=
"Strength: "+score+"%";



let bar=document.getElementById("strength");


bar.style.width=score+"%";



if(score<=40){

bar.style.background="red";

}

else if(score<=80){

bar.style.background="orange";

}

else{

bar.style.background="lime";

}


}







function generatePassword(){


let chars=
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";


let password="";


for(let i=0;i<12;i++){

password+=chars.charAt(
Math.floor(Math.random()*chars.length)
);

}



document.getElementById("password").value=password;


checkPassword();


}