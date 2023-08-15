//funciones para el calculo de las operaciones
function suma(numero1, numero2) {return numero1 + numero2;}//devuelve la suma de los numeros
function resta(numero1, numero2) {return numero1 - numero2;}//devuelve la resta de los numeros
function multiplicacion(numero1, numero2) {return numero1 * numero2;}//devuelve la multiplicacion de los numeros
function division(numero1, numero2) {if (numero2 === 0) //devuleve la división de los numero
                                        { return "No se puede dividir por 0";}//si el divisor es 0 da mensaje de error
                                        return numero1 / numero2;
                                    }



// Función para realizar el cálculo según la operación seleccionada
function calcular() {
let numero1 = parseFloat(document.getElementById('numero1').value);//almacena el valor ingresado en la casilla del numero1
let numero2 = parseFloat(document.getElementById('numero2').value);//almacena el valor ingresado en la casilla del numero2
let operador = document.getElementById('operador').value;//almacena el valor ingresado en la lista desplegable operador
let resultado;
let validacion_numero= /^\d+(\.\d+)?$/;

           switch (operador) {
            case '+':
                resultado = suma(numero1,numero2);
                break;
            case '-':
                resultado = resta(numero1,numero2);
                break;
            case '*':
                resultado = multiplicacion(numero1,numero2);
                break;
            case '/':
                resultado = division(numero1,numero2);
                break;
            }
            if (Math.abs(resultado)>100000000){document.getElementById("resultado").textContent ="El resultado es demasiado grande";}//controla que el resultado no sea demasiado grande
            else if (Math.abs(resultado)<0.000000001){document.getElementById("resultado").textContent ="El resultado es demasiado pequeño";}//controla que el resultado no sea demasiado pequeño
            else if (!validacion_numero.test(numero1)) {document.getElementById("resultado").textContent ="El campo Numero 1 debe ser numérico y no puede estar vacío";}
            else if (!validacion_numero.test(numero2)) {document.getElementById("resultado").textContent ="El campo Numero 2 debe ser numérico y no puede estar vacío";} 
            else{document.getElementById("resultado").textContent = resultado;}//envia el resultado a la calculadora
}

// Función para borrar los campos de ingreso de numeros y resultado y resetear por defecto el operador
function borrar() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('operador').value = '+';
    document.getElementById('resultado').textContent = '';
}