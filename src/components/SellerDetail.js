import React from 'react';
import { useParams } from "react-router-dom";
import {items, sellers} from "../data.js";
import styled from 'styled-components';
import ListingGrid from './ListingGrid.js';

const SellerDetail = () => {
    let {sellerId} = useParams();
    let cur = sellers[sellerId];
    let item_list = (Object.values(items)).filter((ele)=>{
        return ele.sellerId === cur.id;
    });
    return <Div_outer>
        <Div_info className="sellerDetail-info">
            <Img src={cur.avatarSrc} alt={`${cur.id}-avatar`} />
            <h1>{cur.id}</h1>
            <div>{cur.storeName}</div>
        </Div_info>
        <ListingGrid itemList={item_list}/>
    </Div_outer>
};

let Img = styled.img`
width: 70vh;
height: 70vh;
object-fit: cover;
border-radius: 15px;
`;
let Div_outer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`;
let Div_info = styled.div`
margin-top: 6vh;
margin-left: 60px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

export default SellerDetail;