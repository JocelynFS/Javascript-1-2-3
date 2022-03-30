function sumarArr(arreglo){
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
return suma;
}

const arreglo= [7, 2, 4, 7, 10]
if(arreglo.length <= 1000){
    console.log(sumarArr(arreglo))
}else{
    console.log('El arreglo excede el tamaño permitido')
}
