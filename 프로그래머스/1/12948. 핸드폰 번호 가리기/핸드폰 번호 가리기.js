function solution(phone_number) {
    return [...phone_number].map((el,i) => i <= phone_number.length -5 ? '*' : el).join('')
}