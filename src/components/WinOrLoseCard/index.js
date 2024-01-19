// Write your code here.
import './index.css'

const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imgUrl = isWon ? wonImage : loseImg
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreText = isWon ? 'Best Score' : 'Score'

  return (
    <div className="wlDiv">
      <div className="wlLeftDiv">
        <h1 className="wlH1">{gameStatus}</h1>
        <p className="wlP">{scoreText}</p>
        <p className="wlScore">{score}/12</p>
        <button type="button" className="playButton" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="imgDiv">
        <img src={imgUrl} className="finalImg" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
