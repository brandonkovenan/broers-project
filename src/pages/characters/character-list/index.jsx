import { Table } from "antd";
import { Link } from "react-router-dom";
import { useMarvelCharacters } from "../../../hooks/useMarvelCharacter";

export function CharacterList() {
    const { characters, loading, error } = useMarvelCharacters();

    const columns = [
        { title: "Nombre", dataIndex: "name", key: "name", render: (text, record) => <Link to={`/character/${record.id}`}>{text}</Link> },
        { title: "Imagen", dataIndex: "thumbnail", key: "thumbnail", render: (thumbnail) => <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="character" width="50" /> },
    ];

    if (error) return <p>{error}</p>;

    return <Table columns={columns} dataSource={characters} loading={loading} rowKey="id" />;
}
