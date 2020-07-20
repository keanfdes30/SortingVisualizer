import getSelectSort from '../Algorithms/SelectSort'

//to show winner
const FINAL_COL="#006687"
//to show values being compared
const COMP_COL="#ba008c"
//primary color
const PRIM_COL = "#008CBA"

const selectSort = (arr,max,speed,toggle) => {
  toggle(true)
  const [animations,array] = getSelectSort(arr)
  const arrayBars = document.getElementsByClassName('bar')
  for (let i = 0; i < animations.length; i++) {
    if(animations[i][0] === 'init') {
      const barIndex = animations[i][1]
      const barStyle = arrayBars[barIndex].style
      setTimeout(() => {
        barStyle.backgroundColor = FINAL_COL
      },i * speed)
    }else if(animations[i][0] === 'comp') {
      const barOneStyle = arrayBars[animations[i][1]].style
      const barTwoStyle = arrayBars[animations[i][2]].style
      setTimeout(() => {
        barOneStyle.backgroundColor = COMP_COL
        barTwoStyle.backgroundColor = COMP_COL
      },i * speed)
    }else if(animations[i][0] === 'switch') {
      const barOneStyle = arrayBars[animations[i][1]].style
      const barTwoStyle = arrayBars[animations[i][2]].style
      setTimeout(() => {
        barOneStyle.backgroundColor = PRIM_COL
        barTwoStyle.backgroundColor = FINAL_COL
      },i * speed)
    }else if(animations[i][0] === 'noswitch') {
      const barOneStyle = arrayBars[animations[i][1]].style
      const barTwoStyle = arrayBars[animations[i][2]].style
      setTimeout(() => {
        barOneStyle.backgroundColor = FINAL_COL
        barTwoStyle.backgroundColor = PRIM_COL
      },i * speed)
    }else if(animations[i][0] === 'swap') {
      const barOneStyle = arrayBars[animations[i][1]].style
      const barTwoStyle = arrayBars[animations[i][2]].style
      const value1 = animations[i][3]
      const value2 = animations[i][4]
      let newHeight1=(window.innerHeight-130)*value1/max
      let newHeight2=(window.innerHeight-130)*value2/max
      setTimeout(() => {
        barOneStyle.backgroundColor = PRIM_COL
        barOneStyle.height = `${newHeight2}px`
        barTwoStyle.backgroundColor = FINAL_COL
        barTwoStyle.height = `${newHeight1}px`
      },i * speed)
    }
  }
  setTimeout(() => {
    const barStyle = arrayBars[array.length-1].style
    barStyle.backgroundColor = FINAL_COL
  },animations.length * speed)
  const TIME = speed * animations.length/2 + 1500
  setTimeout(()=>toggle(false),TIME)
}

export default selectSort