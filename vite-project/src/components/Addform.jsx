import React, { useState } from "react";
import axios from "axios";

export const Addform = () => {
  const [formd,setFormd] = useState({
    Name:"",
    Age:"",
    Address:"",
    Department:"",
    Salary:"",
    MaritalStatus:""
  })   
const [formdatashow,setFormdatashow] = useState([])
const handelchange = (e) => {
  const {id, value} = e.target;
  setFormd({...formd,[id] :value,});
  // console.log(e.target.value)
}
React.useEffect(()=>{
 
},[])
const handelsubmit = (e) =>{
  e.preventDefault()
  axios.post("http://localhost:3001/users",formd).then(()=>{
    alert("Sucessfully Submitted")
  })
  
}
  return (
    <div className="addHouseContainer">
      <form onSubmit={handelsubmit}>
        <label>Name</label>
        <input onChange={handelchange} type="text" className="name" id = "Name"/>
        <br />
        <label>Age</label>
        <input onChange={handelchange} type="Number" className="ownerName" id="age" />
        <br />
        <label>Address</label>
        <input onChange={handelchange} type="text" className="address" id="address" />
        <br />
        <label>Department</label>
        <input onChange={handelchange} type="text" className="areaCode" id="department"/>
        <br />
        <label>Salary</label>
        
        <input onChange={handelchange} type="text" className="rent" id="salary"/>
        <br />
        <label>Marital Status</label>
        <br />
        <label>bachelor</label>
        <input onChange={handelchange} checked={""} type="checkbox" className="bachelor" id="preferredTenants" />
        <br />
        <label>married</label>
        <input onChange={handelchange} checked={""} type="checkbox" className="married" />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>




  );
};
