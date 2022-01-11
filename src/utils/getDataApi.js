
async function getDataApi(url) {

    try {

        const query = await fetch(url);
        return await query.json();
        
    } catch (error) {
        console.log(error);
    }

}
export default getDataApi;