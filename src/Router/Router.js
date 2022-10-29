import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </BrowserRouter>
  );
}
