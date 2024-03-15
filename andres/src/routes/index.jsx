import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../views/home.tsx';
import Institutions from '../views/institutions.tsx';
import Details from '../views/Details.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
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