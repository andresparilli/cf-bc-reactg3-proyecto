import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const user = localStorage.getItem('user');
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (user) {
        return <Navigate to="/" />;
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Aqui es donde se lanza la llamada a la API para solicitar autenticacion
        localStorage.setItem('user', JSON.stringify({ email }));

        // Redirigir a la pagina principal
        navigate('/');
    };

    return (
        <div>
            <h2>Iniciar sesion</h2>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Email
                    <input value={email} onChange={({ target: { value }}) => setEmail(value)} />
                </label>
                <label>
                    Password
                    <input value={password} onChange={({ target: { value }}) => setPassword(value)} />
                </label>
                <button type="submit">Iniciar sesion</button>
            </form>
            <p>Se puede usar cualquier usuario y clave, solo esta a modo prueba de storage</p>
        </div>
    );
};

export default Login;