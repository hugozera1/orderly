import React, { useEffect, useState } from 'react';  // Importa React e seus hooks useEffect e useState
import axios from 'axios';  // Importa a biblioteca axios (não usada neste exemplo, mas geralmente para requisições HTTP)
import { initializeApp } from "firebase/app";  // Importa a inicialização do Firebase
import { getAnalytics } from "firebase/analytics";  // Importa a funcionalidade de analytics do Firebase (não usado no código)
import { getDownloadURL, getStorage, listAll } from 'firebase/storage';  // Importa funções de download e listagem do Firebase Storage
import { ImagedB } from './Config';  // Importa a configuração do Firebase (o objeto de referência ao Firebase Storage)
import { ref, uploadBytes } from 'firebase/storage';  // Importa funções de referência e upload de arquivos no Firebase Storage
import { v4 } from "uuid";  // Importa a função para gerar identificadores únicos (UUID)

function AddPosts() {
  // Estados para armazenar a imagem e as URLs das imagens
  const [img, setImg] = useState('');  // img armazena o arquivo de imagem selecionado pelo usuário
  const [imgUrl, setImgUrl] = useState([]);  // imgUrl armazena as URLs das imagens carregadas

  // Função que será chamada quando o usuário clicar no botão de upload
  const handleClick = () => {
    if (img !== null) {  // Verifica se a imagem foi selecionada (se img não é nulo)
      const imgRef = ref(ImagedB, `files${v4()}`);  // Cria uma referência no Firebase Storage para o arquivo de imagem, com um caminho único gerado por v4
      uploadBytes(imgRef, img).then(value => {  // Faz o upload da imagem para o Firebase Storage
        console.log(value);  // Exibe o resultado do upload no console (opcional)
        getDownloadURL(value.ref).then(url => {  // Obtém a URL pública da imagem após o upload
          setImgUrl(data => [...data, url]);  // Adiciona a URL ao array imgUrl para exibição
        });
      });
    }
  };

  // useEffect para listar todas as imagens já carregadas quando o componente é montado
  useEffect(() => {
    listAll(ref(ImagedB, "files")).then(imgs => {  // Lista todas as imagens armazenadas no diretório "files" do Firebase Storage
      console.log(imgs);  // Exibe os dados dos arquivos no console (opcional)
      imgs.items.forEach(val => {  // Para cada imagem armazenada, obtém a URL pública
        getDownloadURL(val).then(url => {
          setImgUrl(data => [...data, url]);  // Adiciona cada URL ao estado imgUrl
        });
      });
    });
  }, []);  // O array vazio [] garante que esse useEffect seja executado apenas uma vez, quando o componente é montado

  return (
    <div className="App">
      {/* Input para selecionar o arquivo de imagem */}
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />  
      
      {/* Botão que chama a função handleClick para fazer o upload da imagem */}
      <button onClick={handleClick}>Upload</button>
      
      {/* Exibe as imagens que foram carregadas e suas URLs */}
      {
        imgUrl.map(dataVal => (
          <div key={dataVal}>
            {/* Exibe a imagem usando a URL armazenada no estado imgUrl */}
            <img src={dataVal} height="200px" width="200px" alt="uploaded-img" />  
          </div>
        ))
      }
    </div>
  );
}

export default AddPosts;
