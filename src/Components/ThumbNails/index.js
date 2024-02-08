import './index.css'

const ThumbNails = props => {
  const {details, onCheckingSelection} = props
  const {id, thumbnailUrl, category} = details

  const onSelectThumbnailImage = () => {
    onCheckingSelection(id)
  }

  return (
    <li>
      <button
        type="button"
        onClick={onSelectThumbnailImage}
        className="thumbnail-btn"
      >
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          value={category}
          className="thumbnail-images"
        />
      </button>
    </li>
  )
}

export default ThumbNails
