import React from "react";
import "../styles/Music.css"

function Music({ category, serie, name, artist, language, vocal }) {

  return (
    <tr>
      <td>{category}</td>
      <td>{serie}</td>
      <td>{name}</td>
      <td>{artist}</td>

      <td>{language}</td>
      <td>{vocal}</td>
    </tr>
  )

}

export default Music;