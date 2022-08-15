import { BrowserRouter as Router} from "react-router-dom"
import Navbar from "./components/Navbar";
import "./style/styles.css";
import RouteApp from "./components/RouteApp";
import AuthContext from "./context";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";


function App() {
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <Router>
       <Navbar/>
       <RouteApp />
      </Router> 
    </AuthContext.Provider>
    
  )
}

export default App;