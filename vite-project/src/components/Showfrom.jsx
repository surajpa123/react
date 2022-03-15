
 import axios from "axios"
import { useEffect } from "react";
 import React, { useState } from "react";
 
const Showform = () => {
    const [showd,setShowd] = useState([]);
React.useEffect(()=>{
getdata()
},[])


const getdata = ()=>{
    axios.get("http://localhost:3001/users").then((res)=>{
     // res.data
     setShowd(res.data)
    })
  }

 

const searchAddress = () => {
  let a = document.getElementById("searcha").value
  axios.get(`http://localhost:3001/users?Name=${a}`).then((res)=>{
    setShowd(res.data)
  })
}
  return (
    <div className="rentalContainer">
      
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Name"
        id="searcha"
      />
      <input type="submit" onClick={searchAddress}/>
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital Status</th>
          </tr>
        </thead>
        <tbody>
          {showd.map((user, index) => {
            return (
              <tr key={user.id} className="houseDetails">
                <td className="houseId">{user.id}</td>
                <td className="houseName">{user.Name} </td>
                <td className="ownersName">{user.age}</td>
                <td className="address">{user.address}</td>
                <td className="areaCode">{user.department}</td>
                <td className="rent">{user.salary}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export {Showform}