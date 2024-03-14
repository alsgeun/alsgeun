function solution(n) {
    for(let x = 1; x*x<=n; x++){
    if(x*x==n){     // x의 제곱이 n과 같다면
      answer = (x+1)*(x+1); // x+1의 제곱을 리턴하라고 하니 똑같이 x+1 추가해서 리턴
    }else
    answer = -1;    // 그게 아니라면 -1
  }
  return answer;
}