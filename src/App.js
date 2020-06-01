import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';


function App() {

  //define the state
  const [ searchlyrics, saveSearchLyrics ] = useState({});

  useEffect(() => {
    if(Object.keys(searchlyrics).length === 0) return;

   const consultarApiLetra = async () => {

    const { artist, song } = searchlyrics;

   const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
   }
   consultarApiLetra();  
  }, [searchlyrics])

  return (
    <Fragment>
      <Formulario
        saveSearchLyrics={saveSearchLyrics}
      />
    </Fragment>
  );
}

export default App;
