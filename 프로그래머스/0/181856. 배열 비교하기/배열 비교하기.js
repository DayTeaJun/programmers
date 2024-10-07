function solution(arr1, arr2) {
    return arr1.length > arr2.length || (arr1.length === arr2.length && arr1.reduce((a,c) => a+c,0) > arr2.reduce((a,c) => a+c,0)) ? 1 : arr2.length > arr1.length || (arr1.length === arr2.length && arr2.reduce((a,c) => a+c,0) > arr1.reduce((a,c) => a+c,0)) ? -1 : 0
}