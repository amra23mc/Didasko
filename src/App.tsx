import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VideoPage from "./videoPage";
import VideoPageKannada from "./videoPageKannada";
import VideoPageTamil from "./videoPageTamil";
import VideoPageTelugu from "./videoPageTelugu";

import MainPage from "./mainPage";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage></MainPage>} />
            <Route path="/videoPage" element={<VideoPage></VideoPage>} />
            <Route
              path="videoPage/Kannada"
              element={<VideoPageKannada />}
            ></Route>
            <Route path="videoPage/Tamil" element={<VideoPageTamil />}></Route>
            <Route
              path="videoPage/Telugu"
              element={<VideoPageTelugu />}
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
