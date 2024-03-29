import './index.css'

const Navbar = props => {
  const {score, timeRemaining} = props

  return (
    <nav className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="score-card-details">
        <li>
          <p className="score-text">
            Score: <span className="span-text">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-icon"
          />
          <p className="span-text">{timeRemaining} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
