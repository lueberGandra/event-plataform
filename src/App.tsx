import { gql, useQuery } from "@apollo/client";

import { Event } from "./pages";
import { Router } from "./Router";
function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
