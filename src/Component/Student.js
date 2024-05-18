// import React from 'react'
import axios from 'axios'
import React,{useState} from 'react'

const Student=()=> {

  const initialValues={name:"",course:"",duration:"",total_fees:"",email:"",mobile_no:""}
  const [formValues,setFormvalues]=useState(initialValues)

  const handlechange=(e)=>{
    const {name,value}=e.target
    setFormvalues({...formValues,[name]:value});
    console.log(formValues.name);
  }
  const FormStudent=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/student",{
   feeddata:formValues
      // uid:uid
    }).then((response)=>{
      console.log(response);
      alert("All about student Details")
      //window.location='http://localhost:3000
    })
    .catch(error=>{
      console.log(error);
    })
  }


  return (
    <div>
      <section className="vh-100">
  <div className="mask d-flex align-items-center h-100">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5"><b>Student</b></h2>
              <hr></hr>

              <form onSubmit={FormStudent}>

                <div className="form-outline mb-4">
                  <label className="form-label" ><b>Name</b></label>
                  <input type="text"  className="form-control form-control-lg" value={formValues.name} name='name'  onChange={handlechange} required/>
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" ><b>course</b></label>
                  <input type="text"  className="form-control form-control-lg" value={formValues.course} name='course'  onChange={handlechange} required />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label"><b>Duration</b></label>
                  <input type="text" className="form-control form-control-lg" value={formValues.duration} name='duration'  onChange={handlechange} required/>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label"><b>Total Fees</b></label>
                  <input type="text"  className="form-control form-control-lg" value={formValues.total_fees} name='total_fees' onChange={handlechange} required/>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label"><b>Email</b></label>
                  <input type="text"  className="form-control form-control-lg" value={formValues.email} name='email' onChange={handlechange} required/>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label"><b>Mobile Number</b></label>
                  <input type="text"  className="form-control form-control-lg" value={formValues.mobile_no} name='mobile_no' onChange={handlechange} required/>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn" type='submit' style={{width:"170px", height:"40px",border:"2px solid silver",fontWeight:"bold",
                     boxShadow:"2px 3px 4px 2px  silver ",borderRadius:"3%"}}>Register</button>
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Student
