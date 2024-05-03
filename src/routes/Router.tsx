import { RouteObject, createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import { ROUTES } from "./constants";
import { Home } from "../views/Home";
import PublicRouter from "./PublicRouter";
import { Popular } from "../views/Popular";
import { NowPlaying } from "../views/NowPlaying";
import { TopRated } from "../views/TopRated";
import { Favourites } from "../views/Favourites";
import { Show } from "../views/Show";

const routes: RouteObject[] = [
    {
        path: ROUTES.HOME, element: <PrivateRouter />,
        children: [
            { path: ROUTES.HOME, element: <Home /> },
            { path: ROUTES.POPULAR, element: <Popular /> },
            { path: ROUTES.NOW_PLAYING, element: <NowPlaying /> },
            { path: ROUTES.TOP_RATED, element: <TopRated /> },
            { path: `${ROUTES.SHOW}:id`, element: <Show /> },
            { path: ROUTES.FAVOURITES, element: <Favourites /> },
        ]

    },
    {
        path: '/',
        element: <PublicRouter />,
        children: [{ path: '/', element: <Home /> }],

    }

];

export const router = createBrowserRouter(routes);
