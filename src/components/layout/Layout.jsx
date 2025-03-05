import { Breadcrumbs } from "./Breadcrumbs";
import './styles/layout.css';

export function Layout({ title, children }) {
    return (
        <div className="layout-container">
            <Breadcrumbs title={title} />
            <div className="layout-content">{children}</div>
        </div>
    );
}
