function factorial (num, f){
	
	f <- 0
	if (num==0) {
		return  1
    }
	else{
		return num*f(num-1)
    }
	
}