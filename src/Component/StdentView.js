import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';

 const StudentView=()=> {
    const [studentdata,setStudentData]=useState([])
    useEffect(()=>{
        getStudent();
    });

    const getStudent=async()=>{
        const result=await axios.get(`http://localhost:3001/viewStudent`);
        setStudentData(result.data);
        console.log(result.data);
    }

    const DeleteStudent=id=>{
        axios.delete(`http://localhost:3001/delstd/${id}`)
            .then(response=>{
                getStudent();
    
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
                        <th>Id</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Duration</th>
                        <th>Total_Fees</th>
                        <th>Email</th>
                        <th>Mobile_N0</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentdata.map((data,index)=>{
                                return(<tr key={data.id}>
                                    <td>{index+1}</td>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.course}</td>
                                    <td>{data.duration}</td>
                                    <td>{data.total_fees}</td>
                                    <td>{data.email}</td>
                                    <td>{data.mobile_no}</td>
                                     {/* //Delete button */}
                                     <td><button className='btn btn-danger' onClick={()=>DeleteStudent(data.id)}>Delete</button></td>
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

export default StudentView
