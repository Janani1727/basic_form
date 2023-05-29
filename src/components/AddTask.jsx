import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "../utils/HandleApi";


function AddTask() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(id)
  }

  return (
    <div className="AddTask">
     

      <div className="container">

        <h1>Add Task</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add Tasks..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={isUpdating ?
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          </div>

        </div>

        <div className="list">

          {toDo.map((item) => <ToDo 
          key={item.id} 
          text={item.text}
          updateMode = {() => updateMode(item.id, item.text)}
          deleteToDo = {() => deleteToDo(item.id, setToDo)} />)}

        </div>

      </div>

    </div>
  );
}

export default AddTask;



