import Welcome from "./component/Welcome";
import { Routes, Route, Link } from "react-router-dom";
import Counter from "./component/Counter";
import ShowGithubUser from "./component/ShowGithubUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Giu" />} />
        <Route path="counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
      <div>
        <Link to='/'>home</Link>
      </div>
      <div>
      <Link to='/counter'>Counter</Link>
      </div>
      <div>
      <Link to='/users/GiuseppeBuoncore'>User</Link>
      </div>
    </div>
  );
}

export default App;
