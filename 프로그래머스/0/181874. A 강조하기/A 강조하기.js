function solution(myString) {
  return myString
    .split("")
    .map((el) =>
      el === "a" || el === "A" ? el.toUpperCase() : el.toLowerCase()
    )
    .join("");
}
