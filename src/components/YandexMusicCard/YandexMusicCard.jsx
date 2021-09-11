import React from 'react';

export class YandexMusicCard extends React.Component {
    render() {
        const { posterUrl, song, artist, album } = this.props

        return (
            <div className='musicCard'>
                <img className='musicPoster' src={posterUrl} alt="poster" />
                <p className="musicSong">{song}</p>
                <p className="musicArtist">{artist}</p>
                <p className="musicAlbum">{album}</p>
            </div>
        )
    }
}