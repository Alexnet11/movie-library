import { Route, Routes } from 'react-router';
import Header from './components/Header';
import MoviesPage from './pages/MoviesPage';
import HomePage from './pages/HomePage';

import './App.css';


function App() {
  return(
    <>
      <Header/>

      <main>
        <Routes>
          <Route
            path="/"
            element = {<HomePage/>}
          />

           <Route
            path="/movies"
            element = {<MoviesPage/>}
          />

          </Routes>
      </main>

    </>
  );
}

export default App;