import React, { Fragment } from 'react';

const Song = ({lyrics, searchlyrics}) => {
   
    if(lyrics.length === 0){
        return null;
    }
   
    return (
        <Fragment>
            <h2>{ searchlyrics.song.toUpperCase() }</h2>
            <p className="letra">{lyrics}</p>
        </Fragment>
    );
}
 
export default Song;
