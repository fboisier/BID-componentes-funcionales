import React, { useState } from 'react';


const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
    };

    const limpiar = () =>{
        setUsername("");
        setEmail("");
        setPassword("");
    }

    return (
        <form onSubmit={createUser}>
            <div>
                <label>Username: </label>
                <input value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Email Address: </label>
                <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input value={password} type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
            <button type="button" onClick={limpiar}>Limpiar</button>
        </form>
    );
};

export default UserForm;
