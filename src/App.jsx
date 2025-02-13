import { Temple } from './components/temple.jsx';
import './CSS/Style.css';


function App () {

  return (

      <div className='App'>
        
        <div className='App-header'>
        <h1> Frases Filosoficas de MFF </h1>
        </div>
        <div className='App-content'>
        <Temple
        imagen = 'chris'
        nombre = 'Christotpher Brandon'
        apodo ='Bocachula'
        frase = 'Por qué no me  chupa el cabeza de perro, cabeza de mondá'/>

        <Temple
        imagen = '2'
        nombre = 'Ariel Barría'
        apodo ='El Chief'
        frase = 'Yo no sé de eso menesteres, debe ser la hora'/>
        </div>

        
        <Temple
        imagen = '3'
        nombre = 'Roderick Ezquivel'
        apodo ='El Roro'
        frase = 'Esta puerca ronca como motor ahogaó, '/>

      </div> 
  
  )
}

export default App;

