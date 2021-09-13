import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (categoria) => {

    const [state, setstate] = useState({

        data: [],
        loading: true
    });

    //Petición HTTP
    useEffect(() => {

        getGifs(categoria)
            .then(imgs => {
                setTimeout(() => {
                    setstate({
                        data: imgs,
                        loading: false
                    });

                }, 1000);

            });


    }, [categoria])


    return state; 
}