import { useEffect, useState } from "react";
import { getMarvelCharacters } from "../services/marvelService";

export const useMarvelCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMarvelCharacters();
            setCharacters(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    return { characters, loading, error };
};
