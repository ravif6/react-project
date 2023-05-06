import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Studentsubmit = () => {
    const navigate = useNavigate();
  return (
    <>Student added successfully<br/>
    <button className="w3-button w3-black w3-section" onClick = {() => {navigate(-1)}}>Add New Student (Back)  </button> <br/>
    <button className="w3-button w3-black w3-section" onClick = {() => {navigate('/students')}}>View Students</button>
    </>
  )
}
