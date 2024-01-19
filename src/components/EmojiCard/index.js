// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickEmoji = () => {
    onEmoji(id)
  }

  return (
    <li className="emojiDiv">
      <button className="emojiBtn" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emojiImg" />
      </button>
    </li>
  )
}

export default EmojiCard
