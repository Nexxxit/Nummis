import {Routes, Route} from 'react-router-dom';
import Layout from "./layouts/Layout.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<DashboardPage/>}/>
                <Route path="/portfolio" element={<PortfolioPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    )
}

export default App
