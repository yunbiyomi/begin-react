import React from 'react'
import {data} from '../database/data';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import ShoppingCart from '../assets/icon-shopping-cart-white.svg';

export default function HomePage() {
    console.log(data);

  return (
    <ProductMain>
        <DataList>
            {data.map(item =>
                <ProductCard
                key={item.id}
                productName={item.productName}
                price={item.price}
                thumbnailImg={item.thumbnailImg}
                />)}
        </DataList>
        <CartLink></CartLink>
    </ProductMain>
  )
}

const ProductMain = styled.main`
    display: flex;
    justify-content: center;
    margin-top: 160px;
    padding-bottom: 156px;
`;

const DataList = styled.ul`
    
`;

const CartLink = styled.a`
    background: purple url(${ShoppingCart}) no-repeat center / 40 40;
`;