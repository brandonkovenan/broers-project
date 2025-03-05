import { useParams } from "react-router-dom";
import { useCharacterDetail } from "./hooks/useCharacterDetail";
import { LayoutComponent } from "../../../components/layout";
import { CardContainer } from "../../../components/cardContainer";
import { ImageCharacter } from "../../../components/imageCharacter";
import "./styles/characterDetail.css";

export function CharacterDetail() {
    const { id } = useParams();

    const { loading, error, character } = useCharacterDetail(id);

    if (loading) return <p>Cargando personaje...</p>;
    if (error) return <p>{error}</p>;

    return (
        <LayoutComponent title={character.name}>
            <CardContainer>
                <div className="character-detail">
                    <h2>{character.name}</h2>
                    <ImageCharacter character={character} />
                    <div className="character-detail__description">
                        <span><strong>Descripción:</strong> </span>
                        <p>{character.description || "No hay descripción disponible."}</p>
                    </div>
                </div>
            </CardContainer>
        </LayoutComponent>
    );
}
