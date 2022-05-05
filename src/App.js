import './App.css';

import usuarioAtual from './components/assets/avatar1.png'

import Cabecalho from './components/cabecalho/Cabecalho';
import PostArea from './components/postArea/PostArea';
import Post from './components/post/Post'


function App() {
  return (
    <div >
      {/* <h3>pronto para começar!</h3> */}
      <Cabecalho user={usuarioAtual} />
      <PostArea />
      <Post />
    </div>
  );
}

export default App;
