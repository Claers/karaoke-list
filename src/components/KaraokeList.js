import React, { useState, useEffect, useCallback, useContext } from 'react';
import Music from "./Music";
import { SearchContext, MusicContext } from "../App"
import HeaderWithSort from "./HeaderWithSort";

import "../styles/KaraokeList.css"

function KaraokeList() {
  const { searchData, setSearchData } = useContext(SearchContext);
  const { musics, setMusics } = useContext(MusicContext);

  const [sortColumn, setSortColumn] = useState("category");
  const [sortAsc, setSortAsc] = useState(true);

  function elementInclude(value, included) {
    return norm(value).includes(norm(included))
  }

  function norm(value) {
    return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function filteredData() {
    let sortedMusics = []
    if (sortAsc) {
      sortedMusics = musics.sort((a, b) => a[sortColumn].localeCompare(b[sortColumn]) || a["serie"].localeCompare(b["serie"]) || a["name"].localeCompare(b["name"]))
    } else {
      sortedMusics = musics.sort((a, b) => (-1 * a[sortColumn].localeCompare(b[sortColumn])) || a["serie"].localeCompare(b["serie"]) || a["name"].localeCompare(b["name"]))
    }

    return sortedMusics.filter(music =>
      elementInclude(music.serie, searchData.serie) &&
      elementInclude(music.name, searchData.name) &&
      elementInclude(music.artist, searchData.artist) &&
      music.language.includes(searchData.language) &&
      music.vocal.includes(searchData.vocal) &&
      (searchData.category === "" || elementInclude(music.category, searchData.category))

    )
  }

  function editSort(column) {
    if (sortColumn === column) {
      setSortAsc(!sortAsc);
    } else {
      setSortColumn(column);
      setSortAsc(true);
    }

  }


  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => { editSort("category") }} key="Categories">Categories
              <HeaderWithSort isThisColumnSorted={sortColumn == "category"} sortAsc={sortAsc} />
            </th>
            <th onClick={() => { editSort("serie") }} key="Serie">Serie
              <HeaderWithSort isThisColumnSorted={sortColumn == "serie"} sortAsc={sortAsc} />
            </th>
            <th onClick={() => { editSort("name") }} key="Nom">Nom
              <HeaderWithSort isThisColumnSorted={sortColumn == "name"} sortAsc={sortAsc} />
            </th>
            <th onClick={() => { editSort("artist") }} key="Artiste">Artiste
              <HeaderWithSort isThisColumnSorted={sortColumn == "artist"} sortAsc={sortAsc} />
            </th>
            <th onClick={() => { editSort("language") }} key="Langue">Langue
              <HeaderWithSort isThisColumnSorted={sortColumn == "language"} sortAsc={sortAsc} />
            </th>
            <th onClick={() => { editSort("vocal") }} key="Voix ?">Voix ?
              <HeaderWithSort isThisColumnSorted={sortColumn == "vocal"} sortAsc={sortAsc} />
            </th>
          </tr>
        </thead>
        <tbody>
          {musics && filteredData().map((item, index) => {
            return (
              <Music
                key={item.id}
                name={item.name}
                category={item.category}
                serie={item.serie}
                artist={item.artist}
                language={item.language}
                vocal={item.vocal}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  )

}

export default KaraokeList;