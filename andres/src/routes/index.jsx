import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../views/home.tsx';
import Error404 from '../views/Error404';
import Register from '../views/Register.tsx';
import Student from '../views/Student.tsx';
import ShowQR from '../components/ShowQR.tsx';
import Rsvp from '../views/rsvp.tsx';

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
        path: '/Student/:studentId',
        element: <ShowQR />
    },
    {
        path: '/rsvp',
        element: <Rsvp />,
        children: [
            {
                path: 'check-in',
                element: <div>Check In Students</div>,
            },
        ]
    }


]);

const Routes = () => <RouterProvider router={router} />


export default Routes;