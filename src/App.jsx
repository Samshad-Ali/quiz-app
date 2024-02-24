import Card from "./components/Card";
import Navbar from "./components/Navbar";
import QuizBox from "./components/QuizBox";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <main>
      <Toaster />
      <Navbar />
      <QuizBox />
    </main>
  );
}

export default App;
