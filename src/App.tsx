import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieList from './Movies';
import Welcome from './home';
import Layout from './Layout';
import Podcast from './Podcast';

// class Conclusion extends React.Component {
//   render() {
//     return <p>Hope you enjoyed</p>;
//   }
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="movie" element={<MovieList />} />
          <Route path="podcast" element={<Podcast />} />
          {/* <Route path="*" element={<NoPage />} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
