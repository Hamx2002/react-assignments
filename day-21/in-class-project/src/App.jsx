import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
