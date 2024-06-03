import { useEffect, useState } from "react";

export const CharacterListContainer = () => {

        const [characters, setCharacters] = useState([]);

   
        const getCharacters = async () => { 
            try {
                const resp = await fetch ("https://rickandmortyapi.com/api/character");
                const data = await resp.json();
                setCharacters(data.results)
                
            } catch (error) {
                console.log(error)
            }
        } 
   
       useEffect(() => {
        getCharacters();
       }, [])
       
  

  return (
    <div>{characters.map(character =><p  key={character.id}>Nombre: {character.name}</p> )}</div>
  )
}
