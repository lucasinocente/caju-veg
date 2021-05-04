import { SiInstagram, SiFacebook } from 'react-icons/si'

const Footer = () => (
  <footer className="footer">
    <div className="container">
        <hr className="styled" />
        <div className="content has-text-centered">
          <p><strong>Caju Cozinha Independente</strong> | Siga a Caju nas redes sociais:
          <a href="https://www.instagram.com/caju.cozinha/" target="_blank" className="icon-footer"><SiInstagram /></a>
          <a href="https://www.facebook.com/caju.cozinha" target="_blank" className="icon-footer"><SiFacebook /> </a>
          | Telefone: (51) 98332 0104</p>
        </div>
    </div>
  </footer>
)

export default Footer