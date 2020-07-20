const getSelectSort = (array) => {
  let animations = []
  let auxArray = [...array]
  const N = auxArray.length
  for (let i = 0; i < N - 1; i++) {
    let min_idx = i;
    animations.push(['init',i])
    for (let j = i + 1; j < N; j++){
      animations.push(['comp',min_idx,j])
      if(auxArray[j] < auxArray[min_idx]){
        animations.push(['switch',min_idx,j])
        min_idx = j
      }else{
        animations.push(['noswitch',min_idx,j])
      }
    }
    if(min_idx !== i){
      animations.push(['swap', min_idx, i, auxArray[min_idx], auxArray[i]])
      swap(auxArray, min_idx, i)
    }
  }
  return [animations,auxArray]
}
export default getSelectSort

const swap = (arr,i,j) => {
  let temp = arr[i]; 
  arr[i] = arr[j]; 
  arr[j] = temp; 
}