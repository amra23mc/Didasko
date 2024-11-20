import "./App.css";
import Title from "./Componants/React Componants/Title";
import PsychLearn from "./Componants/React Componants/PyschOfLearning";
import AboutMe from "./Componants/React Componants/AboutMe";
import Navbar from "./Componants/React Componants/Navbar";

function mainPage() {
  return (
    <>
      <Navbar></Navbar>
      <Title></Title>
      <PsychLearn></PsychLearn>
      <AboutMe></AboutMe>
    </>
  );
}

export default mainPage;
