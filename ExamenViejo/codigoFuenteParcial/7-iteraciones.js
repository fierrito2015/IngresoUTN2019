//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
	var nota;
    var sexo;
    var acumuladorNotas=0;
    var cantidadVarones=0;
    var flag = 0;
    var promedio;
    var minimaNota;
    
    for(var cantidadAlumnos =0; cantidadAlumnos<6;cantidadAlumnos++)
    {
        nota = parseInt(prompt("Ingrese Nota;"));
        while (nota<=0||isNaN(nota))
        {
             nota = parseInt(prompt("Ingrese Nota Valida;"));
        }
        sexo = prompt("ingrese F o M: " ).toLowerCase();
        while (sexo!="f"&&sexo!="m")
        {
          sexo = prompt("ERROR. ingrese F o M: " ).toLowerCase();  
        }
        acumuladorNotas= acumuladorNotas + nota;
        if (nota>=6 && sexo == "m")
        {
            cantidadVarones++
        }
        if(flag==0 || nota<minimaNota)
        {
            minimaNota=nota;
            flag=1;
        }
    }
    promedio = acumuladorNotas/cantidadAlumnos;
    console.log("el promedio de las notas total es: " + promedio);
    console.log("la menor nota es: "+ minimaNota);
    console.log(cantidadVarones + "varones sacaron 6 o mas");

}

