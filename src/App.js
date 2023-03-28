import './App.css';
import TaskItems from './Component/TaskItems/TaskItems';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/taskitem" element={<TaskItems></TaskItems>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
