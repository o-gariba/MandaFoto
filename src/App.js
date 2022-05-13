import logo from './components/assets/logo2.png'
import user1 from './components/assets/user1.png'
import user2 from './components/assets/user2.png'
import user3 from './components/assets/user3.png'
import user4 from './components/assets/user4.png'
import user5 from './components/assets/user5.png'

import post1 from './components/assets/post1.png'
import post2 from './components/assets/post2.png'
import post3 from './components/assets/post3.png'

import Cabecalho from './components/cabecalho/Cabecalho';
import PostArea from './components/postArea/PostArea';
import PostDadosForm from './components/postDadosForm/PostDadosForm';
import Carousel from './components/carousel/Carousel';
import PerfilUser from './components/perfilUser/PerfilUser';
import PostPadroes from './components/postPadroes/PostPadroes';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Fragment, useState } from 'react';

// import avatar from 'https://picsum.photos/seed/picsum/123918237/100'
// import postPadrao from 'https://picsum.photos/seed/picsum/12341231/500'

function App() {

  const [posts, setPosts] = useState([])

  const criarPost = (imgAvatar, usuario, imgPost) => {
    const novoPost = {imgAvatar, usuario, imgPost}
    const novoArray = [...posts, novoPost]
    setPosts(novoArray)
  }

  const postsPadroes1 = [
    {
      imgAvatar: user4,
      usuario: '@usuarioPronto',
      imgPost: post1
    }]
  
  const postsPadroes2 = [
    {
      imgAvatar: user2,
      usuario: '@usuarioPronto',
      imgPost: post2
    }]

  const postsPadroes3 = [
    {
      imgAvatar: user5,
      usuario: '@usuarioPronto',
      imgPost: post3
    }
  ]

  return (
      <Router>
        <Cabecalho logo={logo} criarPost={criarPost} />
        <Routes>
          <Route path='/' element={
            <Fragment>
              <Carousel avatars={[user1, user2, user3, user4, user5]}/>
              <PostArea>
                <PostDadosForm posts={posts} />
                <PostDadosForm posts={postsPadroes1} />
                <PostDadosForm posts={postsPadroes2} />
                <PostDadosForm posts={postsPadroes3} />
              </PostArea>
            </Fragment>
          } />
          <Route path='/user1' element={<PerfilUser users={user1}/>} />
          <Route path='/user2' element={<PerfilUser users={user2}/>} />
          <Route path='/user3' element={<PerfilUser users={user3}/>} />
          <Route path='/user4' element={<PerfilUser users={user4}/>} />
          <Route path='/user5' element={<PerfilUser users={user5}/>} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App;
