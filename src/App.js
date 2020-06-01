import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Song from './components/Song';


function App() {

  //define the state
  const [ searchlyrics, saveSearchLyrics ] = useState({});
  const [ lyrics, saveLyrics ] = useState('');

  useEffect(() => {
    if(Object.keys(searchlyrics).length === 0) return;

   const consultarApiLetra = async () => {

    const { artist, song } = searchlyrics;

   const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

   const resultado = await axios(url);
   saveLyrics(resultado.data.lyrics);
   }
   consultarApiLetra();  
  }, [searchlyrics])

  return (
    <Fragment>
      <Formulario
        saveSearchLyrics={saveSearchLyrics}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
              <Song 
                lyrics={lyrics}
              />
          </div>
  
        </div>
      </div>
    </Fragment>
  );
}

export default App;
