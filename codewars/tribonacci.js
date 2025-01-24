function tribonacci(signature, n) {
    let score = signature.slice(); 
    for (let i = 3; i < n; i++) {
        score.push(score[i - 1] + score[i - 2] + score[i - 3]);
    }

    return score.slice(0, n); 
}