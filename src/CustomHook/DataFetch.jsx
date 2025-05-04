import useFetch from "./useFetch";

function DataFetch() {
    

  const {datas, error, isLoading, noteTitle, setNoteTitle} = useFetch("http://localhost:3000/posts") // todos


  const submitHandler =(e)=>{
    e.preventDefault();
    const newNote ={
      id: Date.now() + "",
      title: noteTitle
    }
    fetch(`http://localhost:3000/posts`,{
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-Type" : "Application/json"
      }
    }).then(()=>{})
    setNoteTitle("")
    
  }


  return (
    <>
        <h1>Todos</h1>
        <p>{isLoading && <h2>Data is Loading</h2>}</p>
        {error && <p>Error is: {error}</p>}
        {/* Check if datas is not null and if it's an array */}
        <ul>{datas && Array.isArray(datas) && datas.map((todo)=>(
            <li key={todo.id}>{todo.title}</li>
        ))}</ul>

        <form action="" onSubmit={submitHandler}>
          <input type="text" value={noteTitle} onChange={(e)=> setNoteTitle(e.target.value)} />
          <button type="submit" > Submit</button>
        </form>
    </>
  )
}

export default DataFetch;
