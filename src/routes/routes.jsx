import { Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { CharacterList } from "../pages/characters/character-list";
import { CharacterDetail } from "../pages/characters/character-detail";
import { PageError } from "../pages/page-error";
import { PrivateRoute } from "./PrivateRoute";

export const routes = (
    <>
        <Route path="/" element={<Login />} />

        <Route element={<PrivateRoute />}>
            <Route path="/characters" element={<CharacterList />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
        </Route>

        <Route path="/*" element={<PageError />} />
    </>
);
