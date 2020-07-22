var len = -999
const getMergeSort = (array) =>{
  let animations = []
  let auxArray = [...array]
  len=array.length-1
  mergeSort(auxArray, 0, len, animations)
  return [animations]
}
const mergeSort = (auxArray, startIndex, endIndex, animations) => {
  if(startIndex === endIndex)
      return
  const middleIndex = Math.floor((startIndex + endIndex)/2)
  mergeSort(auxArray, startIndex, middleIndex, animations)
  mergeSort(auxArray, middleIndex + 1, endIndex, animations)
  merge(auxArray, startIndex, middleIndex, endIndex, animations)
}

const merge = (arr, l, m, r, animations) => {
  let temp=0
  if(l === 0 && r === len){
    temp = 1
  }
  // Find sizes of two subarrays to be merged 
  let n1 = m - l + 1 
  let n2 = r - m 

  /* Create temp arrays */
  let L = []  
  let R = []  

  /*Copy data to temp arrays*/
  for (let i = 0; i < n1; ++i) 
    L[i] = arr[l + i] 
  for (let j = 0; j < n2; ++j) 
    R[j] = arr[m + 1 + j] 

  /* Merge the temp arrays */


  // Initial index of merged subarry array 
  let k = l
  for(var i=0,j=0;i<n1 && j<n2; k++){
    animations.push(['comp',l + i,m + 1 + j])
    if (L[i] <= R[j]) { 
      animations.push(['swap',k,L[i]]) 
      animations.push(['decomp',l+i,m + 1 + j])
      if(temp === 1){
        animations.push(temp)
      }
      arr[k] = L[i] 
      i++ 
    } 
    else { 
      animations.push(['swap',k,R[j]]) 
      animations.push(['decomp',l + i,m + 1 + j])
      if(temp === 1){
        animations.push(temp)
      }
      arr[k] = R[j] 
      j++ 
    }
  }

  /* Copy remaining elements of L[] if any */
  while (i < n1) { 
    animations.push(['swap',k,L[i]]) 
    if(temp === 1){
      animations.push(temp)
    }
    arr[k] = L[i] 
    i++ 
    k++ 
  } 

  /* Copy remaining elements of R[] if any */
  while (j < n2) { 
    animations.push(['swap',k,R[j]]) 
    if(temp === 1){
      animations.push(temp)
    }
    arr[k] = R[j] 
    j++ 
    k++ 
  } 
}

export default getMergeSort