import "./App.css";
import { UserProvider } from "./components/context/UserContext";
import Form from "./components/Form";

function App() {
  return (
    <UserProvider>
      <Form />
    </UserProvider>
  );
}

export default App;
