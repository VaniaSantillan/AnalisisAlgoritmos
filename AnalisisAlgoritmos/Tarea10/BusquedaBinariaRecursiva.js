function BinarySearchRec (A, min, max, e){
    if(min>max){
      return -1;
    }
    const med= Math.floor ((min+max)/2);
  
    if(A[med]== e){
      return med;
    }
  
    if (A[med]<e){
      return BinarySearch(A,m+1,max,e)
    }else{
      return BinarySearch(A,min, m-1,e)
    }
  }
  const A=[1,2,3,4,5,6,7,8,9]
  e=5
  console.log( BinarySearch(A,0,A.length-1,e))