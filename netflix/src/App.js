import { Provider } from "react-redux";
import Body from "./components/Body";
import { RouterProvider } from "react-router-dom";
import appstore from "./utils/appstore";

function App() {
  return (
  <Provider store={appstore}>
    
<Body/>

  </Provider>
     
   
  );
}

export default App;
