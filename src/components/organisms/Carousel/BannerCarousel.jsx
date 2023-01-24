import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.scss"
import useFetch from '../../../useFetch';

const DemoCarousel = () => {
    const bannerData = useFetch("http://localhost:5000/banners", "GET");
    if(bannerData.apiData!==null){
    console.log(bannerData);

    return (
        <Carousel>
            <div className='CarauselWrapper'>
                <img src={require(`${bannerData.apiData[0].bannerImageUrl}`)} alt={bannerData.apiData[0].bannerImageAlt} />
            </div>

            <div className='CarauselWrapper'>
            <img src={require(`${bannerData.apiData[1].bannerImageUrl}`)} alt={bannerData.apiData[1].bannerImageAlt} />
            </div>

            <div className='CarauselWrapper'>
            <img src={require(`${bannerData.apiData[2].bannerImageUrl}`)} alt={bannerData.apiData[2].bannerImageAlt} />
            </div>

            <div className='CarauselWrapper'>
            <img src={require(`${bannerData.apiData[3].bannerImageUrl}`)} alt={bannerData.apiData[3].bannerImageAlt} />
            </div>

            <div className='CarauselWrapper'>
            <img src={require(`${bannerData.apiData[4].bannerImageUrl}`)} alt={bannerData.apiData[4].bannerImageAlt} />
            </div>

        

        </Carousel>

    );

    }
}


export default DemoCarousel;