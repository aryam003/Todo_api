import { useEffect,useState } from "react"
import axios from 'axios'
function List(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get().then((res)=>{
            console.log(res.data);
            setData(res.data)
        }).catch(error=>console.log(error.message))
    },[])
    return(
        <div className="container">
            <h1>Diaplay Details</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value,index)=>(
                        <tr key={index}>
                            <td>{value.task}</td>
                            <td>{value.description}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default List 