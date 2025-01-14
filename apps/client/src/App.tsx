import { Route, Routes } from 'react-router-dom';
import MaruEgg from '@/page/maru-egg';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MaruEgg />}></Route>
    </Routes>
  );
}

export default App;
