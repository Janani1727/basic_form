import axios from 'axios'

const baseUrl = "https://famous-mite-clothes.cyclic.app/task"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
           // console.log('data ---> ', data);
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {

    axios
        .post(`${baseUrl}`, { text })
        .then((data) => {
           // console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo =(id,toDoId,  setToDo, setText, setIsUpdating) => {
   
    axios
    .patch(`${baseUrl}/${id}`,{text:toDoId})
    .then((data) => {
        setText("")
         setIsUpdating(false)
        getAllToDo(setToDo)
        // console.log("abha",data);
    })
    .catch((err) => console.log(err))

}

const deleteToDo = (id,setToDo) => {
 
    axios
    .delete(`${baseUrl}/${id}`)
    .then((data) => {
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo }