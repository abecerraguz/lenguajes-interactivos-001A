const estilo1 = `
    background:linear-gradient(#4682B4, #F08080);
    color:#fff;
    padding: 10px 10px;
    font-weight: bold;
    border-radius: 10px;
`;
const estilo2 = `
    background: #4682B4;
    color:#fff;
    border-radius: 10px;
    padding: 5px 10px;
    font-weight: bold;
`;
const estilo3 = `
    background: #F08080;
    color:#2F4F4F;
    border-radius: 10px;
    padding: 5px 10px;
    font-weight: bold;
`;
const estilo4 = `
    font-weight: bold;
`;
console.log("%c Sumativa 1 - Operaciones matemáticas", estilo1);

//------------SUMA
let numero1 = 10;
let numero2 = 15;

function suma(a, b) {
    return a + b;
}
let resultadoSuma = suma(numero1, numero2);
console.log("%cEl resultado de la suma es: " + resultadoSuma, estilo2);

//------------RESTA
let numero3 = 90;
let numero4 = 5;

function resta(c, d) {
    return c - d;
}
let resultadoResta = resta(numero3, numero4);
console.log("%cEl resultado de la resta es: " + resultadoResta, estilo2);

//-----------MULTIPLICACIÓN
let numero5 = 2;
let numero6 = 50;

function multiplicar(e, f) {
    return e * f;
}
let resultadoMultiplicar = multiplicar(numero5, numero6);
console.log("%cEl resultado de la multiplicación es: " + resultadoMultiplicar, estilo2);

//--------------DIVISIÓN
let numero7 = 100;
let numero8 = 20;

function dividir(g, h) {
    return g / h;
}
let resultadoDividir = dividir(numero7, numero8);
console.log("%cEl resultado de la división es: " + resultadoDividir, estilo2);

//------------TABLA DE MULTIPLICAR
console.log("%cTABLAS DE MULTIPLICAR:", estilo2);
let numerosAMultiplicar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function numeroPar(numero) {
    return numero % 2 === 0;
}

function tablasDeMultiplicar() {

    for (let i = 0; i < numerosAMultiplicar.length; i++) {
        let numero = numerosAMultiplicar[i];
        console.log(`%cTabla de multiplicar del ${numero}:`, estilo3);
        for (let j = 1; j <= 10; j++) {
            let resultado = numero * j;
            let resultadoMultiplicacion = `${numero} x ${j} = ${resultado}`;
            if (numeroPar(resultado)) {
                resultadoMultiplicacion += '*';
            }
            let suma = numero + j;
            let resta = numero - j;
            let division = numero / j;
            console.log(`%c${resultadoMultiplicacion} 
            Suma: ${numero} + ${j} = ${suma}, Resta: ${numero} - ${j} = ${resta}, División: ${numero} / ${j} = ${division}`, estilo4);
        }
    }
    
}
tablasDeMultiplicar();
