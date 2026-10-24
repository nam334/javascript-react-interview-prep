import Home from "./components/Home/Home.js";
import { ThemeProvider } from "./context/ThemeContext.js";

function App() {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
