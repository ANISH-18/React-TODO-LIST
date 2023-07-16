import Header from './components/Header';
import Create from './components/Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';

function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Todo />} />
    <Route path='/create' element={<Create />} />
    <Route path='/create/:id' element={<Create />} />
    
   </Routes>

   </BrowserRouter>
  );
}

export default App;
