import React from 'react'
// Highscores component
class Highscores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {highscores: [], loaded: false};
    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.getHighscores = this.getHighscores.bind(this);
    this.highscoreData = this.props.highscoreData;
  }

  // onclick event:
  onButtonClicked () {
      this.setState({ highscores: [], loaded: false});
  }

  //Latauksen "hitaus":
  getHighscores () {
  setTimeout(() => this.setState({highscores: this.highscoreData, loaded:true}), 3000);
}

  render() {
    // Jos dataa EI ole VIELÄ ladattu:
    if(!this.state.loaded) {
        this.getHighscores();
    return (
<div>Loading...</div>
    );
    }

    else {
        return (
            <div>
            <ul>{
                this.state.highscores.map(function (highscore, index) {
      return <li key={ index }>{highscore.name} : {highscore.score}</li>;
    })

} </ul>
 <button onClick = {this.onButtonClicked.bind(this)}> Load again</button>
</div>
        )
    }
  }

}

export default Highscores