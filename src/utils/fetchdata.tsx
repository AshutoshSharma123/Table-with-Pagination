import { log } from "console";
import { useState,useEffect, use } from "react";


export default function useArtworks() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);




  return {
    artworks,
    loading,
    error,
  };    
  }