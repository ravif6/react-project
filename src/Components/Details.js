import {PropTypes} from 'prop-types';
export const Details = (props) => {

 
    return (<div>
        <h3 className="w3-center">WHERE {props.name} WORK</h3>


<p className="w3-center"><em>I'd love your feedback!</em></p>
<div className="w3-row w3-padding-32 w3-section">
  <div className="w3-col m4 w3-container">
  </div>
  <div className="w3-col m8 w3-panel">
    <div className="w3-large w3-margin-bottom">
      <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Chicago, US<br/>
      <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +00 151515<br/>
      <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: mail@mail.com<br/>
    </div>
    <p>Swing by for a cup of <i className="fa fa-coffee"></i>, or leave me a note:</p>
      </div>
</div>
    </div>)
}
Details.propTypes = {
  name: PropTypes.number
}
