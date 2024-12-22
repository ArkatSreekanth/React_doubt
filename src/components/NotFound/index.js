import './index.css'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div
          className={`page-container ${
            isDarkTheme ? 'dark-theme' : 'light-theme'
          }`}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="page-img"
          />
          <h1
            className={
              isDarkTheme ? 'dark-theme-heading' : 'light-theme-heading'
            }
          >
            Lost Yout Way?
          </h1>
          <p className={isDarkTheme ? 'dark-theme-desc' : 'light-theme-desc'}>
            We cannot seem to find the page you are looking for
          </p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
