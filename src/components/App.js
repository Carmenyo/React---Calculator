
import '../styles/layout/_app.scss';
import Boton from './Boton';
import Pantalla from "./Pantalla"
import BotonClear from './BotonClear';
import Footer from './Footer';
import {useState} from "react";
import {evaluate} from "mathjs";

function App() {

   const [input, setInput] = useState ("");

   const agregarInput = valor => {
  setInput(input + valor);
   };

   const calcularResultado = () =>{
     setInput(evaluate(input));
   };

  return (
  <>
    <div className='App'>
    <div className='contenedor-calculadora'>
    <Pantalla input={input}/>
    <div className='fila'>
      <Boton manejarClic= {agregarInput}>1</Boton>
      <Boton manejarClic= {agregarInput}>2</Boton>
      <Boton manejarClic= {agregarInput}>3</Boton>
      <Boton manejarClic= {agregarInput}>+</Boton>
    </div>
    <div className='fila'>
      <Boton manejarClic= {agregarInput}>4</Boton>
      <Boton manejarClic= {agregarInput}>5</Boton>
      <Boton manejarClic= {agregarInput}>6</Boton>
      <Boton manejarClic= {agregarInput}>-</Boton>
    </div>
    <div className='fila'>
      <Boton manejarClic= {agregarInput}>7</Boton>
      <Boton manejarClic= {agregarInput}>8</Boton>
      <Boton manejarClic= {agregarInput}>9</Boton>
      <Boton manejarClic= {agregarInput}>*</Boton>
    </div>
    <div className='fila'>
      <Boton manejarClic= {calcularResultado}>=</Boton>
      <Boton manejarClic= {agregarInput}>0</Boton>
      <Boton manejarClic= {agregarInput}>.</Boton>
      <Boton manejarClic= {agregarInput}>/</Boton>
    </div>
    <div className='fila'></div>
    <BotonClear manejarClear= {() => setInput ("")}>
      Clear
    </BotonClear>
    </div>
    </div>
    <Footer></Footer>
  </> 
  );
}

export default App;
