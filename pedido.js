var opciones=Number(prompt("Que menu desea pedir en el restaurante de Imanol Perez? 1-Carne, 2-Pescado, 3-Verdura."))

switch(opciones){
    case 1:
        alert("Se le ofrecera como bebida vino tinto.")
        break;
    case 2:
        alert("Se le ofrecera como bebida vino blanco.")
        break;
    case 3:
        alert("Se le ofrecera agua como bebida.")
        break;
    default:
        alert("Elija carne, pescado o verdura.")
}
