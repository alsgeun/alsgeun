function solution(denum1, num1, denum2, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    const c = lcm(num1,num2)
    const d = denum1 * (c / num1) + denum2 * (c / num2)
    const e = gcd(c,d)

    return [d/e,c/e]
}