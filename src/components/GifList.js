import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';

import { GifItem } from "./GifItem";

import { useFetchGifs } from "../hooks/useFetchKeys";

export const GifList = ({category}) => {
    
    const {data, loading} = useFetchGifs(category)    
    
    return (
        <div>
            <h3>Category: {category}</h3>
            <div className="cards">
                { loading && <p>Cargando ... </p> }
                {
                    data.map(gif => {                    
                        return <GifItem key={gif.id} {...gif} />
                    })
                }
            </div>            
        </div>
    )
        
}
