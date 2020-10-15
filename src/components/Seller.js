import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {sellers} from '../data.js';

const Seller = () => {
    let seller_list = Object.values(sellers);
    //console.log(seller_list);
    return <Div_o className="sellers-wrapper">
            {seller_list.map((ele, ind)=>{
                return <Div_w className="sellers-wrapper-inner"  key={`seller-${ind}-${ele.id}`}>
                        <Link_set to={`/sellers/${ele.id}`}>
                            <h1>{ele.id}</h1>
                            <Img_s src={ele.avatarSrc} alt={`${ele.id}-avatar`} />
                            <h3>{ele.storeName}</h3>
                            <p>{ele.description}</p>
                        </Link_set>
                    </Div_w>
            })}
        </Div_o>;
}

const Link_set = styled(Link)`
text-decoration: none;
color: black;
`;
const Img_s = styled.img`
height: 40vh;
width: 40vh;
`;
const Div_o = styled.div`
margin-top: 5vh;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-around;
`;
const Div_w = styled.div`
max-width: 50vh;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`;


export default Seller;