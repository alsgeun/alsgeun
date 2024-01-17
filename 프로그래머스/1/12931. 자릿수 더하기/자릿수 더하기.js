function solution(n) {
    var answer = 0;
    var v = String(n);
    for (let z = 0; z < v.length; z++) {
        answer += parseInt(v[z]);
    }   return answer;
}
