import Comments from './comments/Comments';
import './App.css';
import Cards from "./comments/Cards";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './comments/Cards-style.css';
import "./App.css";

// import ClientHead from "./comments/cHeader";

function App() {
  return (
    <div className="App">
      <h1>Garden Roses</h1>
      <hr/>
      <Cards/>
      <hr/>
     <h1>Hey! Add your comments below </h1>
     {/* <ClientHead/> */}
  
  

     <Comments currentUserId="1"/>
     
    </div>
  );
}

export default App;
