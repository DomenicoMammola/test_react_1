import React, { Component } from 'react'
import PropTypes from 'prop-types';
import RigaHobby from './RigaHobby';
import listahobby from './listahobby';

export class Stock extends Component {
    constructor(props) {
        super(props);
        const arr = [];
        this.state = {eta: this.props.eta, hobbies:arr};
        //setInterval(()=>(this.aggiornoStato()), 3000);
    }

    aggiornoStato = () => {
        let arr = this.state.hobbies.slice();
        const idx = Math.floor(Math.random() * 4);
        console.log('idx:' + idx);
        const nuovovalore = listahobby[idx];
        console.log('nuovovalore:' + nuovovalore);
        arr.push(nuovovalore);

        this.setState((state, props) => ({eta: state.eta + 1, hobbies: arr}))
    }

    render() {
        const { nome, fondatore, eta } = this.props;
        const itemJSX = (
            <ul>
                {this.state.hobbies.map(value => (
                    <RigaHobby tipo={value}> </RigaHobby>
                )
                )
                }
            </ul>
        )

       // setInterval(()=>{ showeta++; console.log(showeta);}, 3000);

        return (
            <div>
                <h3>Figlio: {nome} di eta {this.state.eta}</h3>
                <p>Fondatore: {fondatore}</p>
                {this.state.eta >= 18 ? <h3>Sono maggiorenne</h3> : <h4>Sono minorenne</h4>}
                <p>Lista Hobby</p>
                {itemJSX}

            </div>
        )
    }
}

export default Stock

Stock.propTypes = {
    nome: PropTypes.string,
    fondatore : PropTypes.string,
    eta : PropTypes.number
}