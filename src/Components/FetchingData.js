import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';

export const FetchingData =  () => {
const [Students,setStudents] = useState([{}]);
const [Name, setName] = useState('ken')
const [FirstName,setFirstName] =  useState('ken')

const search = () => {
  setFirstName(Name)
}
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://localhost:7350/api/Student/GetStudents/'+FirstName,
            responseType: 'application/json',
          })
  .then(function (response) {
    // handle success
    setStudents(response.data)
    console.log(Students);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

    },[FirstName]);
  

    return (
      <div>

Name : 
<input type = 'text' value = {Name} onChange = {(e) => {setName(e.target.value)}}/>
<button onClick={() => {search()}}>search</button>
       <table>
<tr>
   <th>S no.</th>
   <th>First Name</th>
   <th>Last Name</th>
   <th>Type</th>
 </tr>
       {

           Students.map((item) => {
               return (
                   <tr key={item.StudentId}>
                       <td>{item.StudentId}</td>
                       <td>{item.FirstName}</td>
                       <td>{item.LastName}</td>
                       <td>{item.PersonType}</td>
                   </tr>)
           })
       }
</table>

   </div>
    )
}

