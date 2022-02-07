import React from 'react'
import { Link } from 'react-router-dom';


 const Navbar=(props)=>{
    return (
      <div>
        <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode}`} style={{backgroundColor:`${props.nav}`}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News-Dude</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/">general</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
        </ul>
    </div>
  </div>
  <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.btn} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <h6 style={{color:`${props.color}`}}>{props.mode}mode</h6></div>
</nav>
      </div>
    )
  
}
export default Navbar;