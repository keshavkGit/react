import React,{useState,useMemo} from 'react'

function App()
{
  const [count,setCount]=useState(0)
  const [item,setItem]=useState(10)

  const multiCountMemo=useMemo(
    function multiCount()
    {
      console.warn("Multicount")
    return count*5 },[count]
  )
 
  return(
    <div classname="App">
      <h1>UseMemo </h1>
      <h1>{count}</h1>
      <h1>{item}</h1>
      <h1>{multiCountMemo}</h1>

      <button onClick={()=>setCount(count+1)}>update count</button>
      <button onClick={()=>setItem(item*10)}>update item</button>

    </div>
  )

} export default App;