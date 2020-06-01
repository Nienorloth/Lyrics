import React, { useState } from 'react';

const Formulario = ({saveSearchLyrics}) => {

    const [ search, saveSearch ] = useState({
        artist: '',
        song: ''
    });

    const [ error, saveError ] = useState(false);

    const { artist, song } = search;

    //function to every input to read content
    const updateState = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    //consult APIs
    const searchInfo = e => {
        e.preventDefault();

        if(artist.trim() === '' || song.trim() === ''){
            saveError(true); 
            return;
        }
            saveError(false);
        
        //if all good, pass to main component
        saveSearchLyrics(search);
    }

    return ( 
        <div className="bg-dark">
            { error ? <p className= "alert alert-danger text-center p-2">All fields are mandatory</p> : null }
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={searchInfo}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Search for lyrics</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Band/Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Band/Artist name"
                                            onChange={updateState}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                        <label>Song</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Song name"
                                            onChange={updateState}
                                            value={song}
                                        />
                                    </div>
                               </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-secondary float-right"
                            >Buscar</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;