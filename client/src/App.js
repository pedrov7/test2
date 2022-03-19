import { Main } from "./view/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Stationediter } from "./components/Stationediter";
import { AuthProvider } from "./context/UseAuth";
import { LoginView } from "./view/LoginView";
import { HomeView } from "./view/HomeView";
import {RequireAuth} from "./context/RequireAuth";
function App() {
  return (

    <div className="container">

      <BrowserRouter>
        <AuthProvider>
          <Routes>


            <Route path='/' element={<LoginView />} />
            <Route path='/stationedit' element={<Stationediter />} />
            <Route path='/stations' element={<RequireAuth><HomeView/></RequireAuth>} />



          </Routes>
        </AuthProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
