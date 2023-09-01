{Array} A; 
{number}pos;
{number} men;
{number}i;
{number}n;

n=prompt('Ingrese el tamaño del arreglo');

    for (let i = 1; i = n; i++) {
        A[i]=prompt('Ingrese un número');
    }

men=0;

for (let i = 1; i = n; i++) {
    if (i==1){
        men=A[i];
        pos=i;
    } else{
         If (A[i] < men) {
        men=A[i];
        pos=1;
    }} 
    
    
}
return men, pos;