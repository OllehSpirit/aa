import { useContext } from "react";
import {contextData} from "./Context";

import UseReducerHook from "./UseReducerHook";

function App() {

  const[a,]=useContext(contextData)
  // console.log("🚀 ~ App ~ useContext(contextData):", useContext(contextData))

  return (
    <div>
      Hello {a}
      <UseReducerHook/>
    </div>
  );
}

export default App;
