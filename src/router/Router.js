import Error from "../mainPage/Error";
import Game from "../mainPage/Game";
import MainPage from "../mainPage/MainPage";
import Login from "../navPage/Login";


export const privateRoutes = [
    {path: "/game", component: Game, exact: true},
    {path: "/posts", component: MainPage, exact: true},
    {path: "/error", component: Error, exact: true},
]

export const publicRoutes = [
    {path: "/login", component: Login, exact: true},
]