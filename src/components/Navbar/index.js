import './index.css'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value
      console.log(isDarkTheme)

      const toggleThemeBtn = () => {
        toggleTheme()
      }

      return (
        <div
          className={`navbar-container ${
            isDarkTheme ? 'dark-theme' : 'route-name'
          }`}
        >
          <img
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
            }
            alt="website logo"
            className="navbar-img"
          />
          <ul className="route-names">
            <Link to="/" className="route-name">
              <li className={isDarkTheme ? 'dark-theme' : ''}>Home</li>
            </Link>
            <Link to="/about" className="route-name">
              <li className={isDarkTheme ? 'dark-theme' : ''}>About</li>
            </Link>
          </ul>
          <img
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
            }
            alt="theme"
            className="navbar-img"
            onClick={toggleThemeBtn}
            data-testid="theme"
          />
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
