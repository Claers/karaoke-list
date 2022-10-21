import React, { useState, useEffect, useContext } from 'react';
import '../styles/JSONForm.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { createBatchMusics } from '../services/api';
import { AuthContext, MusicContext } from "../App"


function AddMusicFromJSON() {

  const { jwtToken, setJwtToken } = useContext(AuthContext);
  const { fetchData } = useContext(MusicContext);

  const [jsonData, setJsonData] = useState("[]")
  const [isMusicFromJSON, setMusicFromJSON] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0)

  function getCategory(category) {
    if (category === "AN") {
      return "Anime";
    } else if (category === "JV") {
      return "Jeux Vidéo";
    } else if (category === "DA") {
      return "Dessin Animé";
    } else if (category === "M") {
      return "Musique";
    } else if (category === "D") {
      return "Disney";
    } else if (category === "S") {
      return "Serie";
    } else if (category === "F") {
      return "Film";
    }
    return category;
  }

  function getLanguage(language) {
    if (language === "JP") {
      return "Japonais";
    } else if (language === "FR") {
      return "Français";
    } else if (language === "AN") {
      return "Anglais";
    } else if (language === "KR") {
      return "Koréen";
    } else if (language === "MUL") {
      return "Multilangue";
    } else if (language === "GER") {
      return "GER";
    }
    return language;
  }

  async function batchCreateMusic(event) {
    event.preventDefault();
    setLoadPercent(0);
    let data = JSON.parse(jsonData)
    let musicData = data.map((music) => {
      return {
        name: music[2],
        serie: music[1],
        vocal: music[5],
        artist: music[3],
        language: getLanguage(music[4]),
        category: getCategory(music[0]),
      }
    })
    await createBatchMusics(musicData, jwtToken, () => { setJwtToken("") })
    await fetchData();
    setJsonData("[]");
    setMusicFromJSON(false);
  }

  function handleChange(event) {
    setJsonData(event.target.value)
  }

  useEffect(() => {
    if (isMusicFromJSON) {
      document.getElementsByClassName("json-container")[0].style.display = "block";
    } else {
      document.getElementsByClassName("json-container")[0].style.display = "none";
    }

  }, [isMusicFromJSON])

  return (
    <div className="col-1">
      {jwtToken && <button onClick={() => { setMusicFromJSON(true) }} className="btn btn-outline-dark">Import JSON</button>}
      <div className="center">
        <div className="json-container">

          <button onClick={() => { setMusicFromJSON(false) }} className="close-btn btn btn-outline-danger fas fa-times" title="close"></button>
          <form onSubmit={batchCreateMusic}>
            <div className="form-group">
              <label>JSON</label>
              <textarea rows="10" className="form-control" placeholder="JSON" name="jsonData" value={jsonData} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-info">Créer</button>
            <ProgressBar now={loadPercent} label={`${loadPercent}%`} />
          </form>
        </div>
      </div >
    </div >
  )
}

export default AddMusicFromJSON;