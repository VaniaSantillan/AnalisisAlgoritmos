function promedio (arr, prom, suma){
    prom=0
    suma=0
    for (let i=0; i< arr.length; i++ ){
        if(arr[i]> 0){
            suma=suma+arr[i]
        }
        else {
            suma=0
        }
    }

    const arr= [5,5,5]
    if (suma==0){
      console.log('El arreglo tiene números negativos')  
    }
    else{
        prom=suma/arr.length
        console.log('el promedio es: ', prom)  
    }
}