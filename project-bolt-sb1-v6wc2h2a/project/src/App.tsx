import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Building2, Users, Calendar, FileText, BarChart3 } from 'lucide-react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs';
import Candidates from './pages/Candidates';
import Interviews from './pages/Interviews';
import Assessments from './pages/Assessments';

const sidebarItems = [
  { icon: Building2, label: 'Dashboard', path: '/' },
  { icon: FileText, label: 'Jobs', path: '/jobs' },
  { icon: Users, label: 'Candidates', path: '/candidates' },
  { icon: Calendar, label: 'Interviews', path: '/interviews' },
  { icon: BarChart3, label: 'Assessments', path: '/assessments' },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex">
          <Sidebar items={sidebarItems} />
          <main className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/candidates" element={<Candidates />} />
              <Route path="/interviews" element={<Interviews />} />
              <Route path="/assessments" element={<Assessments />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;