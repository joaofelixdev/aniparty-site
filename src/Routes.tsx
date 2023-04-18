import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

export function AppRoutes() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  )
}