import { useEffect, useState } from "react";

const useFetch = (url) => {
  const[ datas, setData] = useState(null)
  const[error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  console.log("first randering:", datas)

useEffect(() =>{
  setTimeout(() => {
    fetch(url)
    .then((res)=>{
      if(!res.ok){
        console.log(res)
        throw Error("Data Dose Not Found")
      }else{
        return res.json()
      }  
    })
    .catch((err)=>{
      setIsLoading(false)
      setError(err.message)
    })
    .then((data)=>{
      console.log(data)
      setData(data)
      setIsLoading(false)
    })
  }, 3000);
}, [url])

return { datas , error, isLoading }

}
export default useFetch;