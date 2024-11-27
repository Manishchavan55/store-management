import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './Templete/Header';
import Addproduct from './Component/Addproduct';
import Viewproduct from './Component/Viewproduct';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="Add" element={<Addproduct></Addproduct>}></Route>
          <Route path="view" element={<Viewproduct></Viewproduct>}></Route>
          <Route path="edit/:id" element={<Addproduct></Addproduct>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
