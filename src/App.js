
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HeaderAdmin from './comps_admin/headerAdmin';

import UploadTest from './comps_test/uploadTest';
import MyHookComp from './comps_test/myHookComp';
import LazyLoading from './comps_test/lazyLoading';
import HeaderTest from './comps_test/headerTest';
import LazyApi from './comps_test/lazyApi';
import ClientNav from './client_comps/clientNav';
import Home from './client_comps/home';
// בשביל הודעות טוסט צריך קונטיינר שיהיה באפ ואת
// הסי אס אס שלו
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { adminRoutes } from './comps_admin/adminRoutes';
import PersonalArea from './personalArea/personalArea';

function App() {
  return (
    <BrowserRouter>
      {/*       
      <Routes>
        <Route path="/admin/*" element={<HeaderAdmin />} />
        <Route path="/test/*" element={<HeaderTest />} />
        <Route path="/*" element={<ClientNav />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/*" element={<h2>Page 404</h2>}/> */}

      {/* ADMIN ROUTES */}
      {/* {adminRoutes()} */}

      {/* TEST ROUTES */}
      {/* <Route path="/test/upload" element={<UploadTest />} />
        <Route path="/test/ownHook" element={<MyHookComp />} />
        <Route path="/test/lazy1" element={<LazyLoading />} />
        <Route path="/test/lazyApi" element={<LazyApi />} />

     
      </Routes>
      <ToastContainer position="top-left" theme="colored" /> */}
      <PersonalArea name={user.name} email={user.email} phone={user.phone} password={user.password} birth_date={user.birth_date} info={user.info} img_url={user.img_url} />
    </BrowserRouter>
  );
}

export default App;
