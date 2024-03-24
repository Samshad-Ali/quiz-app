import Card from "./components/Card";
import Navbar from "./components/Navbar";
import QuizBox from "./components/QuizBox";
import { Toaster } from "react-hot-toast";
import {Routes,Route} from 'react-router-dom'
import Quizinput from "./components/Quizinput";
import Quiziniputpage from "./pages/Quiziniputpage";
import Quizpage from "./pages/Quizpage";
function App() {
  return (
    <main>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Quiziniputpage/>} />
        <Route path='/quiz' element={<Quizpage/>} />
      </Routes>
    </main>
  );
}

export default App;
