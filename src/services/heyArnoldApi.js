export const fetchCharacters = async () => {
  // eslint-disable-next-line max-len
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters/');
  const json = await res.json();

  return json;
};
