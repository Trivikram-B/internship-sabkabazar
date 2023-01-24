import RectangleButton from '../../atoms/Buttons/RectangleButton/RectangleButton'
import './ProductCard.scss'
const Card = ({ name, imageUrl, description, price }) => {
  return (
    <div className="productCard">
      <h2 className="title"><b>{name}</b></h2>
      <div className="imageDescriptionContainer">
        <div className="imageContainer">
          <img className="productImages" src={require(`${imageUrl}`)} alt={name}></img>
        </div>
        <div>
        <p className="productDescription">{description}</p>
        </div>
      </div>
      <div className="cardSubSection">
        <p>MRP Rs.{price}</p>
        <div className='cartButtonStyle'>
          <RectangleButton children="Buy Now" />
        </div>
      </div>
      <div className="cardSubSectionMobileAndTablet">
        <div className='cartButtonStyle'>
          <RectangleButton children={`Buy Now @ MRP Rs.${price}`}/>
        </div>
      </div>
    </div>
  )
}

export default Card