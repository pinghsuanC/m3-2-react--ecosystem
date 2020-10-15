import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {items} from "../data.js";
import ItemDetails from "./ItemDetails.js";

const ListingGrid = ({ itemList }) => {
    let Link_sty = styled(Link)`
        text-decoration:none;
        color: inherit; 
    `;
    let Div = styled.div`
        max-width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    `;
    let Div_content = styled.div`
        width: 30vw;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        margin-bottom: 10px;
    `;
    let Div_name = styled.div`
        font-weight: 700;
        text-align: center;
        font-size: ${props => props.title ? "1.3em" : "0.8em"};
        text-shadow: 4px 2px 5px rgba(68,112,210,0.82);
        text-align: center;
    `;
    let Img = styled.img`
        max-width: 10vw;
        max-height: 10vw;
        object-fit: cover;
        margin-top: 20px;
        border-radius: 15px;
        box-shadow: 17px 17px 21px -3px rgba(207,231,255,0.67);
    `;
    return <Div className="item-wrapper">
        {itemList.map((ele, ind)=>{
            return <Div_content key={`fruit-${ind}`} className="item-content">
                <Link_sty to={`/items/${ele.id}`}>
                <Img src={ele.imageSrc} alt={ele.name} />
                <Div_name title="true">{ele.name}</Div_name>
                <Div_name>{ele.latinName}</Div_name>
                </Link_sty>
            </Div_content>
        })}
    </Div>;
};


ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        latinName: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ListingGrid;