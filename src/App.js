// import logo from './logo.svg';
import './App.css';


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
  image: 'https://www.thekirkwoodcall.com/wp-content/uploads/2020/03/Project-Drawing-1_98-e1583334295912.png',
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
  return (
    <div>
      <h3>Click here to play music!</h3>
      <button>Music</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AlbTrack />
        <Songarea />
        <MusicButton />
      </header>
    </div>
  );
}

export default App;
