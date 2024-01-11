function solution(numbers) {
    var answer = 0;
    for (let z = 0; z<numbers.length; z++){
        answer = answer + numbers[z];
    } return answer / numbers.length;
} 