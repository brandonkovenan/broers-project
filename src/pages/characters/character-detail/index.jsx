import { useParams } from "react-router-dom";
import { useCharacterDetail } from "./hooks/useCharacterDetail";

export function CharacterDetail() {
    const { id } = useParams();

    const { loading, error, character } = useCharacterDetail(id);

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
