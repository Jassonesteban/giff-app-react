import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { ReplaceSpaces } from '../helpers/replaceWhiteSpaces';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            {
                isLoading ? (<h3>CARGANDO GIFS.....</h3>) : null
            }

            <div className="accordion card-grid" id={`accordionExample-${ ReplaceSpaces(category)}`}>
                <div className="accordion-item item-acord">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne-${ReplaceSpaces(category)}`} aria-expanded="true" aria-controls={`collapseOne-${ReplaceSpaces(category)}`}>
                            <h2 className='roboto-regular'>{category}</h2>
                        </button>
                    </h2>
                    <div id={`collapseOne-${ReplaceSpaces(category)}`} className="accordion-collapse collapse show" data-bs-parent={`#accordionExample-${ReplaceSpaces(category)}`}>
                        <div className="accordion-body body-accordion">
                            {
                                images.map((image) => (
                                    <GifGridItem key={image.id} {...image} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
