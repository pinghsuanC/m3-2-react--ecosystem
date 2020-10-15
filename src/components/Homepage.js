import React from 'react';
import ListingGrid from './ListingGrid.js';
import {items} from "../data.js";

const Homepage = () => {
    let item_list = Object.values(items);
    return <><p className="homepage">Fruit emporium sells the finest fruits from this world and beyond. </p>
                <p>Browse items:</p>
            
            <ListingGrid itemList={item_list}/>
        </>

}


export default Homepage;