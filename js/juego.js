function jugar_ahora() {

    var max = 11;
    var min = 1;
    var cant_intentos = 4;
    var acerto = false;
    var numero_aleatorio = Math.round(Math.random() * (max - min) + min);
    var numero;

    var nombre=document.getElementById("nombre").value;

    if(nombre=="")
    {
        alert("Por favor, ingrese su nombre para JUGAR");
    }
    else
    {
        while(cant_intentos>0 && acerto!=true)
        {
            cant_intentos--;
            numero= parseInt( prompt("Ingrese el número"));
            if (numero==numero_aleatorio)
            {
                alert("FELICITACIONS HAS ACERTADO!!!");
                acerto=true;
            }
            else if (numero<numero_aleatorio)
            {
                alert("PISTA: es mayor");
                alert("Le quedan: " + cant_intentos + " intentos")
            }
            else if (numero>numero_aleatorio)
            {
                alert("PISTA: es menor");
                alert("Le quedan: " + cant_intentos + " intentos")
            }

            if (cant_intentos == 1 && acerto!=true){
                if (numero_aleatorio % 2 == 0){
                    alert("PISTA: el numero es par")
                }else{
                    alert("PISTA: el numero es impar")
                }
            }

        }   
        document.getElementById("rdo").innerHTML="El número era: <strong>" + numero_aleatorio + "</strong>"
    }

}