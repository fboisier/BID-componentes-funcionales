import { useState } from 'react';
import './App.css';
import ComponentePruebaFlecha from './components/ComponentePruebaFlecha';
import Ejercicio from './components/Ejercicio';
import UserForm from './components/UserForm';

const App = () => {

  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <h1>Formulario</h1>
      <UserForm />
      <hr />
      <h1>Hola</h1>
      <ComponentePruebaFlecha contador={contador} setContador={setContador} nombre="Francisco" apellido="Boisier" edad={37}>
        <p>Esto es un parrafo enviado como contenido. Es decir Children</p>
      </ComponentePruebaFlecha>
      <Ejercicio />
    </div>
  );
}

export default App;
