import {
    Link
} from "react-router-dom";

export default function Header(){
    return (
      <header>
        <nav className='navigation_container'>
          <div className='navigation'>
            <Link className='navigation_link' to="/">
              <img className='logo' src='./favicon.png' />
              Home&Accounting
            </Link>
            <Link className='navigation_link' to="/accounting">System</Link>
            <Link className='navigation_link' to="/authorization">Log In/Sig in</Link>
          </div>
        </nav>
      </header>
    )
}