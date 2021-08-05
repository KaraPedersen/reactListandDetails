export const fetchCharacters = async () => {
  // eslint-disable-next-line max-len
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  const json = await res.json();

  return json.map((character) => ({
    id: character._id,
    name: character.name,
    image: character.image,
  }));
};


export const fetchCharacterById = async (id) => {
  // eslint-disable-next-line max-len
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`);
  const json = await res.json();

  return json;
};
