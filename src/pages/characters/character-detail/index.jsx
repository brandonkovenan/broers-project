import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";

const API_URL = "https://gateway.marvel.com/v1/public/characters";
const PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

export function CharacterDetail() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const ts = new Date().getTime();
                const hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

                const response = await axios.get(
                    `${API_URL}/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
                );

                setCharacter(response.data.data.results[0]);
            } catch (error) {
                setError(`Error al obtener el personaje. ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    if (loading) return <p>Cargando personaje...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="character-detail">
            <h2>{character.name}</h2>
            <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                width="200"
            />
            <p>{character.description || "No hay descripción disponible."}</p>
        </div>
    );
}
