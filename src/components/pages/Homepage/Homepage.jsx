import React from "react";
import Category from '../../../components/organisms/Cards/HomepageCard/Category'
import useFetch from "../../../useFetch";
import BannerCarousel from "../../organisms/Carousel/BannerCarousel";
const Homepage = () => {
    const categoriesData = useFetch("http://localhost:5000/categories", "GET");
    console.log(categoriesData);
    let categoriesList = null;
  
    if (categoriesData.apiData !== null) {
      categoriesList = categoriesData.apiData.map((category, index) => {
        return (
              <Category
                categoryIndex={index}
                id={category.id}
                url={category.imageUrl}
                heading={category.name}
                text={category.description}
                button={category.key}
              />
        )
        });
    }
    return (
 
            <div className="Homepage">

                <BannerCarousel/>
                {categoriesList && categoriesList.length > 0 ?
                <div className="listingSection">
                {categoriesList}
                </div>
                :
                <section className="loader"/>
            }
            </div>
    )
};

export default Homepage;
