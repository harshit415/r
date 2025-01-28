import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Component/Home';
import Display from './Component/Display';
import Insert from './Component/Insert';
import Search from './Component/Search';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="display" element={<Display />} />
          <Route path="insert" element={<Insert />} />
          <Route path="search" element={<Search/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
