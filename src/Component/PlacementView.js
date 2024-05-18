import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';

 const PlacementView=()=> {
    const [placementdata,setPlacementData]=useState([])
    useEffect(()=>{
        getPlacement();
    });

    const getPlacement=async()=>{
        const result=await axios.get(`http://localhost:3001/viewPlacement`);
        setPlacementData(result.data);
        console.log(result.data);
    }

    const DeletePlacement=id=>{
        axios.delete(`http://localhost:3001/delpls/${id}`)
            .then(response=>{
                getPlacement();
    
            });
        }
  return (
    <div>

        <div className='container-fluid mt-2'>
            <div className='row'>
                <h1>Placement Details</h1>
                <table className='table table-bordered table-hover mt-2'>

                    <thead className='table-primary'>
                        <tr>
                            <th>#</th>
                        <th>Student_Id</th>
                        <th>Company</th>
                        <th>Placed_Date</th>
                        <th>package</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            placementdata.map((data,index)=>{
                                return(<tr key={data.id}>
                                    <td>{index+1}</td>
                                    <td>{data.student_id}</td>
                                    <td>{data.company}</td>
                                    <td>{data.placed_date}</td>
                                    <td>{data.package}</td>
                                     {/* //Delete button */}
                                     <td><button className='btn btn-danger' onClick={()=>DeletePlacement(data.id)}>Delete</button></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
      
    </div>
  )
}

export default PlacementView
