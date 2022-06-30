import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Completed from './Pages/Completed/Completed';
import Todo from './Pages/Todo/Todo';
import Calendar from './Pages/Calendar/Calendar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='completed' element = {<Completed />} />
        <Route path='todo' element = {<Todo />} />
        <Route path='calendar' element = {<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
