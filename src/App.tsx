import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import MediaKit, { NotFound } from "./pages"

function RedirectExternal() {
  useEffect(() => {
    window.location.href = "https://bio.link/eurocouple"
  }, [])
  return null
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectExternal />} />
        <Route
          path="/media-kit"
          element={<MediaKit title="EuroCouple.nl | Media Kit" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
