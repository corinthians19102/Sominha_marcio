let soma1 = 0;
let soma2 = 0;

function somarinputs() {
    var soma1 = parseFloat(document.querySelector("#soma1").value); 
    var soma2 = parseFloat(document.querySelector("#soma2").value); 

    var resultado = soma1 + soma2; 

    document.querySelector("#resultado").innerHTML = resultado; 
}