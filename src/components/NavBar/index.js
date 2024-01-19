// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props

  return (
    <nav className="navDiv">
      <div className="navLeft">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logoImg"
        />
        <h1 className="gameName">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="navRight">
          <p className="navItem">{`Score: ${currentScore}`}</p>
          <p className="navItem">{`Top Score: ${topScore}`}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
