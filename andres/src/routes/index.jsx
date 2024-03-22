import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../views/Home.tsx';
import Error404 from '../views/Error404';
import Register from '../views/Register.tsx';
import Student from '../views/Student.tsx';
import ShowQR from '../components/ShowQR.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/Register',
        element: <Register />
    },
    {
        path: '/Student',
        element: <Student />
    },
    {
        path: '/Student/:studentID',
        element: <ShowQR />
    }


]);

const Routes = () => <RouterProvider router={router} />


export default Routes;