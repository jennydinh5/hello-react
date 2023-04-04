import { useState } from 'react';
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';

function Library() {
  const [myBooks, setMyBooks] = useState([0]);
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
    setMyBooks(books);
  }
  
  getBooks();
  return (
  <>
    <table>
    {
      myBooks.map(b => (
        <tr>
          className = "tableBooks"
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
      <button onClick = {getBooks}>books</button>
  </>
  );
}

const album = [
  { id: 1, title: 'All 4 Nothing', theme: 'plain', isRecent: true },
  { id: 2, title: '~how im feeling~', theme: 'design', isRecent: false },
  { id: 3, title: 'I met you when I was 18', theme: 'design', isRecent: false },
];

function AlbTrack() {
  const listAlb = album.map(alb =>
    <li
      key={alb.id}
      style={{
        color: alb.isRecent ? 'green' : 'red'
      }}
     >
      {alb.title}
     </li> 
  );
  return (
    <ul>{listAlb}</ul>
  )
}; 


const song = {
  songtitle: 'Modern Loneliness',
  artist: 'Lauv',
  released: '2019',
  image: logo,
  width: '220',
  height: '330'
};

function Songarea() {
  return(
    <div>
      <h2>{song.songtitle} ({song.released})</h2>
      <p>{song.artist}</p>
      {song.image &&
      <img
        className="songCover"
        src={song.image}
        alt={song.songtitle + 'cover'}
        style={{
          width: song.width,
          height: song.height
        }}
      />
      }
    </div>
  );
}

function MusicButton() {
  const [count, setCount] = useState(0)
  function doMagic () {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>This is a magic button</h3>
      <button onClick = {doMagic}>Magic {count}</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <AlbTrack />
        <Songarea />
        <MusicButton />
      </header>
    </div>
  );
}

export default App;
