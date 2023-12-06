function asd(){

    nombre= document.getElementById("nombre").value;
    precio=document.getElementById("precio").value;
    codigo=document.getElementById("codigo").value;
    asiento=document.getElementById("asiento").value;
    dni=document.getElementById("dni").value;
    telefono=document.getElementById("telefono").value;
    
    document.getElementById("imprimir").innerHTML=precio;
    document.getElementById("imprimir1").innerHTML = nombre;
    document.getElementById("imprimir2").innerHTML = codigo;
    document.getElementById("imprimir3").innerHTML = asiento;
    document.getElementById("imprimir4").innerHTML = dni;
    document.getElementById("imprimir5").innerHTML = telefono;

    //var tabla= document.getElementById("tbody");

    //var fila= tabla.insertRow()
    //var colum1= fila.insertCell(0);
    //var colum2= fila.insertCell(1);
    //var colum3= fila.insertCell(2);
    //var colum4= fila.insertCell(3);
    //var colum5= fila.insertCell(4);
    //var colum6= fila.insertCell(5);

    //colum1.innerHTML= codigo;
    //colum2.innerHTML= asiento;
    //colum3.innerHTML= precio;
    //colum4.innerHTML= nombre;
    //colum5.innerHTML= dni;
    //colum6.innerHTML= telefono;
}


