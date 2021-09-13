export const getGifs = async (categoria) => {

    //Crear la categoria y recibir la petición HTTP
       const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=9&api_key=wA9Q7WkHLe1yNJbKDuJrUASl5HdluUNj`;
       const respuesta = await fetch(url);
       const { data } = await respuesta.json();
   
       const gifs = data.map(img => {
           return {
               id: img.id,
               title: img.title,
               url: img.images.original.url
           }
       })
   
       return gifs
   }