import { Link } from "react-router-dom"

import "./HeaderAccounting.css"

export default function HeaderAccounting(){
    return (<>
        <header className="navigation-system">
            <div>
                <Link to="/accounting">
                    <img className="logo-img" src="../../../../../favicon.png" />
                </Link>
            </div>
            <Link className="navigation_link" to="/">Вихід</Link>
        </header>
    </>
    )
}