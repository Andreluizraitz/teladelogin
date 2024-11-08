let numero1= parseInt(Math.random()*50+1);
let numero2= parseInt(Math.random()*50+1);

document.getElementById("numeros").innerHTML=numero1 + " + " + numero2;

function teste () {

    let result = document.getElementById("result").value;

if (numero1 + numero2 == result) {
    document.getElementById("captcha").value = alert ("Login realizado com sucesso!");
} else {
    document.getElementById("captcha").value = alert ("A soma esta incorreta, tente novamente");
}
}