import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Song from './components/Song';
import Info from './components/Info';



function App() {

  //define the state
  const [ searchlyrics, saveSearchLyrics ] = useState({});
  const [ lyrics, saveLyrics ] = useState('');
  const [ info, saveInfo ] = useState({});
 

  useEffect(() => {
    if(Object.keys(searchlyrics).length === 0) return;

   const consultarApiLetra = async () => {

    const { artist, song } = searchlyrics;

   const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
   const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

   const [ lyrics, information ] = await Promise.all([
     axios(url),
     axios(url2)
   ]);
   saveLyrics(lyrics.data.lyrics);
   saveInfo(information.data.artists[0]);

  //  const resultado = await axios(url);
  //  saveLyrics(resultado.data.lyrics);
   }
   consultarApiLetra();  
  }, [searchlyrics, info])

  return (
    <Fragment>
      <Formulario
        saveSearchLyrics={saveSearchLyrics}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
              <Info 
                info={info}
              />
          </div>
          <div className="col-md-6">
              <Song 
                lyrics={lyrics}
                searchlyrics={searchlyrics}
              />
          </div>
  
        </div>
      </div>
    </Fragment>
  );
}

export default App;
