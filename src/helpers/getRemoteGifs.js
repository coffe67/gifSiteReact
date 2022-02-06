export const getRemoteGifs = async (category) => {
    const serachUrl = `https://api.giphy.com/v1/gifs/search?api_key=JvpgzpogJC8hGNNUIZo8WMy2n5jYPWEL&q=${category}&limit=5&offset=0`;
    console.log(`URL: ${serachUrl}`)
    const resp = await fetch(serachUrl);
    const { data } = await resp.json();        
    return data?.map(item => {
        return { 
            id: item.id,
            title: item.title,
            url: item.images?.downsized_medium.url
        }
    })    
}