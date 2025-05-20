import './App.css'
import Home from "./components/Home.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Login from "./components/Login.tsx";
import Register from "./components/Register.tsx";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
        <Footer/>

    </>
  )
}

export default App
