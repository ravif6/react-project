import { useNavigate } from "react-router-dom"
import { Details } from "./Details";
export const Home = () =>{
    const Name = 'ravi';
    const navigate = useNavigate();
    return <div className="body">
  <h3 className="w3-center">ABOUT ME</h3>
  <p className="w3-center"><em>I love Teaching</em></p>
  <p>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
    qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <Details name = {Name}></Details>

  <button onClick = {() => {navigate('contact')}}> Contact me</button>

    </div>

}