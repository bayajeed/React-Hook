import { useEffect, useState } from "react";

const useFetch = (url) => {
  const[ datas, setData] = useState(null)
  const[error, setError] = useState(true)
  console.log("first randering:", datas)
useEffect(() =>{
  fetch(url)
  .then((res)=>{
    if(!res.ok){
      console.log(res)
      throw Error("Data Dose Not Found")
    }else{
      return res.json()
    }
    
  })
  .catch((error)=>{
    setError(error.message)

  })
  .then((data)=>{
    console.log(data)
    setData(data)

  })
}, [url])

return { datas , error }

}
export default useFetch;