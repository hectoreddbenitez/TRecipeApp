import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ExplorarComidas() {
  return (
    <>
      <Header headerTitle="Explorar Comidas" showSearchBar={ false } />
      <Link to="/explorar/comidas/ingredientes">
        <button type="button" data-testid="explore-by-ingredient">
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas/area">
        <button type="button" data-testid="explore-by-area">
          Por Local de Origem
        </button>
      </Link>
      <Link to="/">
        <button type="button" data-testid="explore-surprise">
          Me Surpreenda!
        </button>
      </Link>
      <Footer />
    </>
  );
}
