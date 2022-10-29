import Preloader from "./components/Preloader/Preloader"
import './App.css';
import Login from './components/Login/Login';
import react,{useState,useEffect} from "react";
function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return loader ? (
    <Preloader />
  ) : (
    <div>
      <Login/>
    </div>
  );
}

export default App;
