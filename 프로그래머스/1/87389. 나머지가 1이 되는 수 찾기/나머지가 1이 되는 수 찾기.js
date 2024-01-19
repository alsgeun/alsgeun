function solution(n) {
   for (j = 2; j<n ; j++){
       if (n % j === 1) {
           return j;
       }
   }
}