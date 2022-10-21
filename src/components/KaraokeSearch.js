import React, { useContext } from 'react';
import { SearchContext } from "../App"


function KaraokeSearch() {
  const { searchData, setSearchData } = useContext(SearchContext);

  function handleChange(event) {
    setSearchData({
      ...searchData,
      [event.target.name]: event.target.value
    })
  }


  return (
    <div className="row">
      <form>
        <div className="row">
          <div className="col-12 col-lg-2">
            <label>Catégorie</label>
            <select name="category" value={searchData.category} onChange={handleChange} className="form-select" aria-label="Category">
              <option value="" selected>Tous</option>
              <option value="Anime">Anime</option>
              <option value="Jeux Video">Jeux Video</option>
              <option value="Disney">Disney</option>
              <option value="Dessin Anime">Dessin Anime</option>
              <option value="Film">Film</option>
              <option value="Serie">Serie</option>
              <option value="Musique">Musique</option>
            </select>
          </div>
          <div className="col-12 col-lg-2">
            <label>Par Titre</label>
            <input type="text" className="form-control" name="name" value={searchData.name} onChange={handleChange}></input>
          </div>
          <div className="col-12 col-lg-2">
            <label>Par Serie</label>
            <input type="text" className="form-control" name="serie" value={searchData.serie} onChange={handleChange}></input>
          </div>
          <div className="col-12 col-lg-2">
            <label>Par Artiste</label>
            <input type="text" className="form-control" name="artist" value={searchData.artist} onChange={handleChange}></input>
          </div>
          <div className="col-12 col-lg-2">
            <label>Langue</label>
            <select type="text" name="language" value={searchData.language} onChange={handleChange} className="form-select" aria-label="Langue">
              <option value="" selected>Tous</option>
              <option value="Français">Français</option>
              <option value="Anglais">Anglais</option>
              <option value="Japonais">Japonais</option>
              <option value="Allemand">Allemand</option>
              <option value="Coréen">Coréen</option>
              <option value="Multilangue">Multilangue</option>
            </select>
          </div>
          <div className="col-12 col-lg-2">
            <label>Vocals</label>
            <select name="vocal" value={searchData.vocal} onChange={handleChange} className="form-select" aria-label="Vocal">
              <option option value="" selected>Tous</option>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  )

}

export default KaraokeSearch;