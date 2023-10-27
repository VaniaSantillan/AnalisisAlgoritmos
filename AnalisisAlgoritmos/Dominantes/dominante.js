function Dominantes(A) {
    const d = [];
    
    for (let i = 0; i < A.length; i++) {
      let Dom = true;
      for (let j = i + 1; j < A.length; j++) {
        if (A[i] <= A[j]) {
          Dom = false;
          break; // Salir del bucle interno si no es dominante
        }
      }
      if (Dom) {
        d[d.length] = A[i];
      }
    }
    
    return d;
    
  }
  
const arr = [1, 21, 4, 7, 5];
const elementosDominantes = Dominantes(arr);
console.log("Elementos dominantes:", elementosDominantes);