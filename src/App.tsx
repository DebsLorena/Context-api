import React, { useEffect } from 'react';
import './App.css';
import { useAppContext } from './hooks/useAppContext';
import HomePage from './Pages/HomePage';



function App() {

const context = useAppContext()

  async function getData() {
    // simuar um delay de 2 segundos de um request
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return {
      img:  "https://debslorena.github.io/developer-frontend/imagens/fotoperfil.PNG",
      name: "Lorena Debs",
    }
  }

  useEffect(() => {
    if (!context.user) {
    getData().then((data) => {
      context.updateUser(data);
    })};
  }, []);


  return (
    <div className="App">
    <HomePage />
    </div>
  );
}

export default App;
