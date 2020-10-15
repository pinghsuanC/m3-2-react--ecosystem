import React from 'react';
import styled from 'styled-components';
import {NavLink, BrowserRouter as Router, Route} from  'react-router-dom';
import Homepage from './Homepage';
import About from './About';
const COLOR = {first: "#7645e8", 
                second: " #ff9999"};

const Header = () => {
    const DIV_H = styled.div`
        display: flex;
        background: #d0dde1;
        justify-content: space-between;
        align-items: center;
        min-height: 10vh;
        padding-left: 15px;
        padding-right: 15px;
    `;
    const NAV = styled(NavLink)`
        text-decoration: none;
        color: #7645e8;
        font-size: 1.2em;
        font-weight: 700;
        margin-right:10px;
        position: relative;
        &:focus {
            color: ${COLOR.second};
        }
    `;

    return <><DIV_H className="header">
            <h1>Fruit Emporium</h1>
            <div>
                <NAV to="/">HOME</NAV>
                <NAV to="/about">ABOUT</NAV>
                {/*<A_H href="/">HOME</A_H>
                <A_H href="/about">ABOUT</A_H>*/}
            </div>
        </DIV_H>
        </>;
}

export default Header;