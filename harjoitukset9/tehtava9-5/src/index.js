import ReactDOM from 'react-dom';
import Highscores from './Highscores';

  //highscore-data:
  const highscoreData = [
    { id: 1, name: 'Jason', score: 4000 },
    { id: 2, name: 'Make', score: 3000 },
    { id: 3, name: 'Bill', score: 2000 },
    { id: 4, name: 'Liza', score: 1000 }
  ]
ReactDOM.render(
  <Highscores highscoreData={highscoreData}/>,
  document.getElementById('root')
)