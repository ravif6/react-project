
import pic from "./avengers.jpg";
export const About = () => {
    const react = {width:'90%'};
    const python = {width:'85%'};
    const golang = {width:'75%'};
  return (
    <div className="body"><div className="w3-row">
    <div className="w3-col m6 w3-center w3-padding-large">
      <p><b><i className="fa fa-user w3-margin-right"></i>Sonakshi</b></p>
      <img src={pic} className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333" />
    </div>

   
    <div className="w3-col m6 w3-hide-small w3-padding-large">
      <p>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
  <p className="w3-large w3-center w3-padding-16">Im really good at:</p>
  <p className="w3-wide">React</p>
  <div className="w3-light-grey">
    <div className="w3-container w3-padding-small w3-dark-grey w3-center" style = {react}>90%</div>
  </div>
  <p className="w3-wide">Python</p>
  <div className="w3-light-grey">
    <div className="w3-container w3-padding-small w3-dark-grey w3-center" style = {python}>85%</div>
  </div>
  <p className="w3-wide">Photoshop</p>
  <div className="w3-light-grey">
    <div className="w3-container w3-padding-small w3-dark-grey w3-center" style = {golang}>75%</div>
  </div>
</div>

  )
}
