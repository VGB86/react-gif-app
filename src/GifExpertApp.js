import React, { useState } from 'react'
import { AddCategoria } from './componentes/AddCategoria';
import { GifGrid } from './componentes/GifGrid';

export const GifExpertApp = () => {

   const [categorias, setCategorias] = useState([ 'Adventure Time' ]);

     return (
        <div>
            <h2>The Gif Expert App</h2>
            <AddCategoria setCategorias={setCategorias}/>
            <hr/>
                      
            <ol>
                { 
                    categorias.map(categoria =>
                        <GifGrid
                            key={categoria}
                            categoria={categoria}/>
                    )}
            </ol>
        </div>
    )
}

