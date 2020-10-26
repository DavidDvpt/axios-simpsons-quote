import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import QuoteCard from './components/quoteCard'
import Axios from 'axios';

const DEFAULT_QUOTE = {
  quote: "Back in Edinburg, we had a coal miners strike. All we wanted were hats with a wee light on top. Then one day the mine collapsed. No one made it out alive, not even Willie!",
  character: "Groundskeeper Willie",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FGroundskeeperWillie.png?1497567512063",
  characterDirection: "Right"
}

const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentQuote: DEFAULT_QUOTE
     }
     this.changeQuote= this.changeQuote.bind(this)
  }
  render() { 
    return (
      <div className='App'>
        <h1>SIMPSON QUOTES</h1>
        <div id='container'>
          <QuoteCard quote={this.state.currentQuote} />
        </div>
        <button type="button" onClick={this.changeQuote}>Click for new quote !</button>
      </div>
    );
  }
  
  changeQuote() {
    Axios.get(URL).then(response=>response.data).then(data => {
      console.log(data)
      this.setState(prevState =>{
        return {currentQuote: data[0]}
      })
    })
  }
}

export default App;
