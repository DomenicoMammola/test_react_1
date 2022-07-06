import { Component } from 'react';
import './App.css';
import Stock from './Stock';

class App extends Component {  

  elementi = [
    {nome:"APPL", fondatore:"Jobs", eta: 21},
    {nome:"GOOGL", fondatore:"Brin", eta : 15},
    {nome:"AMZN", fondatore:"Bezos", eta : 12}
  ];

  constructor (props) {
    super(props);
    this.state = {showMsg : false};
    this.mostroMessaggio2 = this.mostroMessaggio2.bind(this);
  }

  mostroMessaggio = (evt) => {
    let nuovoValore = this.state.showMsg;
    nuovoValore = !nuovoValore;
    this.setState( {showMsg : nuovoValore});
  }


  mostroMessaggio2(evt) {
    let nuovoValore = this.state.showMsg;
    nuovoValore = !nuovoValore;
    this.setState( {showMsg : nuovoValore});
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          
          <p onClick={this.mostroMessaggio2}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.state.showMsg && <p>Messaggio nascosto</p>}
          {            
            this.elementi.map (
              elemento => (
                <Stock nome={elemento.nome} fondatore={elemento.fondatore.toUpperCase()} eta={elemento.eta}></Stock>
              )
            )
          }
        </header>
      </div>
    );
 
  }
}

export default App;
