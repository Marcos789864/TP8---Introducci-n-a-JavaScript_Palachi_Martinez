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
   let mensaje;
   let contador = 1;
    for(let i = 0; i <= 5; i++)
    {
        for(let j = 0; j < contador; j++)
        {
          mensaje += "*";
        }
        contador++;
        mensaje += "<br>";
    }
    return mensaje;
}