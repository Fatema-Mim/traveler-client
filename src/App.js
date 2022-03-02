import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import AboutDetails from "./component/AboutDetails";
import AdminDashboard from './component/AdminDashboard';
import AdminRoute from "./component/AdminRoute";
import Contact from "./component/Contact";
import Footer from './component/Footer';
import Header from "./component/Header";
import Home from './component/Home';
import Login from './component/Login';
import PackageBook from "./component/PackagBook";
import PrivateRoute from './component/PrivateRoute';
import Registration from './component/Registration';
import UserDashboard from './component/UserDashboard';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="font-serif">
      <AuthProvider>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={ <Home />}/>
            <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path='/contact' element={<PrivateRoute><Contact /></PrivateRoute>} />
            <Route path='/about' element={<PrivateRoute><AboutDetails /></PrivateRoute>} />
            <Route path='login' element={<Login />} />
            <Route path='registration' element={<Registration />} />
            <Route path='packagedetails/:id' element={<PrivateRoute><PackageBook /></PrivateRoute>} />            
            <Route path="/userDashboard/*" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
            <Route path='/adminDashboard/*' element={<AdminRoute> <AdminDashboard /> </AdminRoute>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
