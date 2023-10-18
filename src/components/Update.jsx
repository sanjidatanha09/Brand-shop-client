import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const product = useLoaderData();

    const { _id, image, name, brandname, type, price, description, rating } = product;

    return (
        <div>
            <h1>Update a product : {name}</h1>
        </div>
    );
};

export default Update;