import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboar"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"
import { Toaster } from "react-hot-toast";
import { globalReducer } from './reducers/global';
import { useReducer } from "react";
import { StoreContext } from "./context/store";
import AuthMiddleware from "./middlewares/Auth";

export default function App() {

  const [globalState, setGlobalState] = useReducer(globalReducer, {
    isLoggedIn: false,
   
  })


  const value = {
    globalState,
    setGlobalState
  }
  return (//el jsx se interpreta entre parentecis
    
      <StoreContext.Provider value={value}>
      <BrowserRouter>
      <Toaster position="bottom-right" reverseOrder={false}/>
      <Layout>
        <Routes>
          <Route  path="/" element={<Home />}/>
            <Route  path="/login" element={<Login />} />
            <Route  path="/register" element={<Register />} />
            <Route  path="/dashboard" element={<AuthMiddleware><Dashboard /></AuthMiddleware>} />
            <Route  path="/*" element={<NotFound />} />

        </Routes>
        </Layout>
      </BrowserRouter>
    </StoreContext.Provider>
  );
}
//El /* sirve para que cuando el programa no vea ninguna ryta salga notFount

