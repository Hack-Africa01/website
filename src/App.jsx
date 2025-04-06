import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import SubmitProject from "./pages/SubmitProject"
import Home from "./pages/Home"
import Hackathons from "./pages/Hackathons"
import HackathonDetails from "./pages/HackathonDetails" // New import
import Projects from "./pages/Projects"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import Login from "./pages/Login"
import CreateHackathon from "./pages/CreateHackathon"

function App() {
  const handleSearch = (query) => {
    console.log("Search query:", query)
  }

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <Layout onSearch={handleSearch}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hackathons" element={<Hackathons />} />
                <Route path="/hackathons/:id" element={<HackathonDetails />} /> {/* New route */}
                <Route path="/submit-project/:hackathonId" element={<SubmitProject />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/create-hackathon" element={<CreateHackathon />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App

