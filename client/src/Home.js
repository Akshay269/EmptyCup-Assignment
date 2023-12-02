import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import threedot from "./assets/threedot.png";
import contacts from "./assets/contacts.svg";
import gallery from "./assets/gallery.svg";
import map from "./assets/map.svg";
import shortlisted from "./assets/shortlisted.svg";
import sort from "./assets/sort.svg";
import Card from "./Card";
import Header from "./Header";
import IconPane from "./IconPane";

export default function Home() {
  const [listingsData, setListingsData] = useState([]);
  const [showShortlisted, setShowShortlisted] = useState(false);

  const contactsIcon = { src: contacts, alt: "Contacts" };
  const galleryIcon = { src: gallery, alt: "Gallery" };
  const MapIcon = { src: map, alt: "Map" };
  const ShortlistedIcon = { src: shortlisted, alt: "Shortlist" };
  const SortIcon = { src: sort, alt: "Sort" };

  const fetchData = async () => {
    try {
      let route = 'http://localhost:5000/api/listings';
      if (showShortlisted) {
        route += '/shortlisted';
      }
      console.log("clieked")

      const response = await fetch(route);
      
      const data = await response.json();
      const temp = JSON.parse(data)
      console.log(temp);
      setListingsData(temp.gay);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [showShortlisted]);

  const toggleShortlist = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/listings/${id}/toggle-shortlist`, {
        method: 'PUT',
      });
      fetchData();
      // window.location.reload();
    } catch (error) {
      console.error("Error toggling shortlist status:", error);
    }
  };

  return (
    <>
      <Header logo={logo} title="EmptyCup" threedot={threedot} />
      <IconPane
        icons={[contactsIcon, galleryIcon, MapIcon, ShortlistedIcon, SortIcon]}
        onShortlistClick={() => {
          setShowShortlisted(!showShortlisted);
          console.log(showShortlisted);
        }}
      />

      {listingsData.map((listing) => (
        <Card
          {...listing}
          key={listing.id} 
          onShortlistToggle={() => {
            console.log(listing.id);
            toggleShortlist(listing.id);
          }}
        />
      ))}
    </>
  );
}
