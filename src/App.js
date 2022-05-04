import './App.css';

import usuarioAtual from './components/assets/avatar1.png'

import Cabecalho from './components/cabecalho/Cabecalho';


function App() {
  return (
    <div >
      {/* <h3>pronto para começar!</h3> */}
      <Cabecalho user={usuarioAtual} />
    </div>
  );
}

export default App;
