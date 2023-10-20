import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BtnDetails from './BtnDetails';

const BtnDetails2 = () => {
    const [product, setProduct] = useState([])


    const { _id } = useParams()


    const products = useLoaderData()
    console.log(products)

    useEffect(() => {

        const findproduct = products?.find((product) => product._id === _id);

        setProduct(findproduct);

    }, [_id, products])



    return (
        <div>
            {/* <BtnDetails product={product}></BtnDetails> */}
        </div>
    );
};

export default BtnDetails2;