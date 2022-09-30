import React,{useState} from 'react'

export default function Display() {

    const [arrTask, setArrTask] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [status, setStaus] = useState("Pending")
    const [id, setId] = useState(1)
    const [bg,setBg] = useState("")

    const changeHandler = (e) =>{
        setInputValue(e.target.value)
    }
    const addTask = () =>{
        const task ={
            id: id,
            newTask: inputValue
        }
        setArrTask([...arrTask, task])
        setInputValue("")
        setId(id+1)
    }
    const deleteHandler = (did)=>{
        setArrTask(arrTask.filter((ele) => ele.id !== did ))
    }
    const updateHandler = (uid) =>{
        const edit = arrTask.filter(ele => ele.id == uid)
        setInputValue(edit[0].newTask)
        deleteHandler(uid)
    }
    const statusHandler = (sid) =>{
        setStaus(status == "Pending" ? "Completed" : "Pending")
        setBg(status == "Pending" ? "comp" : "pend")
    }

  return (
    <div>
        <h1>TO-DO-LIST</h1>
        <div className="outer-container">
            <div className="input-div">
                <input type="text" placeholder='Add Your List Item' value={inputValue} onChange={changeHandler} />
                <button onClick={addTask}>Add</button>
            </div>
            <div className="output-div">
                {
                    arrTask.map((val, index) => (
                        <div className='displayTask'>
                            <h2 className={bg}>{index+1}. {val.newTask}</h2>
                            <button className="update" onClick={()=>updateHandler(val.id)}>Edit</button>
                            <button className="delete" onClick={()=>deleteHandler(val.id)}>Del</button>
                            <button className={`status ${bg}`} onClick={()=>{statusHandler(val.id)}}>{status}</button>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
