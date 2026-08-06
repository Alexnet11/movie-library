import { Route, Routes} from 'react-router';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header'; 
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import './App.css';

function App() {
  return(
    <>
      <Header/>

      <main className='main-content'>
        <Routes>
          <Route
            path='/'
            element = {<HomePage/>} 
          />

          <Route
            path='/movies'
            element= {<MoviesPage/>} 
          />

          <Route
            path='/movies/:movieId'
            element={<MoviesPage/>}
          />

          <Route
            path='*'
            element = {<NotFoundPage/>}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;