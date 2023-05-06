import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NoMatch = () => {
    const navigate = useNavigate();
  return (
    <>
    <p>404 Page Not Found</p>
    <button onClick = {() => {navigate('/')}}>Home</button>
    </>
  )
}
