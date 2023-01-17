import React, { useState } from 'react';
import useForm from '../hooks/useForm';


const UserForm = (props) => {

    const initialValues = {
        username: { valor:'', error:'' },
        email: { valor:'', error:'' },
        password:{ valor:'', error:'' },
        edad: { valor:20, error:'' },
    }
    const [datos, setDatos, handleInputs, limpiar ] = useForm(initialValues);
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const { username, email, password, edad } = datos;

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { 
            username: username.valor, 
            email: email.valor, 
            password: password.valor,
             edad: edad.valor
        };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const handleInputsConErrores = (e) =>{
        handleInputs(e);

        if ((e.target.type === 'text')&&(e.target.value.length < 3)){
            setDatos({
                ...datos,
                [e.target.name] : { valor:e.target.value, error:'Largo menor a 3' },
            });
        }
    }

    return (
        <form onSubmit={createUser}>
            { hasBeenSubmitted 
                ?
                <h3>Ya fue enviado</h3>
                :
                <h3>No fue enviado.</h3>
            }
            {
                hasBeenSubmitted && <h1>Es verdad!!!</h1>
            }
            <div>
                <label>Username: </label>
                <input value={username.valor} name="username" type="text" onChange={handleInputsConErrores} />
                { username.error && <p>Error: {username.error}</p> }
            </div>
            <div>
                <label>Email Address: </label>
                <input value={email.valor} name="email" type="text" onChange={handleInputsConErrores} />
                { email.error && <p>Error: {email.error}</p> }
            </div>
            <div>
                <label>Password: </label>
                <input value={password.valor} name="password" type="text" onChange={handleInputsConErrores} />
                { password.error && <p>Error: {password.error}</p> }
            </div>
            <div>
                <label>Edad: </label>
                <input value={edad.valor} name="edad" type="number" onChange={handleInputsConErrores} />
                { edad.error && <p>Error: {edad.error}</p> }
            </div>
            <input type="submit" value="Create User" />
            <button type="button" onClick={limpiar}>Limpiar</button>
        </form>
    );
};

export default UserForm;
