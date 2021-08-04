import React, { Component } from 'react';
import Character from '../components/characters/Characters';
import { fetchCharacters } from '../services/heyArnoldApi';

export default class HeyArnoldCharacters extends Component {
  state ={
    name: '',
    image: '',
  };

  getCharacters = async () => {
    const { name, image } = await fetchCharacters();
    this.setState({ name, image });
    console.log(this.state);
  };

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    const { name, image } = this.state;
    return (
      <>
        <h1>Characters</h1>
        <Character name={name} image={Image}
        />
      </>  
    );
  }
}
