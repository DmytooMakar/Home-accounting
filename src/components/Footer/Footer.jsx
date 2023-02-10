import { useState } from "react"
import { Link } from "react-router-dom"

import ModalAlert from "../Pages/Agreement/ModalAlert";

import "./Footer.css"
    

export default function Footer(){
    const [ show, setShow ] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (<>
    <footer className="home_footer_container">
        <div>
            <h2>Угода користувача</h2>
            <p className="text-center">
                <button className="footer_link footer-btn" onClick={handleShow}>Читати</button>
            </p>
        </div>
        <div>
            <h2>Публікації статей</h2>
            <p className="text-center">
                <Link className="footer_link" to="/blogs">Читати</Link>
            </p>
        </div>
    </footer>
    
    <ModalAlert show={show} handleClose={handleClose} />
    </>
    )
}