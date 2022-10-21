import React from "react"

function HeaderWithSort({ isThisColumnSorted, sortAsc }) {

  return (
    <span style={{ marginLeft: 5 + "px" }}>
      {isThisColumnSorted ?
        (sortAsc ? <span className="fas fa-sort-up" /> :
          <span className="fas fa-sort-down" />) : <span className="fas fa-sort" />}</span>
  )

}

export default HeaderWithSort;