import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
       <Route element={<Layout />}>
           <Route index element={<DashboardPage />} />
           <Route path="/portfolio" element={<PortfolioPage />} />
           <Route path="/projects" element={<ProjectsPage />} />
           <Route path="*" element={<NotFoundPage />} />
       </Route>
    </Routes>
  )
}

export default App
