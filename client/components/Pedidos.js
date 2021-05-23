import { useState, useEffect } from 'react'
import { Formik } from 'formik'
import { sendAnalyticsEvent } from '../helpers/analytics'

const buildInitialValues = (produtos) => {
  const initialValues = {}
  for (let i = 0; i < produtos.length; i++) {
    initialValues[`${produtos[i].id}`] = 0;
  }
  return initialValues
}

const Pedidos = ({
  produtos,
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [initialValues] = useState(buildInitialValues(produtos))


  useEffect(() => {
    // isOpen && sendAnalyticsEvent('Abre Modal Pedido', `Abre Modal Pedido ${titulo}`, window)
  }, [isOpen]);

  const buildMessage = (produtos, values, total) => {
    const header =`Olá Caju, gostaria por favor dos seguintes produtos:`
    const itens = produtos.filter((produto) => values[produto.id] > 0)
    const list = itens.map((produto) => `- ${values[produto.id]}un ${produto.titulo} = R$ ${produto.preco * values[produto.id]} \n`)
    const footer = `Total R$ ${total}`

    return encodeURI(`${header} \n \n ${list.map((item) => item)} \n ${footer}`)
  }

  const submitOrder = (produtos, values, total) => {
    event.preventDefault();

    // sendAnalyticsEvent('Realiza Pedido', `Realiza Pedido ${titulo}`, window)

    // return window.location.href =
    //   `https://${
    //     window.isMobile
    //       ? 'api'
    //       : 'web'
    //   }.whatsapp.com/send?phone=5551983320104&text=${message}`
  }


  return (
    <>
      <div
        id="order-modal"
        className={`modal ${isOpen ? 'is-flex' : ''}`}
      >
        <div
          onClick={onClose}
          className="modal-background"
        ></div>
        <div className="modal-content">
          <div className="modal-card">
              <div className="modal-card-head">
                <h4 className="modal-card-title">Encomende seus produtos:</h4>
              </div>
              <div className="modal-card-body">
                <Formik
                  initialValues={initialValues}
                  onSubmit={values => {
                    const total = produtos.map((produto) => {
                      return values[produto.id] * produto.preco
                    }).reduce((sum, value) => sum + value)
                    const message = buildMessage(produtos, values, total);
                    console.log(message)
                    return window.location.href =
                      `https://${
                        window.isMobile
                          ? 'api'
                          : 'web'
                      }.whatsapp.com/send?phone=5551983320104&text=${message}`
                  }}
                  onChange={(valuse, value) => {console.log('value', value)}}
                >
                  {({
                      values,
                      handleSubmit,
                      handleChange,
                    }) => {
                      const total = produtos.map((produto) => {
                        return values[produto.id] * produto.preco
                      }).reduce((sum, value) => sum + value)

                      return (
                        <form onSubmit={handleSubmit}>
                          <table className="table is-fullwidth">
                            <thead>
                              <tr>
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th className="has-text-right">Preço</th>
                                <th className="has-text-right">Total</th>
                              </tr>
                            </thead>
                            <tfoot>
                              <tr>
                                <th></th>
                                <th></th>
                                <th className="has-text-right">Total:</th>
                                <th className="has-text-right">R$ { total }</th>
                              </tr>
                            </tfoot>
                            <tbody>
                              {produtos.map(({
                                  id,
                                  imagem,
                                  titulo,
                                  preco,
                                }) => (
                                  <tr key={`1-${id}`}>
                                    <td>
                                      <div className="is-flex is-align-items-center">
                                        <img src={imagem} width="40" />
                                        <strong style={{marginLeft: 10}}>
                                          {titulo}
                                        </strong>
                                      </div>
                                    </td>
                                    <td>
                                    <input
                                      value={values[id]}
                                      onChange={handleChange}
                                      name={id}
                                      style={{maxWidth: 89}}
                                      className="input"
                                      type="number"
                                      max="9"
                                      min="0"
                                    />
                                    </td>
                                    <td className="has-text-right">
                                      R$ {preco}
                                    </td>
                                    <td className="has-text-right">
                                      R$ {parseInt(preco, 10) * parseInt(values[id], 10)}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            <button type="submit" className="button is-success">Enviar</button>
                          </form>
                       )
                    }
                  }
                </Formik>
              </div>
              <div className="modal-card-foot has-text-right">
s
              </div>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={onClose}
        ></button>
      </div>
    </>
  )
}

export default Pedidos