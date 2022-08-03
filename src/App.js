import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      musics: [[]],
      name: "",
      serie: "",
      artist: "",
      language: "",
      vocal: "",
      category: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  getCategory(category) {
    if (category === "AN") {
      return "Anime";
    } else if (category === "JV") {
      return "Jeux Vidéo";
    } else if (category === "JV") {
      return "Jeux Vidéo";
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

  getLanguage(language) {
    if (language === "JP") {
      return "Japonais";
    } else if (language === "VF") {
      return "Français";
    } else if (language === "EN") {
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


  modifyData(data) {
    var musics = [];
    for (var i = 0; i < data.length; i++) {
      var music = data[i];
      var musicData = {
        category: this.getCategory(music[0]),
        serie: music[1],
        name: music[2],
        artist: music[3],
        language: this.getLanguage(music[4]),
        vocal: music[5],
      }
      musics.push(musicData);
    }
    return musics;
  }

  async fetchAllMusics() {
    // const resp = await fetch("https://ncloud.meytis.fr/s/7kg6XcRgFFyWT3m/download/musics.json");
    const resp = await fetch("https://ncloud.meytis.fr/s/GXwb9Pe95MJW3Gf/download/musics.json");
    const data = await resp.json();
    var musics = this.modifyData(data.musics);
    console.log(musics);
    return musics;
  }

  async fetchData() {
    var musics = await this.fetchAllMusics();
    this.setState({ musics: musics });
  }

  componentDidMount() {
    this.fetchData();
  }



  handleChange(event) {
    if (event.target.name === "name") {
      this.setState({ name: event.target.value });
    } else if (event.target.name === "serie") {
      this.setState({ serie: event.target.value });
    } else if (event.target.name === "artist") {
      this.setState({ artist: event.target.value });
    } else if (event.target.name === "language") {
      this.setState({ language: event.target.value });
    } else if (event.target.name === "vocal") {
      this.setState({ vocal: event.target.value });
    } else if (event.target.name === "category") {
      this.setState({ category: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <div class="text-center">
          <h1>Liste des musiques</h1>
        </div>
        <div>
          <form>
            <div class="row">
              <div class="col">
                <label>Catégorie</label>
                <select name="category" value={this.state.category} onChange={this.handleChange} class="form-select" aria-label="Category">
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
              <div class="col">
                <label>Par Titre</label>
                <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.handleChange}></input>
              </div>
              <div class="col">
                <label>Par Serie</label>
                <input type="text" class="form-control" name="serie" value={this.state.serie} onChange={this.handleChange}></input>
              </div>
              <div class="col">
                <label>Par Artiste</label>
                <input type="text" class="form-control" name="artist" value={this.state.artist} onChange={this.handleChange}></input>
              </div>
              <div class="col">
                <label>Langue</label>
                <select name="language" value={this.state.language} onChange={this.handleChange} class="form-select" aria-label="Langue">
                  <option value="" selected>Tous</option>
                  <option value="Français">Français</option>
                  <option value="Anglais">Anglais</option>
                  <option value="Japonais">Japonais</option>
                  <option value="Allemand">Allemand</option>
                  <option value="Multilangue">Multilangue</option>
                </select>
              </div>
              <div class="col">
                <label>Vocals</label>
                <select name="vocal" value={this.state.vocal} onChange={this.handleChange} class="form-select" aria-label="Vocal">
                  <option value="" selected>Tous</option>
                  <option value="Oui">Oui</option>
                  <option value="Non">Non</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th key={this.state.musics[0].category}>{this.state.musics[0].category}</th>
                <th key={this.state.musics[0].serie}>{this.state.musics[0].serie}</th>
                <th key={this.state.musics[0].name}>{this.state.musics[0].name}</th>
                <th key={this.state.musics[0].artist}>{this.state.musics[0].artist}</th>
                <th key={this.state.musics[0].language}>{this.state.musics[0].language}</th>
                <th key={this.state.musics[0].vocal}>{this.state.musics[0].vocal}</th>
              </tr>
            </thead>
            <tbody>
              {this.state.musics.slice(1, this.state.musics.length).filter(
                music => music.serie.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.state.serie.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) &&
                  music.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.state.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) &&
                  music.artist.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.state.artist.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) &&
                  music.language.includes(this.state.language) &&
                  music.vocal.includes(this.state.vocal) &&
                  music.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.state.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
              ).map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.category}</td>
                    <td>{item.serie}</td>
                    <td>{item.name}</td>
                    <td>{item.artist}</td>
                    <td>{item.language}</td>
                    <td>{item.vocal}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


export default App;
