import './index.css'

import ThemeContext from '../../context/ThemeContext'

const Home = () => (
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
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
            }
            alt="home"
            className="page-img"
          />
          <h1 className={isDarkTheme ? 'dark-theme' : 'page-name'}>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
