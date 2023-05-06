import React from 'react'
import { Details } from "./Details";
export const Footer = () => {
  return (
    <div className='footer'>
         <div className="w3-xlarge w3-section">
    <i className="fa fa-facebook-official w3-hover-opacity"></i>
    <i className="fa fa-instagram w3-hover-opacity"></i>
    <i className="fa fa-snapchat w3-hover-opacity"></i>
    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
    <i className="fa fa-twitter w3-hover-opacity"></i>
    <i className="fa fa-linkedin w3-hover-opacity"></i>
  </div>
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" className="w3-hover-text-green">Tech solutions</a></p>
  <Details></Details>
    </div>
  )
}
