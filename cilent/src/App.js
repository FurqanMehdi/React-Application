
import './App.css';
import ProductList from './Component/ProductList';
import ProductForm from './Component/ProductForm';

function App() {
  return (
    <>
    <div className='container'>
      <div className="row">
        <div className="col-md-6"><ProductForm/></div>
        <div className="col-md-6"><ProductList/></div>

    
       </div>
    </div>
    </>
  );
}

export default App;
