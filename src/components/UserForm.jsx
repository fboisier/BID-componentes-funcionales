import React from 'react';
import useForm from '../hooks/useForm';


const UserForm = (props) => {

    const initialValues = {
        username: '',
        email: '',
        password:'',
        edad: 20,
    }
    const [datos, handleInputs, limpiar ] = useForm(initialValues);
    
    const { username, email, password, edad } = datos;

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, edad };
        console.log("Welcome", newUser);
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label>Username: </label>
                <input value={username} name="username" type="text" onChange={handleInputs} />
            </div>
            <div>
                <label>Email Address: </label>
                <input value={email} name="email" type="text" onChange={handleInputs} />
            </div>
            <div>
                <label>Password: </label>
                <input value={password} name="password" type="text" onChange={handleInputs} />
            </div>
            <div>
                <label>Edad: </label>
                <input value={edad} name="edad" type="number" onChange={handleInputs} />
            </div>
            <input type="submit" value="Create User" />
            <button type="button" onClick={limpiar}>Limpiar</button>
        </form>
    );
};

export default UserForm;
