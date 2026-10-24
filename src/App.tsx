import { Route, Routes } from 'react-router'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import MissionVision from './pages/MissionVision'
import Services from './pages/Services'
import ServicePage from './pages/ServicePage'
import ProfessionalSupport from './pages/ProfessionalSupport'
import AgencyPartnerships from './pages/AgencyPartnerships'
import HireResources from './pages/HireResources'
import HowWeWork from './pages/HowWeWork'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="mission-vision" element={<MissionVision />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServicePage />} />
        <Route path="professional-technical-support" element={<ProfessionalSupport />} />
        <Route path="agency-partnerships" element={<AgencyPartnerships />} />
        <Route path="hire-it-resources" element={<HireResources />} />
        <Route path="how-we-work" element={<HowWeWork />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
