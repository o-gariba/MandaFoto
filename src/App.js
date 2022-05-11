import './App.css';

import logo from './components/assets/logo2.png'

import Cabecalho from './components/cabecalho/Cabecalho';
import PostArea from './components/postArea/PostArea';
import Post from './components/post/Post'
import { useState } from 'react';
import PostDadosForm from './components/postDadosForm/PostDadosForm';
import Carousel from './components/carousel/Carousel';
import PerfilUser from './components/perfilUser/PerfilUser';


function App() {

  const [posts, setPosts] = useState([])

  const criarPost = (imgAvatar, usuario, imgPost) => {
    // console.log(`Dados recebidos do Modal: ${imgAvatar} ${usuario} ${imgPost}`)
    const novoPost = {imgAvatar, usuario, imgPost}
    const novoArray = [...posts, novoPost]
    setPosts(novoArray)
  }
  
  return (
    <div >
      <Cabecalho logo={logo} criarPost={criarPost} />
      {/* <Carousel />
      <PostArea>
        <PostDadosForm posts={posts} />
      </PostArea> */}
      <PerfilUser />
    </div>
  );
}

export default App;
