import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Character from './Characters';
import { fetchCharacters } from '../../services/heyArnoldApi';

export default class CharacterDetailPage extends Component {
  state = {
    character: null
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const character = await fetchCharacters(match.params.id);
      this.setState({ character });
    } catch(err) {
      console.log(err.message);
    }
  }

  render() {
    const { character } = this.state;
      
    return (
      <div className="characterDetailPage">
        <h2>Character Detail Page</h2>
        <Character
          Id={character.id}
          Name={character.image}
          Image={character.image}
        />
        <Link to="/">Back</Link>
      </div>
    );
  }
}
