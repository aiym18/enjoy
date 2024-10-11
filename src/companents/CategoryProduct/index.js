import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from '../ProductCart';

const CategoryProduct = () => {
    const {category}=useSelector((s)=>s.productSl)
    console.log(category,"hh");
    return (
        <div className='py-[60px]'>
            <div className="container">
                <div className="flex flex-wrap gap-12">
                    {
                        category.map((el,idx)=><ProductCart el={el} key={idx}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;