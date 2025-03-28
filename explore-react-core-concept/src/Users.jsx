import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return(
        <div>
            <h3>Users: {users.length}</h3>

        </div>
    )
}

/**
 * 1. declare state to hold data
 * 2. useEffect with callbakc dependancy array
 * 3. use fetch to load data
 * 4. 
 */