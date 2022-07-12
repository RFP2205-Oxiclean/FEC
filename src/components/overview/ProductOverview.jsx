import React, {useState, useEffect} from 'react';
import { getProductById, getProductStylesById } from '../../controllers.js';
import CarouselContainer from './CarouselContainer.jsx';


const ProductOverview = ( {product_id}) => {

    return <div className="product-overview-container">
        <CarouselContainer product_id={product_id}></CarouselContainer>
        <div className="overview-product-info">Bottom Information</div>
    </div>
}

export default ProductOverview;