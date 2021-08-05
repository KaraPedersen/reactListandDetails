/* eslint-disable max-len */
import React, { Component } from 'react';
import CharacterDetail from '../components/Characters/CharacterDetail';
import { fetchCharacterById } from '../services/heyArnoldApi.js';

export default class CharacterDetailPage extends Component {
  _isMounted = false;

  state = {
    character: [],
    loading: true,
  }

  componentDidMount = async () => {
    this._isMounted = true;

    this.setState({
      loading: false,
      character: await fetchCharacterById(this.props.match.params.id),
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  render() {
    const { loading, character } = this.state;

    if(loading) return <img src="https://i.imgur.com/B8SSY5p.gif" alt="loading" />;
    return <CharacterDetail
      name={character.name}
      image={character.image}
      id={character.id}
    />;

  }
}
