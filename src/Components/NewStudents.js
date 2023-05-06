import React from 'react'
import {NoteContext} from './Students'
export const NewStudents = () => {
    const Students = [
        {
            id: 1,
            FirstName: "jayant",
            LastName: "kiran",
            Phone: "799678898"
        },
        {
            id: 2,
            FirstName: "rajesh",
            LastName: "kumar",
            Phone: "799678898"
        },
        {
            id: 3,
            FirstName: "harsha",
            LastName: "kiran",
            Phone: "799678898"
        },
        {
            id: 4,
            FirstName: "rahul",
            LastName: "Babu",
            Phone: "799678898"
        },
    ]  
    const name = React.useContext(NoteContext)
 return (
   <div>

       Hello {name}
        <table>
<tr>
    <th>S no.</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Phone</th>
  </tr>
        {
            Students.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.FirstName}</td>
                        <td>{item.LastName}</td>
                        <td>{item.Phone}</td>
                    </tr>)
            })
        }
</table>

    </div>
  )
}
