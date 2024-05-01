import React, {FC} from 'react';

export interface IProductProps {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images": string[]

}


const Product: FC<IProductProps> = ({
                                        id,
                                        title,
                                        description,
                                        price,
                                        discountPercentage,
                                        rating,
                                        stock,
                                        brand,
                                        category,
                                        thumbnail,
                                        images }) => {
    return (
        <div>
            <h1>{title}. {brand}</h1>
            <ul>
                {images.map((image, i) => (
                    <li key={i}><img src={image} alt={title}/></li>
                ))}
            </ul>

            {/*<img src={images[0]} alt={title}/>*/}
            <h2>{description} <br/> {price} £</h2>
            <p> discountPercentage:{discountPercentage},rating: {rating},stock: {stock}</p>
            <p>{category}, {thumbnail}</p>
            <img src={thumbnail} alt={title}/>

        </div>
    );
};

export default Product;
