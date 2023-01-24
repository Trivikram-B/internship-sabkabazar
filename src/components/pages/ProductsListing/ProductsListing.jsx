import useFetch from '../../../useFetch'
import './productsListing.scss'
import Sidebar from '../../organisms/Sidebar/Sidebar'
import DropDown from '../../organisms/DropDown/DropDown'
import Products from '../../organisms/Products/Products'

// const ProductsListing = async() => {
const ProductsListing = () => {
  let categories = useFetch("http://localhost:5000/categories", "GET");
  return (
    <div className='listingProducts'>
      <DropDown categories={categories.apiData}/>
      <Sidebar categories={categories.apiData}/>
      <div className='cardSection'>
        <Products/>
      </div>
    </div>
  )
}

export default ProductsListing