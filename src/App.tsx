import "./App.css";
import Login from "./Login";
import ChatRoom from "./chatRoom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={ChatRoom} path="/" />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
