function isPrime(num) {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  for(let i = 1; i <= 9; i++) {
    if(isPrime(i)) {
      console.log(i);
    }
  }
  