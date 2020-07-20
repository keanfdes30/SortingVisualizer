import React,{useState, useEffect} from 'react';
import './App.css';
import bubbleSort from './Visuals/bubble'
import selectSort from './Visuals/selection'
import insertSort from './Visuals/insertion'
import mergeSort from './Visuals/merge'

//primary color
const PRIM_COL = "#008CBA"

function App() {
  const [arr,setArr] = useState([1])
  const [range,setRange] = useState(150)
  const [speed,setSpeed] = useState(250)
  const [disable,setDisable] = useState(false)

  useEffect(()=>{
    let sample = []
    const arrayBars = document.getElementsByClassName('bar')
    const N = arrayBars.length
    for(let i = 0;i<N;i++){
      arrayBars[i].style.backgroundColor=PRIM_COL
    }
    for(let i = 1;i<=range;i++){
      sample.push(i)
    }
    sample.sort(()=>Math.random()-0.5)
    setArr(sample)
  },[range])

  // to find highest value in array to get proportions 
  const max = arr.reduce((a, b)=>Math.max(a, b));

  const toggle = (input) =>{
    setDisable(input)
  }

  return (
    <div className="App">
      <div className="slider-container"> 
        <input disabled={disable} className="slider" 
                type="range" min="3" max="300" value={range} 
                onChange={({target})=>setRange(target.value)}>
        </input>
      </div>
      <div className="button-container">
          <button disabled={disable} onClick={()=>bubbleSort(arr,max,speed,toggle)} className="sort-button">Bubble Sort</button>
          <button disabled={disable} onClick={()=>insertSort(arr,max,speed,toggle)} className="sort-button">Insertion Sort</button>
          <div className="range-display">{range}
            <input  disabled={disable} className="speed-slider" 
                    style={{transform:"rotate(180deg)"}}  
                    type="range" min="0.3" max="500" value={speed} 
                    onChange={({target})=>setSpeed(target.value)}>
            </input>
          </div>
          <button disabled={disable} onClick={()=>selectSort(arr,max,speed,toggle)} className="sort-button">Selection Sort</button>
          <button disabled={disable} onClick={()=>mergeSort(arr,max,speed,toggle)} className="sort-button">Merge Sort</button>
      </div>
      <div className="bar-container" >
        {arr.map((value, idx) => (
            <div
                className="bar"
                key={idx}
                style={{
                  backgroundColor: PRIM_COL,
                  height: `${(window.innerHeight-130)*value/max}px`,
                  width:`${(window.innerWidth-40)/arr.length}px`,
                }}
            ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
