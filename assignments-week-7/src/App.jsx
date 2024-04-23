import Assignment1 from "./components/Assignment1"
import Assignment2 from "./components/Assignment2"
import Assignment3 from "./components/Assignment3"
import Assignment4 from "./components/Assignment4"
import { Route, Routes } from "react-router-dom"
import Assignment7 from "./components/Assignment7/Assignment7"
import BirthdayCardsPage from "./components/Assignment7/BirthdayCardsPage"
import Assignment5 from "./components/Assignment5"
import Assignment6 from "./components/Assignment6"

function App() {
  return (
    <>
      <Assignment1 />
      {/* <Assignment2 /> */}
      {/* <Assignment3 /> */}
      {/* <Assignment4 /> */}
      {/* <Assignment5 /> */}
      {/* <Assignment6 /> */}
      {/* <Routes>
        <Route path="/" element={<Assignment7 />} />
        <Route path="/birthday-cards" element={<BirthdayCardsPage />} />
      </Routes> */}
    </>
  )
}

export default App
