import { useState } from "react";

const useForm = (initialValues={}) => {
  const [datos, setDatos] = useState(initialValues);

  const limpiar = () => setDatos(initialValues);

  const handleInputs = (e) =>{
      console.log(e.target.type)
      setDatos({
          ...datos,
          [e.target.name] : e.target.value,
      });
  }

  return [datos, handleInputs, limpiar];
}

export default useForm