const API_KEY = 'dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e'
const LOCATION_API = `https://api.ipdata.co?api-key=${API_KEY}`;

export default async function getUserLocation() {
    const res = await fetch(LOCATION_API);
    const body = await res.json();
    return body;
}