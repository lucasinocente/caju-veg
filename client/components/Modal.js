import { useState, useEffect } from 'react'
import { sendAnalyticsEvent } from '../helpers/analytics'

const Modal = ({
  titulo,
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    isOpen && sendAnalyticsEvent('Abre Modal Pedido', `Abre Modal Pedido ${titulo}`, window)
  }, [isOpen]);

  const buildMessage = ({ name, quantity }) => {
    return `Oiê Caju! ${ name
        ? `Meu nome é ${name}. `
        : ''
      }Gostaria de encomendar ${quantity} unidade(s) do produto ${titulo}`
  }

  const submitOrder = (event) => {
    event.preventDefault();
    const message = buildMessage({
      name,
      quantity,
    });

    sendAnalyticsEvent('Realiza Pedido', `Realiza Pedido ${titulo}`, window)

    return window.location.href =
      `https://${
        window.isMobile
          ? 'api'
          : 'web'
      }.whatsapp.com/send?phone=5551983320104&text=${message}`
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
            <form onSubmit={(event) => submitOrder(event)}>
              <div className="modal-card-head">
                <h4 className="modal-card-title">Encomende o seu:</h4>
              </div>
              <div className="modal-card-body">
                <div className="field">
                  <p>Olá! Por favor, preencha os campos abaixo para fazer seu pedido via WhatsApp:</p>
                </div>
                <div className="field">
                  <label className="label">Seu nome:</label>
                  <input
                    onChange={({ target }) => setName(target.value)}
                    value={name}
                    className="input"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="field">
                  <label className="label">Quantidade</label>
                  <input
                    onChange={({ target }) => setQuantity(target.value)}
                    value={quantity}
                    className="input"
                    type="number"
                    min="1"
                    name="quantidade"
                    validate="true"
                  />
                </div>
              </div>
              <div className="modal-card-foot has-text-right">
                <button className="button is-success">
                  Fazer pedido via Whatsapp
                </button>
              </div>
            </form>
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

export default Modal