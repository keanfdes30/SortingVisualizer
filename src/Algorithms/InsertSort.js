const getInsertSort = (array) => {
  let animations = []
  let auxArray = [...array]
  const N = auxArray.length
  for (let i = 1; i < N; ++i) { 
    let key = i
    animations.push(['init',key])
    for(let j = i - 1; j>=0; j--){
      animations.push(['comp',key,j])
      if(auxArray[j]>auxArray[key]){
        animations.push(['swap',key,j,auxArray[key],auxArray[j]])
        swap(auxArray,key,j)
        key--
      }else{
        animations.push(['noswap',key,j])
        break;
      }
    }
  } 
  return [animations]
}

const swap = (arr,i,j) => {
  let temp = arr[i]; 
  arr[i] = arr[j]; 
  arr[j] = temp; 
}


export default getInsertSort 