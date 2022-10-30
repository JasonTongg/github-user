import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';

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
