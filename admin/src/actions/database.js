import { Firestore } from '../Firebase';
import { paginas, imagens } from '../store/store.js';

const convertToSlug = (value) => {
  value = value.replace(/^\s+|\s+$/g, ''); // trim
  value = value.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäãâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to   = "aaaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
      value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  value = value.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

  return value;
}

const criaPagina = async pagina => {
  const slug = convertToSlug(pagina.titulo);

  return Firestore.collection("paginas")
    .add(
      {
        ...pagina,
        slug,
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