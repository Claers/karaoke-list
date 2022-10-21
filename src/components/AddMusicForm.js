import React, { useState, useEffect, useCallback, useContext } from 'react';
import '../styles/MusicForm.css';
import { createMusic } from '../services/api';
import { AuthContext, MusicContext } from "../App"


function AddMusicForm() {
  const { jwtToken, setJwtToken } = useContext(AuthContext);
  const { musicData, setMusicData, fetchData } = useContext(MusicContext);
  const [musicFormData, setMusicFormData] = useState({
    name: "",
    serie: "",
    artist: "",
    language: "",
    vocal: "",
    category: "",
  });
  const [isMusicFormOpen, setMusicFormOpen] = useState(false);
  const [isStayOpen, setStayOpen] = useState(false);

  async function createMusicPost(event) {
    event.preventDefault();
    await createMusic(musicFormData, jwtToken, () => { setJwtToken("") });
    await fetchData();
    if (!isStayOpen) {
      setMusicFormOpen(false);
    }
  }

  function handleChange(event) {
    setMusicFormData({
      ...musicFormData,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    if (isMusicFormOpen) {
      document.getElementsByClassName("music-container")[0].style.display = "block";
    } else {
      document.getElementsByClassName("music-container")[0].style.display = "none";
    }

  }, [isMusicFormOpen])

  return (
    <div className="col-1">
      {jwtToken && <button onClick={() => { setMusicFormOpen(true) }} className="btn btn-outline-dark fas fa-plus"></button>}
      <div className="center">
        <div className="music-container">
          <button onClick={() => { setMusicFormOpen(false) }} className="close-btn btn btn-outline-danger fas fa-times" title="close"></button>
          <div className='text'>
            Ajouter une musique
          </div>
          <form onSubmit={createMusicPost}>
            <div className="row">
              <div className="form-group col-lg-5 col-12">
                <label>Categorie</label>
                <select name="category" value={musicFormData.category} onChange={handleChange} className="form-select" aria-label="Category">
                  <option value="Anime" selected>Anime</option>
                  <option value="Jeux Video">Jeux Video</option>
                  <option value="Disney">Disney</option>
                  <option value="Dessin Anime">Dessin Anime</option>
                  <option value="Film">Film</option>
                  <option value="Serie">Serie</option>
                  <option value="Musique">Musique</option>
                </select>
              </div>
              <div className="form-group col-lg-5 col-12">
                <label>Langue</label>
                <select type="text" className="form-select" aria-label="Langue" name="language" value={musicFormData.language} onChange={handleChange} required>
                  <option value="Japonais" selected>Japonais</option>
                  <option value="Français">Français</option>
                  <option value="Anglais">Anglais</option>
                  <option value="Allemand">Allemand</option>
                  <option value="Multilangue">Multilangue</option>
                </select>
              </div>
              <div className="form-group col-lg-2 col-12">
                <label>Voix ?</label>
                <select type="text" className="form-select" aria-label="Langue" name="language" value={musicFormData.language} onChange={handleChange} required>
                  <option value="Oui">Oui</option>
                  <option value="Non">Non</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Nom</label>
              <input type="text" className="form-control" placeholder="Nom" name="name" value={musicFormData.name} onChange={handleChange} required />
            </div>

            <div className="row">
              <div className="form-group col-lg-6 col-12">
                <label>Artiste</label>
                <input type="text" className="form-control" placeholder="Artiste" name="artist" value={musicFormData.artist} onChange={handleChange} />
              </div>
              <div className="form-group col-lg-6 col-12">
                <label>Série</label>
                <input type="text" className="form-control" placeholder="Série" name="serie" value={musicFormData.serie} onChange={handleChange} required />
              </div>
            </div>
            <div className="row">
              <div className="form-check">
                <label>Laisser ouvert</label>
                <input type="checkbox" value={isStayOpen} onClick={() => setStayOpen(true)}></input>
              </div>
            </div>
            <button type="submit" className="btn btn-info">Créer</button>
          </form>
        </div>
      </div >
    </div >
  )
}

export default AddMusicForm;