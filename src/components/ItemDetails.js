import React from 'react';
import { useParams } from "react-router-dom";
import {items, sellers} from "../data.js";
import styled from 'styled-components';

const ItemDetails = () => {
    let Img = styled.img`
        width: 70vh;
        height: 70vh;
        object-fit: cover;
        border-radius: 15px;
    `;
    let Img_seller = styled.img`
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
    `;
    let Div_outer = styled.div`
        display: flex;
        justify-content: center;
    `;
    let Div_inner = styled.div`
        max-width: 70vw;
        margin-top: 6vh;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .item-detail-diag{
            font-style: italic;
            color: gray;
        }
    `;
    let Div_price = styled.div`
        background: rebeccapurple;
        color: white;
        width: 90%;
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 2.5em;
        font-weight: 700;
        border-radius: 15px;
    `;
    let Div_info = styled.div`
        margin-left: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
        .item-detail-description{
            font-weight: 600;
            margin-top: 50px;
        }
        .seller-info{
            width: 350px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            text-align: center;
        }
        .item-detail-country-inner{
            font-weight: 700;
            color: black;
        }

    `;
    const { itemId } = useParams();
    let cur = items[itemId];
    let cur_seller = sellers[cur.sellerId];
    let in_stock = cur.quantity > 0 ? true : false;
    let div_sell = undefined;
    if(in_stock){
        div_sell = <Div_price>{`$${cur.price} - Buy now`}</Div_price>;
    }else{
        div_sell = <Div_price>{`Out of Stock`}</Div_price>
    }
    return <Div_outer className="item-detail-wrapper">
        <Div_inner className="item-detail-inner">
            <Img src={cur.imageSrc} />
            < Div_info  className="item-detail-info">
                <div>
                    <h1>{cur.name}</h1>
                    <div className="item-detail-diag">{cur.latinName}</div>
                </div>
                <div className="item-detail-description">{cur.description}</div>
                <div className="item-detail-country item-detail-diag">Product of <span className="item-detail-country-inner item-detail-diag">{cur.countryOfOrigin}</span></div>
                {div_sell}
                <div className="seller-info">
                        <Img_seller src={cur_seller.avatarSrc}></Img_seller>
                        <div>Sold by: {cur_seller.storeName}, by {cur_seller.id}</div>
                </div>
            </Div_info >
        </Div_inner>
    </Div_outer>
};

export default ItemDetails;