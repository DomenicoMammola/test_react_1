import React from 'react';
import PropTypes from 'prop-types';

function FiglioStock ({nome, fondatore}) {
    console.log('Proprietà passata:' + nome);
      return (    
      <div>
        <h1>Io sono il figlio {nome}</h1>
        <p>Fondatore: {fondatore}</p>
        </div>

    )
  
}

export default FiglioStock

FiglioStock.defaultProps = {
    nome: 'ND',
    fondatore: 'ND'
}

FiglioStock.propTypes = {
    nome: PropTypes.string,
    fondatore : PropTypes.string

}