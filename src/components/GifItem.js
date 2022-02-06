import React from "react";
import PropTypes from 'prop-types';

export const GifItem = ({id,title, url}) => {
    
    return (
        <div className="card" key={id}>
            <img className="card__image" src={url} alt={title}/> 
            <div className="card__overlay">
                <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                                     
                    <div className="card__header-text">
                        <h3 className="card__title">{title}</h3>                        
                    </div>
                </div>
            </div>                        
        </div>
    )
        
}

GifItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}