import "./Cultural.css";
import demon from '../assets/pngegg.png'
import angel from '../assets/angel.png'
import Music from "../Music/Music";
import { Link } from "react-router-dom";

const Cultural = () => {
  return (
    <div className="cultural">
       

      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><Link to="/events">Events</Link></li>
          <li><a href="/contact">Contact</a></li>
          <Music/>
        </ul>
      </nav>

      <div className="image-logo">
        <img className="logo" src="https://res.cloudinary.com/ds2uw5gcw/image/upload/v1707329296/ojus_chronicles_zeta_elcssf.png" />
        <h1>CHRONICLES OF THE AGES</h1>
      </div>
      <div className="floating">
          <img
            src={demon}
            width="500"
            height="500"
            alt="Cultural Image"
          />
          
          
      </div>
      <div className="floating2">
          <img
            src={angel}
            width="400"
            height="500"
            alt="Cultural Image"
          /> 
      </div>
    </div>
  )
}

export default Cultural