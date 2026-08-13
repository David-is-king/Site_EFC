import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

/**
 * POINT D'ENTREE DE L'APPLICATION
 * BrowserRouter active la navigation par adresse (URL propres, sans #).
 *
 * ATTENTION A LA MISE EN LIGNE : avec ce mode, l'hebergeur doit renvoyer
 * index.html pour toutes les adresses, sinon un acces direct a
 * /formations/maintenance-industrielle renverra une erreur 404 du serveur.
 * Sur Netlify, creer un fichier public/_redirects contenant la ligne :
 *     /*    /index.html   200
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
