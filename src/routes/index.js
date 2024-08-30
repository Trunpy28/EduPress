import Home from "../pages/Home"
import SignIn from "../pages/Auth/SignIn"
import SignOut from "../pages/Auth/SignOut"
import NotFoundPage from "../pages/NotFoundPage"
export const routes = [
    {
        path: '/sign-in',
        page: SignIn,
        adminManage: false
    },
    {
        path: '/sign-out',
        page: SignOut,
        adminManage: false
    },
    {
        path: '/',
        page: Home,
        adminManage: false
    },
    { 
        path: '*',
        page: NotFoundPage
    }
]