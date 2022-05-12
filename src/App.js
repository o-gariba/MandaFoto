import './App.css';

import logo from './components/assets/logo2.png'
import user1 from './components/assets/user1.png'
import user2 from './components/assets/user2.png'
import user3 from './components/assets/user3.png'
import user4 from './components/assets/user4.png'
import user5 from './components/assets/user5.png'

import Cabecalho from './components/cabecalho/Cabecalho';
import PostArea from './components/postArea/PostArea';
import Post from './components/post/Post'
import { Fragment, useState } from 'react';
import PostDadosForm from './components/postDadosForm/PostDadosForm';
import Carousel from './components/carousel/Carousel';
import PerfilUser from './components/perfilUser/PerfilUser';
import PostPadroes from './components/postPadroes/PostPadroes';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'


function App() {

  const [posts, setPosts] = useState([])

  const criarPost = (imgAvatar, usuario, imgPost) => {
    // console.log(`Dados recebidos do Modal: ${imgAvatar} ${usuario} ${imgPost}`)
    const novoPost = {imgAvatar, usuario, imgPost}
    const novoArray = [...posts, novoPost]
    setPosts(novoArray)
  }

  const [comentarios, setComentarios] = useState([])

  const criarComentario = (comentario) => {
    // console.log(`dado recebido no app.js: ${comentario}`)
    const novoArray = [...comentarios, comentario]
    setComentarios(novoArray)
  }
  
  return (
      <Router>
        <Cabecalho logo={logo} criarPost={criarPost} />
        <Carousel avatars={[user1, user2, user3, user4, user5]}/>
        <Routes>
          <Route path='/' element={
          <PostArea>
            <PostPadroes />
            <PostPadroes />
            <PostPadroes />
          </PostArea>
          } />
          <Route path='/user1' element={<PerfilUser users={user1}/>} />
        </Routes>
        {/* <PostDadosForm posts={posts} /> */}
        <Footer />
      </Router>
  )
}

export default App;
