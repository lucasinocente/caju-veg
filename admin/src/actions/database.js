import { Firestore } from '../Firebase';
import { paginas, imagens } from '../store/store.js';

const criaPagina = async pagina => {
  return Firestore.collection("paginas")
    .add(
      {
        ...pagina,
        createdAt: Date.now()
      }
    );
}

const listaPaginas = async () => {
  Firestore
    .collection("paginas")
    .orderBy("createdAt", "asc")
    .get()
    .then(function(snap) {
      let list = [];
      snap.forEach(
        doc => list.push(
          {
            id: doc.id,
            ...doc.data()
          }
        )
      );
      paginas.set(list);
    }
  );
}

const carregaPagina = async id => {
  try {
    return Firestore.collection("paginas").doc(id).get().then(
      doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }
    )
  } catch (error) {
    console.log(error)
  }
}

const editaPagina = async pagina => {
  try {
    return Firestore.collection("paginas")
      .doc(pagina.id)
      .update(pagina);
  } catch (error) {
    throw error;
  }
}

const criaImagem = async imagem => {
  return Firestore.collection("imagens")
    .add(
      {
        ...imagem,
        createdAt: Date.now()
      }
    );
}

const listaImagens = async () => {
  Firestore
    .collection("imagens")
    .orderBy("createdAt", "asc")
    .get()
    .then(function(snap) {
      let list = [];
      snap.forEach(
        doc => list.push(
          {
            id: doc.id,
            ...doc.data()
          }
        )
      );
      imagens.set(list);
    }
  );
}

const carregaImagem = async id => {
  try {
    return Firestore.collection("imagens").doc(id).get().then(
      doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }
    )
  } catch (error) {
    console.log(error)
  }
}

const editaImagem = async imagem => {
  try {
    return Firestore.collection("imagens")
      .doc(imagem.id)
      .update(imagem);
  } catch (error) {
    throw error;
  }
}

export {
  criaPagina,
  listaPaginas,
  carregaPagina,
  editaPagina,
  criaImagem,
  listaImagens,
  carregaImagem,
  editaImagem
};