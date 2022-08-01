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


  async fetchAllMusics() {
    var musics = [[]];
    const resp = await fetch("https://ncloud.meytis.fr/s/7kg6XcRgFFyWT3m/download/musics.json");
    const data = await resp.json();
    musics = data.musics;
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
                <label>Par Nom</label>
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
                {this.state.musics[0].map((item, index) => {
                  return <th key={index}>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {this.state.musics.slice(1, this.state.musics.length).filter(
                music => music[1].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.state.serie.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) &&
                  music[2].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.state.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) &&
                  music[3].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.state.artist.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) &&
                  music[4].includes(this.state.language) &&
                  music[5].includes(this.state.vocal) &&
                  music[0].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.state.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
              ).map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                    <td>{item[3]}</td>
                    <td>{item[4]}</td>
                    <td>{item[5]}</td>
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
