import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../views/home.tsx';
import Institutions from '../views/institutions.tsx';
import Details from '../views/Details.tsx';
import Error404 from '../views/Error404'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/institutions',
        element: <Institutions />
    },
    {
        path: '/details',
        element: <Details />
    }

]);

const Routes = () => <RouterProvider router={router} />


export default Routes;