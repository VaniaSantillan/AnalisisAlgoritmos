function BinarySearchIteracion(A,e,min,max,){

    const A = [1, 2, 3, 4, 8, 9, 22];
    min = 0
    max=A.length
    e= 8

    if (e<A[min]|| e> A[max]){
        console.log("Ese numero no existe")
    }else{
        while(min<= max){
            const med = Math.floor(arr.length / 2);

            if (e=A[med]){
                console.log("El número esta en el indice: ", med)
                min=max+1
            }else{
                if (e<A[med]){
                    max=med-1
                }else{
                    min=med+1
                }
            }

        }

    }

}