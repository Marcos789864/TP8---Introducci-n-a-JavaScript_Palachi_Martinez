function EJ1()
{
    let nombre = prompt("Ingrese su nombre");
    let Fecha = prompt("Ingrese la fecha de su cumpleaños (YYYY-MM-DD)");
    let edad = CalculadoraEdad(Fecha);
    return console.log(`Hola ${nombre}, tienes ${edad} años!`);
}



function EJ2()
{
    const Frutas = [
        {
            nombre: `Banana`
        },
        {
            nombre: `Coco`
        },
        {
            nombre: `Manzana`
        },
        {
            nombre: `Pera`
        },
        {
            nombre: `Mandarina`
        },
        {
            nombre: `Mango`
        },
        {
            nombre: `Kiwi`
        },
        {
            nombre: `Sandia`
        },
        {
            nombre: `Naranja`
        },
        {
            nombre: `Pomelo`
        }
    ];
    let FrutaAbuscar = prompt(`Ingrese la fruta que desea buscar en la verduleria`);
    let existe = BuscarFruta(Frutas,FrutaAbuscar)
    if (existe == true)
    {
        console.log(`Si,tenemos ${FrutaAbuscar}`);
    }   
    else
    {
        console.log(`No, no tenemos ${FrutaAbuscar}`);
    }
}


function EJ3()
{
    let variable = (10 == 10);
    let verificar = (10===10);
    let tipoDato = typeof 10.6;
    let booleano = (true == 1)
    
    
    console.log(`${variable}, ${verificar}, ${tipoDato}, ${booleano}`);
}



function EJ4()
{
    const Ciudad =
    {
        nombre: `Buenos Aires`,
        fechaFundacion:`1997-06-25`,
        poblacion: 10000000,
        extension: 900000000
    }
}

function EJ5()
{
    const numeros = [1,2,3,4,5,6,7,8,9,10];
    const nuevoArray = DobleElementos(numeros);
    console.log(nuevoArray);
}

function EJ6()
{
   console.log(MostrarTorreAsteriscos());
}



function EJ7()
{
    PedirNombres();
}



function EJ8()
{
    ReemplazarPalabras();
}



function EJ9()
{
    CortarTexto();
}

function Ej10()
{
    StringConSeparador();
}

Ej10();