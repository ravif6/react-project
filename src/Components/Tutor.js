import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
// relative Link, absolute
export const Tutor = () => {
  const [searchParams,setSearchParams]= useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active';
  return (
    <div><h1>Tutor Details</h1>
        <p>We have created a fictional "personal" website/blog, and our  Excepteur sint occaecat cupidatat nempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
   
        <Outlet/>
<button onClick = {() => {setSearchParams({filter:'active'})}}> Active Tutors</button>
<button onClick = {() => {setSearchParams({})}}> Reset Tutors</button>
{
  showActiveUsers ? (<h3>Active Users</h3>):(<h3>All Users</h3>)
}
    </div>
  )
}
