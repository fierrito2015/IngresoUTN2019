function mostrar()
{
	
var planeta;
 planeta = prompt("Ingrese planeta: ").toLowerCase();
 switch(planeta)
 {
     case "mercurio":
     case "venus":
     alert("Aca hace mas calor");
     break;
     case "tierra":
     alert("vivimos aca");
     break;
     case "marte":
     case "jupiter":
     case "saturno":
     case "urano":
     case "neptuno":
     alert("Aca hace mas frio");
     break;
     default:
     alert("No es un Planeta Valido");
 }




}
