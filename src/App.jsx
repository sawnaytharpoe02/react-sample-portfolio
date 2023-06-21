import React from 'react';
import Layout from './components/Layout';
import HomePage from './Pages/HomePage';
import ProjectsPage from './Pages/ProjectPage';
import ExperiencePage from './Pages/ExperiencePage';
import ProjectDetail from './components/ProjectDetail';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="projects/">
          <Route index element={<ProjectsPage />} />
          <Route path=":slug" element={<ProjectDetail />} />
        </Route>
        <Route path="experience" element={<ExperiencePage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
