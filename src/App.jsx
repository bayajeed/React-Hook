import { useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)


  const submitHandeler = () =>{
    setCount(count + 5)
  }

  useEffect(()=>{
    console.log("this is Effect")
  }, [count])
  console.log("Im randaring")
  return (
    <>
        <button onClick={submitHandeler} >Incriment with +5</button>
        <p>Result: {count}</p>
        {console.log("Last Randering")}
    </>
  )
}

export default App
