import axios from "axios";
import md5 from "crypto-js/md5";

const API_URL = "https://gateway.marvel.com/v1/public/characters";
const PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

export const getMarvelCharacters = async () => {
    const ts = new Date().getTime();
    const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

    try {
        const response = await axios.get(`${API_URL}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);
        return response.data.data.results;
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
        return [];
    }
};
