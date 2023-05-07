import { useNavigate } from "react-router-dom"
import useSignUpForm from './CustomHooks';
export const Contact = () => {
//   const navigate = useNavigate();
  const {inputs, handleInputChange, handleSubmit} = useSignUpForm();
    const style ={margin : '0 -16px 8px -16px'}
 return(<div className="body"> 
ettdard dukkjh why are yojhk do`ing in thiuyruiewyrywqieyuwqyes the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.etting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
<div className="w3-row-padding" style={style}>
<form onSubmit={handleSubmit}>
  <div>
    <label>First Name</label>
    <input className="w3-input w3-border" type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
    <label>Last Name</label>
    <input className="w3-input w3-border" type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
  </div>
  <div>
    <label>Email Address</label>
    <input className="w3-input w3-border" type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
  </div>
  <div>
    <label>Password</label>
    <input className="w3-input w3-border" type="password" name="password1" onChange={handleInputChange} value={inputs.password1}/>
  </div>
  <div>
    <label>Re-enter Password</label>
    <input className="w3-input w3-border" type="password" name="password2" onChange={handleInputChange} value={inputs.password2}/>
  </div>
  <button className="w3-button w3-black w3-section" type="submit" >Sign Up</button>
</form>
    </div>
 </div>)  
}
// navigate('/confirmed',{replace: true})
