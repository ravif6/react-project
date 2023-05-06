import React from 'react'
import { useParams } from 'react-router-dom'
export const TutorDetails = () => {
  const {tutorId} = useParams();
  console.log (useParams())
  return (
    <div>
      <p><b>Tutor id</b> : {tutorId}</p>
      <p><b>Tutor name</b> : Ramesh</p>
      <p><b>Tutor subject</b> : React</p>
      <p><b>Tutor Experience</b> : 2yrs</p>
      </div>
  )
}
