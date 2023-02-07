import {
    Link
} from "react-router-dom"


import "./Footer.css"

export default function Footer(){
    return (
    <footer className="home_footer_container">
        <div>
            <h2>Угода користувача</h2>
            <p className="text-center">
                <Link className="footer_link" to="">Читати</Link>
            </p>
        </div>
        <div>
            <h2>Публікації статей</h2>
            <p className="text-center">
                <Link className="footer_link" to="/blogs">Читати</Link>
            </p>
        </div>
    </footer>
    )
}