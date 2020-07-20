import getMergeSort from '../Algorithms/MergeSort'

//to show winner
const FINAL_COL="#006687"
//to show values being compared
const COMP_COL="#ba008c"
//primary color
const PRIM_COL = "#008CBA"

const mergeSort = (arr,max,speed,toggle) =>{
  toggle(true)
  const [animations] = getMergeSort(arr)

  
  const TIME = speed * animations.length/2 + 1500
  setTimeout(()=>toggle(false),TIME)
}

export default mergeSort