import Home from "../pages/HomePage/Home"
import SignIn from "../pages/Auth/SignIn"
import SignOut from "../pages/Auth/SignOut"
import NotFoundPage from "../pages/NotFoundPage"
import CoursesPage from "../pages/CourseListPage/CoursesPage"
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
        path: '/courses',
        page: CoursesPage,
        adminManage: false
    },
    { 
        path: '*',
        page: NotFoundPage
    }
]