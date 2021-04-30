import { useState, useEffect } from 'react'

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

  useEffect(() => {
    setImage('/images/ajax-loader.gif')
    setTimeout(() => {
      setImage(imagem)
    }, 100)
  }, [imagem])

  return (
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
                          <span
                            // onClick="handleDisplay('order-modal'), sendAnalyticsEvent('Abre Modal Pedido', 'Abre Modal Pedido Requeijão')"
                            className="button is-success is-medium"
                          >
                            Peça o seu aqui
                          </span>
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
        <div className="content">
          <hr />
          <h2 class="has-text-centered">Galeria</h2>
          <p class="has-text-centered"><i>Imagens do requeijão vegano - Sugestões de uso - Fotos independentes</i></p>
          <hr class="styled" />
          <div class="gallery columns">
            { images && images.map(({ imagem, legenda }) => (
                <div class="column">
                  <img src={imagem} alt={legenda} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page