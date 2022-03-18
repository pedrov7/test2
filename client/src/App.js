import { Main } from "./view/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Stationediter } from "./components/Stationediter";

function App() {
  return (

    <div className="container">

      <BrowserRouter>
        <Routes>

          
          <Route path='/' element={<Main/>}/>
          <Route path='stationedit' element={<Stationediter/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
