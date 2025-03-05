import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import axios from "axios";

const API_URL = "https://gateway.marvel.com/v1/public/characters";
const PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

export function useCharacterDetail(id) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchCharacter = async () => {
            try {
                const ts = new Date().getTime();
                const hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

                const response = await axios.get(`${API_URL}/${id}`, {
                    params: { ts, apikey: PUBLIC_KEY, hash },
                });

                setCharacter(response.data.data.results[0]);
            } catch (error) {
                setError("Error al obtener el personaje.");
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    return { loading, error, character };
}
