import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { useAuth } from "../../contexts/AuthContext"
import API from "../../utils/API";
import DataContext from "../../contexts/DataContext";
// import pyScraper from "../../../../webscraper/mongo/index"

// This file exports both the List and ListItem components

export function List({ children }) {
  const pols = useContext(DataContext)

  // Load all books and store them with setBooks


  // Loads all books and sets them to books


  return (
    <>
      {pols.length ? (
        <ul className="list-group" id="List">

          {pols.map(pol => (

            <ListItem key={pol._id} name={pol.name} image={pol.image} district={pol._id} party={pol.party} />
          ))}

        </ul>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </>

  );
}

export function ListItem({ name, image, district, party }) {
  const { currentUser } = useAuth()

  const favoritePol = () => {
    return currentUser ? <div><p className="mb-0" style={{ color: "black" }}>Watching</p><input type="checkbox" className="ms-4" onClick="favIt(star, def)" style={{ cursor: "copy" }}></input></div> : <></>
  };
  // console.log(pyScraper)

  return (
    <li id={"d"+district} className={"list-group-item" }>
      <a className="text-decoration-none" href={"/polprofile/" + district} >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img className="polImg d-inline" width="100px" height="100px" src={image} />

          </div>
          <div className="text-center">
            <h4 className="polName">{name}</h4>
            <span style={{ color: "black" }}>District: {district}<span>{party}</span></span>
          </div>
          {favoritePol()}

        </div>
      </a>


    </li>
  )
}
