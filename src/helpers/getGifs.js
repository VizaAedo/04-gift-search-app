

export const getGifs = async(category,numero)=>{
    const url =`https://www.freetogame.com/api/games${encodeURI(category) }&limit=${encodeURI(numero)}&api_key=6wfz8qKsS6xJhKkr1263akvQwV1McnQF`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs  = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;


}
