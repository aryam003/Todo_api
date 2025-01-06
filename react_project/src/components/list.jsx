import { useEffect,useState } from "react"
function List(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get()
    })
    return(
        <div className="container">
            <h1>Diaplay Details</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value,index)=>(
                        <tr key={index}>
                            <td>{value.title}</td>
                            <td>{value.description}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default List 