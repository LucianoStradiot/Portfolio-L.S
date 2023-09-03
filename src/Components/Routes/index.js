import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Views/Home';
import Projects from '../Views/Projects';
import Contact from '../Views/Contact';

function RoutesLanding() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default RoutesLanding;
