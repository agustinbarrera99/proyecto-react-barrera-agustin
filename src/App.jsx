import './App.css'
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import NavBar from './components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer greeting = "Hola, bienvenido a nuestro e commerce"/>
    </>
  )
}

export default App
