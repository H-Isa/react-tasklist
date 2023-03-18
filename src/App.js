import Search from "./Search";
import "./index.css" ;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
