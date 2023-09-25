function GregoryLeibniz (terminos){
    terminos=500000
    p=1.0
    for (i=1; i=terminos; i++){
        if (i%2==1){
            p=p-(1.0/((2.0*i)+1))
        }
        else{
            p=p+(1.0/((2.0*i)+1))
        }
    }
    p=p*4.0
    console.log(p)
}