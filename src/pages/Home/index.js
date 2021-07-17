import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom'

function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  const [ error, setError] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${ usuario }/repos`)
      .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repo) => {
        repositoriesName.push(repo.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setError(false);
      history.push('/repositories');
    })
      .catch( err => {
        setError(true);
      })
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      { error ? <S.Error>Ocorreu um erro. Tente novamente!</S.Error> : '' }
    </S.HomeContainer>
  );
}

export default App;
