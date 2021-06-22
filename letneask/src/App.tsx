//import { Home } from "./pages/Home";
import {BrowserRouter, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { NewRoom } from "./pages/NewRoom";


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route path={"/rooms/new"} component={NewRoom}/>
    </BrowserRouter>
  );
}

export default App;
