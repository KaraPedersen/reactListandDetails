export const fetchCharacters = async () => {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters/random');
  const characters = await res.json();
  console.log(characters[0].name, characters[0].image);
  return {
    name: characters[0].name,
    image: characters[0].image
  };
}; 
