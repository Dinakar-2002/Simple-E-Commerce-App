import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';

 const FeesView=()=> {
    const [feesdata,setFeesData]=useState([])
    useEffect(()=>{
        getFees();
    });

    const getFees=async()=>{
        const result=await axios.get(`http://localhost:3001/viewFees`);
        setFeesData(result.data);
        console.log(result.data);
    }

    const DeleteFees=id=>{
        axios.delete(`http://localhost:3001/delfee/${id}`)
            .then(response=>{
                getFees();
    
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
                        <th>Paid_Amount</th>
                        <th>Payment_Date</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            feesdata.map((data,index)=>{
                                return(<tr key={data.id}>
                                    <td>{index+1}</td>
                                    <td>{data.student_id}</td>
                                    <td>{data.paid_amount}</td>
                                    <td>{data.payment_date}</td>
                                    <td>{data.status}</td>
                                     {/* //Delete button */}
                                     <td><button className='btn btn-danger' onClick={()=>DeleteFees(data.id)}>Delete</button></td>
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

export default FeesView
