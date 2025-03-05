import './styles/imageCharacter.css';

export function ImageCharacter({ character }) {

    return (
        <img className="image"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            width="200"
        />
    );
}