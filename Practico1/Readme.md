Calculadora simple:

Esta es una calculadora básica que se implementó con HTML, JS y CSS, permite realizar las cuatro operaciones básicas.

Pre-requisitos:

Para acceder a la calculadora será necesario acceso a internet y un programa navegador instalado. No es necesario instalarla en su computadora.

Funcionamiento:

La calculadora es capaz de realizar las cuatro operaciones básicas, suma, resta, multiplicación y división. Permite la utilización de operandos enteros y decimales.

Realiza validación de los operandos controlando que no sea vacío y que sea un valor numérico, dando un mensaje de error en caso contrario.

Tambíen aparecerán mensajes de error para los casos en los que, el divisior sea cero, el resultado en valor absoluto sea mayor que 100000000 o menor que 0,000000001.

Dispone tambien de un botón borrar que limpia los campos y coloca por defecto en la lista desplegable de operaciones la suma.

Forma de utilización:

Se deben completar los campos "Numero 1" y "Numero 2" con valores numéricos y no pueden estar vacíos. Luego en la lista desplegable se debe seleccionar el operador correspondiente a la operación que se desea realizar. Finalmente se debe apretar el botón calcular para obtener el resultado a la derecha del signo igual.
En caso de ingresar un valor no numérico en alguno de los campos, dejarlo vacío o colocar cero en el campo Numero 2 para el caso de división, aparecerá un error en lugar del resultado. 
Finalmente dispone de un botón "Borrar" para limpiar los campos numericos y colocar por defecto la operación suma. 

Pruebas de funcionamiento:

suma 5 + 7
resultado esperado 12; obtenido 12

resta 5 - 7
resultado esperado -2; obtenido -2

multiplicación 5 * 7
resultado esperado 35; obtenido 35

división 4 / 8
resultado esperado 0,5; obtenido 0,5

división 4 / 0
resultado esperado "No se puede dividir por 0";obtenido "No se puede dividir por 0"

suma campo Numero 1 vacío + 2
resultado esperado "El campo Numero 1 debe ser numérico y no puede estar vacío"; obtenido "El campo Numero 1 debe ser numérico y no puede estar vacío"

suma 2 + campo Numero 2 vacío
resultado esperado "El campo Numero 2 debe ser numérico y no puede estar vacío"; obtenido "El campo Numero 2 debe ser numérico y no puede estar vacío"

suma a + 2
resultado esperado "El campo Numero 1 debe ser numérico y no puede estar vacío"; obtenido "El campo Numero 1 debe ser numérico y no puede estar vacío"

suma 2 + a
resultado esperado "El campo Numero 2 debe ser numérico y no puede estar vacío"; obtenido "El campo Numero 2 debe ser numérico y no puede estar vacío"

multiplicación 1000000 * 1000000
resultado esperado "El resultado es demasiado grande"; obtenido "El resultado es demasiado grande" 

multiplicación 1 * 10000000000
resultado esperado "El resultado es demasiado pequeño"; obtenido "El resultado es demasiado pequeño" 

