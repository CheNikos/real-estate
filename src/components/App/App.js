import './App.css';
//import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import Header from "../Header/Header"

function App() {
  return (
    <>
    <div className="app">
    {/* <CurrentUserContext.Provider> */}
    <Header />

    {/* </CurrentUserContext.Provider> */}
    </div>
    </>
  );
}

export default App;
