import { useState, useEffect } from 'react'
import Modal from './Modal'

const Page = ({
  page: {
    titulo,
    destaque,
    linhaDeApoio,
    descricao1,
    descricao2,
    imagem,
    secao,
  },
  images,
}) => {
  const [image, setImage] = useState()
  const [isOpen, setModal] = useState()

  useEffect(() => {
    setImage('/images/ajax-loader.gif')
    setTimeout(() => {
      setImage(imagem)
    }, 100)
  }, [imagem])

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="content">
            <h1 className="has-text-centered">{ titulo }</h1>
            <hr className="styled" />
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="columns">
                  <div className="column principal-image">
                    <img src={image} alt={titulo} />
                  </div>
                  <div className="column">
                    <h3 className="has-text-centered">
                      { linhaDeApoio }
                    </h3>
                    {
                      secao === 'produtos' && (
                        <>
                          <hr />
                          <p className="has-text-centered">
                            <button
                              onClick={() => setModal(true)}
                              className="button is-success is-medium"
                            >
                              Peça o seu aqui
                            </button>
                          </p>
                        </>
                      )
                    }
                    <hr />
                    <p>{ descricao1 }</p>
                    <hr className="styled" />
                    <p className="has-text-centered"><strong>{ destaque }</strong></p>
                    <hr className="styled" />
                    <p>{ descricao2 }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            images.length > 0 && (
              <div className="content">
                <hr />
                <h2 className="has-text-centered">Galeria</h2>
                <p className="has-text-centered"><i>Imagens do requeijão vegano - Sugestões de uso - Fotos independentes</i></p>
                <hr className="styled" />
                <div className="gallery columns is-mobile is-multiline">
                  { images.map(({ imagem, legenda }) => (
                      <div className="column is-full-mobile is-half-tablet is-one-third-desktop">
                        <img src={imagem} alt={legenda} />
                      </div>
                    )
                  )}
                </div>
              </div>
            )
          }
        </div>
      </div>
      <Modal titulo={titulo} isOpen={isOpen} onClose={() => setModal(false)}/>
    </>
  )
}

export default Page