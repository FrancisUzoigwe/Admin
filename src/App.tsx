import {RouterProvider} from "react-router-dom"
import { mainRoute } from "./Routes/mainRoute";


function App() {
  return (
    <div>
     <RouterProvider router={mainRoute}/>
    </div>
  );
}

export default App;
