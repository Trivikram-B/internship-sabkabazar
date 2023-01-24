import useFetch from '../../../useFetch'
import Card from '../../molecules/ProductCard/ProductCard'
import { useLocation } from 'react-router-dom'
import './Products.scss'
import noProducts from '../../../assets/images/no-products.png'

// const ProductsListing = async() => {
const Products = () => {
  const location = useLocation();
  let searchQuery = location.search.split('=')[1];
  let products = null;
  let api = "http://localhost:5000/products"
  let productsData = useFetch(api, 'GET');
  let flag=0;

 if(location.search==="")
 {
  if (productsData.apiData != null) {
    products = productsData.apiData.map(product => {
      return (<Card name={product.name} imageUrl={(product.imageURL)} description={product.description} price={product.price} key={product.id} />)
    })
  }
 }
  else{
    if (productsData.apiData != null) {
      products = productsData.apiData.map(product => {
        if (product.category === searchQuery) {
            flag=1
          return (<Card name={product.name} imageUrl={(product.imageURL)} description={product.description} price={product.price} key={product.id} />)
        }
      })
    }
    if(flag===0){
        return <div>
          <img className="noProducts" src={noProducts} alt="no products in cateory"/>  
        </div>
    }
  }
  return products
}

export default Products