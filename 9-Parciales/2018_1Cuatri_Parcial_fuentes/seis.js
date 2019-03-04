function mostrar()
{

	

var hora;

hora = parseInt(document.getElementById("laHora").value);
switch(hora)
{
	case 1:
	case 2:
	case 3:
	case 4: 
	case 5:
	alert("Es de Noche");
	break;

	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
	alert("Es de Mañana");
	break;

	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:        
	case 19:
	alert("Es de Tarde");
	break;

	case 20:
	case 21:
	case 22:
	case 23:
	case 24:
	alert("Es de Noche");
	noche = "Es de Noche";
	break;

	default:
	alert("No es una Hora valida");

	
}
if (hora>19&&hora<=24)
{
	alert("A dormir");
}
	

	
}
