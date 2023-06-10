
import { BroswerRouter , Navigate , Routes , Rout} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  
  return (
    <div className="app">
          <BrowserRouter>

              <Routes>

                  < Route path="/" element={<LoginPage />} />
                  < Route path="/home" element={<HomePage />} />
                  < Route path="/profile/:userId" element={<ProfilePage />} />
                  

              </Routes>
          
          </BrowserRouter>
    </div>
  );
}

export default App;
