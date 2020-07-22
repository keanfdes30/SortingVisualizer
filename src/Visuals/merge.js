import getMergeSort from '../Algorithms/MergeSort'

//to show winner
const FINAL_COL="#006687"
//to show values being compared
const COMP_COL="#ba008c"
//primary color
const PRIM_COL = "#008CBA"
const mergeSort = (arr,max,speed,toggle) =>{
  let temp=[0]
  toggle(true)
  const [animations] = getMergeSort(arr)
  const arrayBars = document.getElementsByClassName('bar');
  for (let i = 0; i < animations.length; i++) {
    if(animations[i][0] === 'comp'){
      const barOneStyle = arrayBars[animations[i][1]].style
      const barTwoStyle = arrayBars[animations[i][2]].style
      setTimeout(() => {
        barOneStyle.backgroundColor = COMP_COL
        barTwoStyle.backgroundColor = COMP_COL
      },i * speed)
    }else if(animations[i][0] === 'swap') {
      const barOneStyle = arrayBars[animations[i][1]].style
      const value = animations[i][2]
      let newHeight=(window.innerHeight-130)*value/max
      setTimeout(() => {
        barOneStyle.backgroundColor = PRIM_COL
        barOneStyle.height = `${newHeight}px`
      },i * speed)
    }else if(animations[i][0] === 'decomp'){
      const barOneStyle = arrayBars[animations[i][1]].style
      const barTwoStyle = arrayBars[animations[i][2]].style
      setTimeout(() => {
        barOneStyle.backgroundColor = PRIM_COL
        barTwoStyle.backgroundColor = PRIM_COL
      },i * speed)
    }else {
      if(animations[i] === 1){
        setTimeout(() => {
          temp.forEach(val=>arrayBars[val].style.backgroundColor=FINAL_COL)
          if(temp[temp.length-1]<arr.length-1){
            temp.push(temp[temp.length-1]+1)
          }
        },i * speed)
      }
    }
  const TIME = speed * animations.length 
  setTimeout(()=>toggle(false),TIME)
  }
}

export default mergeSort