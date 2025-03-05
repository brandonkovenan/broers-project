import { Breadcrumbs } from "../breadCrumbs";
import "./styles/index.css";

export function LayoutComponent({ title, children }) {
    return (
        <div className="layout-container">
            <Breadcrumbs title={title} />
            <div className="layout-content">{children}</div>
        </div>
    );
}
