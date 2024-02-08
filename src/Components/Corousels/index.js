import './index.css'

const Corousels = props => {
  const {activeImgObject} = props

  return (
    <li className="carousel-img">
      <img
        src={activeImgObject.imageUrl}
        alt="match"
        value={activeImgObject.category}
        className="corousel-image"
      />
    </li>
  )
}

export default Corousels
