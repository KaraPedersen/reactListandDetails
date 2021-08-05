import React, { Component } from 'react';
import CharacterList from '../components/Characters/CharacterList';
import { fetchCharacters } from '../services/heyArnoldApi';

export default class HeyArnoldCharacters extends Component {
  state ={
    loading: true,
    characters: [],
    // name: '',
    // image: '',
  };

  async componentDidMount() {
    const characters = await fetchCharacters();
    this.setState({ characters, loading: false });
  }

  render() {
    const { loading, characters } = this.state;
    if(loading) {
      return <img src="https://i.imgur.com/B8SSY5p.gif" alt="loading" />;
    }
    
    return <CharacterList characters={characters} />;
  }
}
