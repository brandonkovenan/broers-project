import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./styles/index.css";

export function Breadcrumbs({ title }) {
    const location = useLocation();

    const paths = location.pathname.split("/").filter(Boolean);

    return (
        <div className="breadcrumbs">
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/characters">Inicio</Link>
                </Breadcrumb.Item>
                {paths.map((path, index) => (
                    <Breadcrumb.Item key={index}>{path}</Breadcrumb.Item>
                ))}
            </Breadcrumb>
            <h2>{title}</h2>
        </div>
    );
}
