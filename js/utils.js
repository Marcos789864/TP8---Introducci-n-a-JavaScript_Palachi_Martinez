function CalculadoraEdad(Fecha)
{
    const FechaActual = new Date();
    let edad = 0;
    const FechaCumpleaños = new Date(Fecha);
    let añoActual = FechaActual.getFullYear();
    let añoCumpleaños = FechaCumpleaños.getFullYear();
    edad = añoActual - añoCumpleaños
    
    if(FechaActual.getMonth()+1 > FechaCumpleaños.getMonth()+1)
    {
        edad++;
    }


    if(FechaActual.getMonth()+1 == FechaCumpleaños.getMonth()+1 )
    {
        if( FechaActual.getDate() == FechaCumpleaños.getDate() )
        {
            edad++;
        }
    }
    return edad;
}


function BuscarFruta( Frutas,FrutaAbuscar)
{

    return Frutas.includes(FrutaAbuscar);

}

function DobleElementos(numeros)
{
const nuevoArray = numeros.map(num => num *2)
return nuevoArray;
}

function MostrarTorreAsteriscos()
{
        for(let i=0; i<5; i++){
    
    
            for(let e = 5-1-i; e>0; e--){
                console.log("-");
            }
           
            for(let e = 0; e<i+1; e++){
                console.log("*");
            }
           
            for(let e = 5-1-i; e>0; e--){
                console.log("-");
            }
        }
}




function PedirNombres()
{
    let name = prompt("Ingrese una lista de nombres separados por coma");
    let Array = name.split(`,`).map(Nombre => Nombre.charAt(0) === "A");
    return console.log(Array);
}

function ReemplazarPalabras()
{

let Palabra1 = prompt("Ingrese una cadena de texto");
let Palabra2 = prompt("Que palabra desea reemplazar?");
let Palabra3 = prompt("Por cual palabra?");

let Modificacion = Palabra1.replaceAll(Palabra2,Palabra3);

return console.log(Modificacion);
}

function CortarTexto()
{
    let txt = prompt("Ingrese un texto");
    let num = prompt("Ingrese un numero");
    return console.log(txt.slice(0,num));
}

function StringConSeparador()
{
 let txt = prompt("Ingrese un texto separando elementos por una coma");

 let txt2 = txt.replaceAll(`,`,`-`);
 return console.log(txt2);
}

function calculadoraRecaudacion()
{
    let recaudacionTotal = 0;

const inputPedidos = prompt("Ingrese los pedidos en el formato 'nombre:precio' separados por coma (,):");


const pedidos = inputPedidos.split(',');


for (let i = 0; i < pedidos.length; i++) {
   
    const pedido = pedidos[i].trim().split(':');
    if (pedido.length === 2) {
        const nombre = pedido[0].trim();
        const precio = parseFloat(pedido[1].trim());
        if (!isNaN(precio)) {
            recaudacionTotal += precio;
        } else {
            console.log(`El precio del pedido '${pedidos[i]}' no es válido.`);
        }
    } else {
        console.log(`El formato del pedido '${pedidos[i]}' no es válido.`);
    }
}

console.log(`La recaudación total es: ${recaudacionTotal}`);

}