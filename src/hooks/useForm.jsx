import { useState } from "react";

const useForm = (initialValues={}) => {
  const [datos, setDatos] = useState(initialValues);

  const limpiar = () => setDatos(initialValues);

  const handleInputs = (e) =>{
      setDatos({
          ...datos,
          [e.target.name] : { valor:e.target.value, error:'' },
      });
  }

  return [datos,setDatos, handleInputs, limpiar];
}

export default useForm