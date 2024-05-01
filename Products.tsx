import React, {FC, useEffect, useState} from 'react';
import Product, {IProductProps} from "../product/Product";

const Products: FC = () => {

    const[product, setProduct] = useState<IProductProps[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((res) => res.json())
            .then( ({products}) =>
                setProduct(products))
    }, []);


    return (
        <div>
            {
                product.map((value:IProductProps) => (
                <Product key={value.id}
                        id={value.id}
                         title={value.title}
                         description={value.description}
                         price={value.price}
                         discountPercentage={value.discountPercentage}
                         rating={value.rating}
                         stock={value.stock}
                         brand={value.brand}
                         category={value.category}
                         thumbnail={value.thumbnail}
                         images={value.images}
                    />
            ))}

        </div>
    );
};

export default Products;
