function Selectionsort(A){
    for (i=1; i<=A.lenght; i++){
        m=i
        for (j=i+1; j=A.lenght;j++){
            if (A[m]>A[j]){
                m=j
            }
        }
       		t= A[m]
		A[m]=A[i]
		A[i]=t
    }
    for (i=1; i<=A.lenght; i++){
        console.log(A[i])
    }
}
