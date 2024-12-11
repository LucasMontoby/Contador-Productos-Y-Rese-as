
import ProductCounter from './ProductCounter';
import Reseñas from './Reseñas';


function App() {
  return (
    <>

     <h1>- Productos a disposición -</h1>

     <ProductCounter producto="Remera con estampado" stockInicial={10}/>
     <ProductCounter producto="Jean elastizado" stockInicial={20}/>
     <ProductCounter producto="Musulosa" stockInicial={8}/>

    <h1>Reseñas</h1>
    <Reseñas/>
    </>
  )
}

export default App;
