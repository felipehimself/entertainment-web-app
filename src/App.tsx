import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Movies, TvShows, Bookmarks } from './pages';
import GlobalStyles from './shared/GlobalStyles';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tvshows' element={<TvShows />} />
          <Route path='/bookmarks' element={<Bookmarks />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
