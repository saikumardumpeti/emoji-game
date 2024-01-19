/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojiList: [], topScore: 0, isGameInProgress: true}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getShuffledList = () => {
    const shuffledList = this.shuffledEmojisList()

    return (
      <ul className="ulDiv">
        {shuffledList.map(eachItem => (
          <EmojiCard
            key={eachItem.id}
            onEmoji={this.onEmoji}
            emojiDetails={eachItem}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    this.setState({clickedEmojiList: [], isGameInProgress: true})
  }

  getScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = clickedEmojiList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojiList.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  finishGameAndGiveScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  onEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiAlreadyClicked = clickedEmojiList.includes(id)
    const clickedEmojisLength = clickedEmojiList.length

    if (isEmojiAlreadyClicked) {
      this.finishGameAndGiveScore(clickedEmojisLength)
    } else {
      if (clickedEmojisLength === emojisList.length - 1) {
        this.finishGameAndGiveScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  render() {
    const {clickedEmojiList, topScore, isGameInProgress} = this.state

    return (
      <div className="mainDiv">
        <NavBar
          currentScore={clickedEmojiList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="bodyDiv">
          {isGameInProgress ? this.getShuffledList() : this.getScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
