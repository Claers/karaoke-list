import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import { verifyJwtToken, getMusics } from './services/api';
import LoginForm from './components/LoginForm';
import AddMusicForm from './components/AddMusicForm';
import KaraokeSearch from './components/KaraokeSearch';
import KaraokeList from './components/KaraokeList';
import AddMusicFromJSON from './components/AddMusicFromJSON';


export const MusicContext = createContext({ musics: [], setMusics: () => { }, fetchData: async () => { } });
export const AuthContext = createContext({ jwtToken: [], setJwtToken: () => { } })
export const SearchContext = createContext({
  searchData: {
    name: "",
    serie: "",
    artist: "",
    language: "",
    vocal: "",
    category: "",
  }, setSearchData: () => { }
})

function AuthProvider({ children }) {
  const [jwtToken, setJwtToken] = useState(JSON.parse(localStorage.getItem("jwtToken")) || false);
  const auth = { jwtToken, setJwtToken };

  useEffect(() => {
    verifyJwtToken(jwtToken, () => { setJwtToken("") });
  })

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )

}

function MusicProvider({ children }) {
  const [musics, setMusics] = useState();

  async function fetchData() {
    console.log("Fetching")
    const data = (await getMusics());
    setMusics(data);
  }

  const musics_value = { musics, setMusics, fetchData };

  useEffect(() => {
    fetchData().catch(console.error);
  }, [])

  return (
    <MusicContext.Provider value={musics_value}>
      {children}
    </MusicContext.Provider>
  )
}

function SearchProvider({ children }) {
  const [searchData, setSearchData] = useState({
    name: "",
    serie: "",
    artist: "",
    language: "",
    vocal: "",
    category: "",
  });
  const search = { searchData, setSearchData };

  return (
    <SearchContext.Provider value={search}>
      {children}
    </SearchContext.Provider>
  )
}

function App() {


  return (
    <div className="container" style={{ maxWidth: "100%" }}>
      <div className="row">
        <h1 >Liste des musiques</h1>
      </div>

      <AuthProvider>
        <MusicProvider>
          <SearchProvider>
            <div className="row">
              <LoginForm />
              <AddMusicForm />
              <AddMusicFromJSON />
            </div>
            <KaraokeSearch />
            <KaraokeList />
          </SearchProvider>
        </MusicProvider>
      </AuthProvider>

    </div>
  );

}


export default App;
