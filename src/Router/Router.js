import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home></Home>} />
        <Route path="/Login" element={<Login></Login>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </BrowserRouter>
  );
}
