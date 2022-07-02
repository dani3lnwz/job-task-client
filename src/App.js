import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import CompletedTasks from './Pages/CompletedTasks/CompletedTasks';
import ToDo from './Pages/ToDo/ToDo';
import Calender from './Pages/Calendar/Calendar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="completed" element={<CompletedTasks />} />
        <Route path="toDo" element={<ToDo />} />
        <Route path="calender" element={<Calender />} />
      </Routes>
    </div>
  );
}

export default App;
