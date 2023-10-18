function BubbleSort(A){
    for (i=1; i<=A.lenght-1; i++){
        for (j=1; j<=A.lenght-1; j++){
            if (A[j]>A[j+1]){
                t=A[j]
                A[j]=A[j+1]
                A[j+1]=t
            }

        }
    }

    for (i=1; i<=A.lenght; i++){
        console.log(A[i])
    }
}