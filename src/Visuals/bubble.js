import getBubbleSort from '../Algorithms/BubbleSort'

//to show winner
const FINAL_COL="#006687"
//to show values being compared
const COMP_COL="#ba008c"
//primary color
const PRIM_COL = "#008CBA"

const bubbleSort = (arr,max,speed,toggle) =>{ 
  toggle(true)
  const [animations,array] = getBubbleSort(arr)
  let temp = array.length-1
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('bar')
    if(i % 4 === 0) {
        const color = (i % 4 === 0) ? COMP_COL : FINAL_COL
        const [barOneIndex, barTwoIndex] = animations[i]
        const barOneStyle = arrayBars[barOneIndex].style
        const barTwoStyle = arrayBars[barTwoIndex].style
        setTimeout(() => {
            barOneStyle.backgroundColor = color
            barTwoStyle.backgroundColor = color
        },i * speed)
    }else if(i % 4 === 1){
      const [barOneIndex, barTwoIndex] = animations[i-1]
      if(animations[i][0]>animations[i][1]){
        setTimeout(() => {
            arrayBars[barOneIndex].style.backgroundColor=FINAL_COL
        },i * speed)
      }else{
        setTimeout(() => {
          arrayBars[barTwoIndex].style.backgroundColor=FINAL_COL
        },i * speed)
      }
    }
    else {
        const [barIndex, value] = animations[i]
        const barStyle = arrayBars[barIndex].style
        if(barIndex === temp){
          let newHeight=(window.innerHeight-130)*value/max
          temp--
          setTimeout(() => {
            barStyle.backgroundColor = FINAL_COL
            barStyle.height = `${newHeight}px`
          },i * speed)
          if(temp === 0){
            setTimeout(() => {
              arrayBars[0].style.backgroundColor = FINAL_COL
            },i * speed)
          }
          continue
        }
        if (value === -1) {
          setTimeout(() => {
            barStyle.backgroundColor = PRIM_COL
          },i * speed)
          continue
        }
        let newHeight=(window.innerHeight-130)*value/max
        const color = (i % 2 === 0)? PRIM_COL:FINAL_COL
        setTimeout(() => {
            barStyle.backgroundColor = color
            barStyle.height = `${newHeight}px`
        },i * speed)
    }
  }
  const TIME = speed * animations.length/2 + 1500
  setTimeout(()=>toggle(false),TIME)
}

export default bubbleSort