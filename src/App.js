import './App.css';

const imageStyle = {
  height: "4vw",  
  width: "4vw",
};

function Article() {
  return<div className="article">
      <img className="profile" src={"img/Ellipse 1.png"} style={imageStyle} alt={''}></img>
      <h2 className="name">권강빈</h2>
      <h3 className="date">2022-08-26 23:25</h3>
      <div className="contents">rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
      rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
      rrrrrrrrrrrrrrrrrrrrrrrrrr</div>
  </div>
}

function App() {
  return (
    <div>
      <header className="header">
        <img className="logo" src={"img/logo_white.png"} style={imageStyle} alt={''}></img>
      </header>
      <header className="mini-header">
        <h1 className="title">게시글</h1>
      </header>
      <Article></Article>
    </div>
  );
}

export default App;
