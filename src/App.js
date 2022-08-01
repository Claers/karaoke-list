import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    const musics = [
      ["Category", "Series", "Name", "Artist", "Language"],
      ["Anime", "Tenkuu no Escaflowne", "Yakusoku wa Iranai", "Maya Sakamoto", "Japonnais"],
      ["Jeux Vidéo", "Final Fantasy", "1000 Words", "Jade Villalon", "Anglais"],
      ["Anime", "Fullmetal Alchemist Brotherhood", "Again", "YUI", "Japonnais"],
      ["Anime", "Death Note", "Alumina (Ending 1)", "Nightmare", "Japonnais"],
      ["Anime", "Bleach", "Asterisk", "Orange Range (Opening 1)", "Japonnais"],
      ["Anime", "Ranma 1_2", "Ranma 1_2 (Opening)", "Bernard Minet", "Français"],
      ["Anime", "Black Clover", "Black Rover (Opening 3)", "Vickeblanka", "Japonnais"],
      ["Anime", "Jojo's Bizarre Adventure", "Bloody Stream (Opening 2)", "Kazusō Oda", "Japonnais"],
      ["Anime", "Dragonball Z", "Cha-la Head Cha-la (Opening 1)", "Hironobu Kageyam", "Japonnais"],
      ["Anime", "City Hunter 2", "Super Girl (Ending 1)", "Yasuyuki Okamura", "Japonnais"],
      ["Anime", "City Hunter", "Ai Yo Kienaide (Opening 1)", "Kahoru Kohiruimaki", "Japonnais"],
      ["Anime", "City Hunter", "Get Wild (Ending 1)", "Nami Tamaki", "Japonnais"],
      ["Anime", "Naruto Shippuden", "Closer", "Inoue Joe (Opening 4)", "Japonnais"],
      ["Anime", "Ranma 1_2", "Omoide Ga Ippai (Opening 3)", "Coco", "Japonnais"],
      ["Anime", "Code Geass", "Colors (Opening 1)", "FLOW", "Japonnais"],
      ["Anime", "Jojo's Bizarre Adventure", "Crazy Noisy Bizarre Town (Opening 5)", "THE DU", "Japonnais"],
      ["Anime", "Sword Art Online (SAO)", "Crossing field (Opening 1)", "LiSA", "Japonnais"],
      ["Anime", "Dragon Ball GT", "Dan Dan Kokoro Hikareteku (Opening 1)", "Field of View", "Japonnais"],
      ["Anime", "DGray-Man", "Pride of Tomorrow (Ending 2)", "JUNE", "Japonnais"],
      ["Anime", "K-ON", "Don't Say Lazy (Ending 1)", "K-ON", "Japonnais"],
      ["Anime", "Bleach", "D-TecnoLife (Opening 2)", "UVERworld", "Japonnais"],
      ["Anime", "Durarara", "Uragiri no Yuuyake (Opening 1)", "THEATRE BROOK", "Japonnais"],
      ["Anime", "Durarara", "Complication (Opening 2)", "ROOKIEZ is PUNK'D", "Japonnais"],
      ["Anime", "Inuyasha", "Every Heart", "BoA", "Japonnais"],
      ["Anime", "Jojo's Bizarre Adventure", "Fighting Gold Romaji (Opening 8)", "Coda", "Japonnais"],
      ["Anime", "Nanatsu no Taizai", "Howling (Saison 2 Opening 1)", "FLOW x GRANRODEO", "Japonnais"],
      ["Anime", "Fruits Basket", "For Fruits Basket", "Ritsuko Okazaki", "Japonnais"],
      ["Anime", "K-ON", "Fuwa Fuwa Time", "K-ON", "Japonnais"],
      ["Anime", "Given", "Fuyu no Hanashi", "Given", "Japonnais"],
      ["Anime", "Jojo's Bizarre Adventure", "Great Days (Opening 7)", "Karen Aoki & Daisuke Hasegawa", "Japonnais"],
      ["Anime", "Demon Slayer", "Gurenge (Opening 2)", "LiSA", "Japonnais"],
      ["Anime", "Naruto", "Haruka Kanata (Opening 2)", "Asian Kung-Fu Generation", "Japonnais"],
      ["Anime", "Boku No Hero Academia", "Hero too", "KYOKA JIRO Starring Chrissy Costanza", "Anglais"],
      ["Anime", "Your Lie In April", "Hikaru Nara", "Goose House", "Japonnais"],
      ["Anime", "Yu Yu Hakusho", "HoHo Emi No Bakudan (Opening 1)", "Matsuko Mawatari", "Japonnais"],
      ["Anime", "Hunter X Hunter", "Departure (Opening 1)", "Masatoshi Ono", "Japonnais"],
      ["Anime", "Fire Force", "Inferno (Opening 1)", "Mrs. GREEN APPLE", "Japonnais"],
      ["Anime", "Le Voyage de Chihiro (Ghibli)", "Itsumo Nando Demo", "Joe Hisaishi & Kimura Youmi", "Japonnais"],
      ["Anime", "Kaguya-sama Love is War", "DADDY! DADDY! DO! (Opening 2)", "Masayuki Suzuki", "Japonnais"],
      ["Anime", "Jujutsu Kaisen", "Kaikai Kitan", "Eve", "Japonnais"],
      ["Anime", "Demon Slayer", "Kamado Tanjirou no Uta", "Go Shiina .feat Nami Nakagawa", "Japonnais"],
      ["Musique", "Daydream", "Kataomoi", "Aimer", "Japonnais"],
      ["Anime", "Domestic na Kanojo", "Kawaki wo Ameku (Opening)", "Minami", "Japonnais"],
      ["Anime", "Full Metal Alchemist", "Kesenai Tsumi (Ending 1)", "Nana Kitade", "Japonnais"],
      ["Anime", "Noragami Aragoto", "Kyouran Hey kids (Opening)", "The Oral Cigarettes", "Japonnais"],
      ["Anime", "Bleach", "Life is Like a Boat", "Rie Fu (Ending 1)", "Japonnais"],
      ["Anime", "Fairy Tail", "Masayume Chasing (Opening 15)", "BoA", "Japonnais"],
      ["Anime", "Sailor Moon", "Moonlight Densetsu (Opening 1)", "DALI", "Japonnais"],
      ["Anime", "Tonari no Kaibutsu kun", "Q&A Recital (Opening)", "My Little Monster", "Japonnais"],
      ["Anime", "Inuyasha", "My Will (Opening)", "Dream", "Japonnais"],
      ["Anime", "Naruto", "Go!! (Opening 4)", "Flow", "Japonnais"],
      ["Anime", "Naruto", "Heros Come Back (Opening 1)", "Nobodyknows+", "Japonnais"],
      ["Anime", "Naruto", "Yura Yura (Opening 9)", "Hearts Grow", "Japonnais"],
      ["Anime", "Naruto Shippuden", "Silhouette (Opening 16)", "KANA-BOON", "Japonnais"],
      ["Anime", "Naruto Shippuden", "Toumei Datta Sekai (Opening 7)", "Hata Motohiro", "Japonnais"],
      ["Anime", "Naruto Shippuden", "Hotaru no Hikari (Opening 5)", "Ikimono Gakari", "Japonnais"],
      ["Anime", "Naruto Shippuden", "Kimi Monogatari (Ending 3)", "Little by little", "Japonnais"],
      ["Anime", "Naruto Shippuden", "Mezamero Yasei (Ending 4)", "MATCHY with QUESTION", "Japonnais"],
      ["Anime", "Naruto Shippuden", "Michi To You All (Ending 2)", "Alüto", "Japonnais"],
      ["Anime", "Naruto Shippuden", "7!! (Ending 9)", "Lovers", "Japonnais"],
      ["Anime", "One Piece", "Brand New World (Opening 6)", "D-51", "Japonnais"],
      ["Anime", "One Punch Man", "The Hero!! (Opening 1)", "JAM Project", "Japonnais"],
      ["Anime", "Soul Eater", "Papermoon (Opening 2)", "Tommy heavenly6", "Japonnais"],
      ["Anime", "My Hero Academia", "Peace Sign (Opening 2)", "Kenshi Yonezu", "Japonnais"],
      ["Anime", "Saint Seiya", "Pegasus Fantasy (Opening 1)", "Make Up", "Japonnais"],
      ["Anime", "Boku No Hero Academia", "Polaris (Opening 6)", "Blue Encount", "Japonnais"],
      ["Anime", "Bakemonogatari", "Renai Circulation (Opening 6)", "Hanazawa Kana", "Japonnais"],
      ["Anime", "Ao no Exorcist", "In My World (Ending 2)", "ROOKiEZ is PUNKD", "Japonnais"],
      ["Anime", "NANA", "Rose", "Anna Tsuchiya", "Japonnais"],
      ["Anime", "Saint Seiya", "Chikyuugi", "Yumi Matsuzawa", "Japonnais"],
      ["Anime", "Sakura Card Captor", "Tobira Wo Akate (Opening 2)", "ANZA", "Japonnais"],
      ["Anime", "Ouran High School Host Club", "Sakura KISS (Opening 1)", "Kawabe Chieko", "Japonnais"],
      ["Anime", "Bleach", "Shoujo S (Opening 10)", "Scandal", "Japonnais"],
      ["Anime", "Naruto Shippuden", "SIGN (Opening 6)", "FLOW", "Japonnais"],
      ["Anime", "Violet Evergarden", "Sincerely (Opening)", "TRUE", "Japonnais"],
      ["Anime", "Jojo's Bizarre Adventure", "Sono Chi No Sadame (Opening 1)", "Tominaga 'TOMMY' Hiroaki", "Japonnais"],
      ["Anime", "Kimi No Na Wa", "Sparkle", "RADWIMPS", "Japonnais"],
      ["Anime", "Sword Art Online II", "Ignite (Opening)", " Aoi Eir", "Japonnais"],
      ["Anime", "My Hero Academia", "The Day (Opening 1)", "Porno Graffitti", "Japonnais"],
      ["Anime", "Fullmetal Alchemist", "Tobira no mukou e (Ending 2)", "Yellow Generation", "Japonnais"],
      ["Anime", "Tokyo Ghoul", "Unravel (Opening 1)", "TK [Ling tosite sigure]", "Japonnais"],
      ["Anime", "Tokyo Mew Mew", "My Sweet Heart (Opening 1)", "Komatsu Rika", "Japonnais"],
      ["Anime", "Mon voisin Totoro", "Tonari No Totoro", "Joe Hisaishi & Inoue Azumi", "Japonnais"],
      ["Anime", "Jojo's Bizarre Adventure", "Uragirimono no Requiem (Opening 2)", "Hasegawa Daisuke", "Japonnais"],
      ["Anime", "Naruto Shippuden", "Utakata Hanabi (Ending 14)", "supercell", "Japonnais"],
      ["Anime", "Naruto", "Wind (Ending 1)", "Akeboshi", "Japonnais"],
      ["Anime", "Doraemon", "Yume Wo Kanaete Doraemon", "MAO", "Japonnais"],
      ["Anime", "Neon Genesis Evangelion", "Zankoku na Tenshi no TE-ZE", "Takahashi Youko", "Japonnais"]
    ]
    this.state = {
      musics: musics,
      name: "",
      serie: "",
      artist: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "name") {
      this.setState({ name: event.target.value });
    } else if (event.target.name === "serie") {
      this.setState({ serie: event.target.value });
    } else if (event.target.name === "artist") {
      this.setState({ artist: event.target.value });
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
                  music[3].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.state.artist.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))).map((item, index) => {
                    return (
                      <tr key={index}>
                        <td key={item[0]}>{item[0]}</td>
                        <td key={item[1]}>{item[1]}</td>
                        <td key={item[2]}>{item[2]}</td>
                        <td key={item[3]}>{item[3]}</td>
                        <td key={item[4]}>{item[4]}</td>
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
