import {Link} from "react-router-dom";
import './Navbar.css'

function Navbar(props:any) {

    console.log(props)
    return (
        <>
            <nav>
            <span className="hamburger-btn"><i className="fa fa-bars"></i></span>
            <a href="#" className="logo">
                <img src="../../assets/Hire%20icon.png" alt="logo"/>
                <h2>CarHire</h2>
            </a>

            <ul className="links">
                <span className="close-btn"><i className="fa fa-times"></i></span>
                <li><Link to='' >Home </Link></li>
                <li><Link to='/about'>About us</Link> </li>
                <li><Link to='/contact' >Contact us</Link></li>
            </ul>

            <button className="login-btn">Login/Signup</button>
            </nav>
        </>
    )
}

export default Navbar