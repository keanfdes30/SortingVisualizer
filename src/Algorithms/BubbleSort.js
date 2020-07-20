const getBubbleSort = (array) =>{
  let animations = []
  let auxArray = [...array]
  const N = auxArray.length
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - i -1; j++) {
      animations.push([j, j + 1])
      animations.push([auxArray[j], auxArray[j + 1]])
      if (auxArray[j] > auxArray[j + 1]) {
          animations.push([j, auxArray[j + 1]])
          animations.push([j + 1, auxArray[j]])
          swap(auxArray, j, j + 1)
      }
      else {
          animations.push([j, -1])
          animations.push([j+1, -1])
      } 
    }
  }
  return [animations,auxArray]
}

const swap = (arr,i,j) =>{
  let temp = arr[i]
  arr[i] = arr[j] 
  arr[j] = temp
}
export default getBubbleSort