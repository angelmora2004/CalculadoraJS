import './App.css';
import Boton from './components/Boton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [valor, setValor] = useState("");

  const hacerClic = (texto) => {
    //console.log(texto);
    setValor(valor + texto);
  }

  const calcularClic = () => {
    console.log("La operacion a calcular es: ",valor);
    try {
      setValor(evaluate(valor).toString());
    } catch (error) {
      setValor("Error");
    }
  }

  return (
    <div className='card'>
    <div className="App">
      Calculadora
      <div>
        <input className='barra' type="text"  value={valor} readOnly/>
      </div>
      <div>
        <Boton className="boton" hacerClic={hacerClic}>1</Boton>
        <Boton className="boton" hacerClic={hacerClic}>2</Boton>
        <Boton className="boton" hacerClic={hacerClic}>3</Boton>
        <Boton className="boton" hacerClic={hacerClic}>+</Boton>
      <div/>
      <div>  
        <Boton className="boton" hacerClic={hacerClic}>4</Boton>
        <Boton className="boton" hacerClic={hacerClic}>5</Boton>
        <Boton className="boton" hacerClic={hacerClic}>6</Boton>
        <Boton className="boton" hacerClic={hacerClic}>-</Boton>
      </div>
      <div>
      <Boton className="boton" hacerClic={hacerClic}>7</Boton>
      <Boton className="boton" hacerClic={hacerClic}>8</Boton>
      <Boton className="boton" hacerClic={hacerClic}>9</Boton>
      <Boton className="boton" hacerClic={hacerClic}>*</Boton>
      </div>
      <div>
      <Boton className="boton" hacerClic={hacerClic}>.</Boton>
      <Boton className="boton" hacerClic={hacerClic}>0</Boton>
      <Boton className="boton" hacerClic={calcularClic}>=</Boton>
      <Boton className="boton" hacerClic={hacerClic}>/</Boton>
      </div>
      <div>
        <Boton className="boton" hacerClic={() => setValor("")}>Clear</Boton>
      </div>
      </div>
    </div>
    </div>
  )
}

export default App;
