import { useEffect, useState } from "react"
import Liste from "./Liste"
import axios from "axios"
import Logging from "./Logging"

function ToDoList(){

    const backendURL = "http://127.0.0.1:3001/api/"
    
    const [taches, setTaches] = useState([])
    const [isLogg, setIsLogg] = useState([false,""])
    
    function  createUser(user){
        axios.post(backendURL+'user',user)
        .then(function (response) {
            if(!response.data) {
                alert("Cet email existe déja")
            }
            else{
                alert("C'est ok, vous pouvez vous connecter avec le button Sign In")
            }
        })
    }

    function checkUser(user){
        axios.post(backendURL+'isuser',user)
        .then(function (response) {
            if(response.data) {
                setIsLogg([true, response.data])
            }
            else {
                alert("email ou mot de passe non valide")
            }
        })
    }

    function getData(){
        if(isLogg[0]){
        axios.get(backendURL+'taches/'+isLogg[1])
            .then(function (response) {
            setTaches(response.data)
    })
    }}
    
    function sendData(tache){
        axios.post(backendURL+'tache',tache)
    }
    
    function deleteData(id){
        axios.delete(backendURL+'tache',{data : {rm : id}})
    }

    function editData(tache){
        axios.put(backendURL+'tache', {up : tache.id ,toDo : tache.text})
    }

    function add() {
        let text = document.querySelector("#toDo")
        const id = crypto.randomUUID()
        if(text.value) {
            const tache = {"id" : id , "text" : text.value, "editable" : false, "foreignKey" : isLogg[1]}
            sendData(tache)
            setTaches([...taches, tache])
            text.value = ''
            text.focus()   
        }        
    }

    function remove(id) {
        deleteData(id)
        setTaches(
            taches.filter(tache => tache.id !== id)
        )
    }

    function toggleEdit(id) {
        setTaches(
          taches.map(tache => tache.id === id
            ? { ...tache, editable: !tache.editable }
            : tache
          )
        )
    }

    function edit(tache) {
        const text = document.getElementById(`${tache.id}`).value
        if(text) {
            tache.text = text
            editData(tache)
            setTaches([...taches])
        }
    }

    useEffect(getData, [isLogg])

    return <>
            {!isLogg[0] ?
            (<Logging createUser = {createUser} checkUser = {checkUser} />)
            :
            (<>
            <h1 className="text-center m-3">To do list</h1>
            <div className="input-group m-3 w-auto">
                <input type="text" className="form-control m-1" placeholder="To do" id="toDo" />
                <div className="input-group-append m-1">
                    <button className="btn btn-outline-primary btn-lg" type="button" onClick={add} >Add</button>
                </div>
            </div>
            <Liste taches = {taches} remove = {remove} toggleEdit = {toggleEdit} edit = {edit}/>
            </>)}
        </>
}

export default ToDoList