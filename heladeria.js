alert("Bienvenido a la heladeria de Imanol Perez.")
var topping= prompt("Eliga un topping de helado:")
var precio
var precioFinal
var helado=1

if (topping=="Oreo"){
    alert("El precio del helado sera $10")
}

if (topping=="KitKat"){
    alert("El precio del helado sera $15")
}

if (topping=="Kinder"){
    alert("El precio del helado sera $25")
}

if (topping!="Oreo","KitKat","Kinder"){
    alert("No tenemos este topping.")
}