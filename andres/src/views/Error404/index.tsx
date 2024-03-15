import { useRouteError } from 'react-router-dom';
import styles from './erorr404.module.css';

interface RouteError {
    message: string;
    status?: number;
    data?: string;
}

const Error404 = () => {
    const error = useRouteError() as RouteError;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Opps! {error?.status}</h3>
      <p className={styles.description}>{error?.data}</p>
    </div>
  );
};

export default Error404;
