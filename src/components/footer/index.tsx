import { FacebookLogo } from 'phosphor-react';
import { TiSocialInstagramCircular as Insta,TiSocialLinkedinCircular as Linkedin} from "react-icons/ti";
import Styles from './Footer.module.scss';


const Footer:React.FC = () =>(
  <div className={Styles.container}>
    <div className={Styles.childContainer}>
      <div className={Styles.column}>
        <h3>Logtipo</h3>
        <p>Caffeina é uma comunidade sem fins lucrativos, 
          que foi criada em 2021 com o inruito de conectar 
          a comunidade aos líderes juvenis angolanos
        </p>

        <div style={{display:'flex',gap:'1rem'}}>
          <FacebookLogo size={32} weight="fill" color='#8a8a8a' />
          <Insta size={32} color='#8a8a8a' />
          <Linkedin size={32} color='#8a8a8a' />
        </div>
      </div>

      <div className={Styles.column}>
        <p className={Styles.title}>INSTITUCIONAL</p>
         <div className={Styles.columnChild}>
            <span>Uma Coisa</span>
            <span>Outra coisa</span>
            <span>Coisda</span>
            <span>Outraas</span>
         </div>
      </div>

      <div className={Styles.column}>
        <p className={Styles.title}>AJUDA</p>
         <div className={Styles.columnChild}>
            <span>Termos e Condições</span>
            <span>Politicas de privacidade</span>
            <span>FQA</span>
            <span>Sugestões</span>
         </div>
      </div>
      
      <div className={Styles.column}>
        <p className={Styles.title}>NEWSLATTER</p>
         <div>

         </div>
      </div>

    </div>
    <p style={{color:'#8a8a8a'}}>© 2022 Caffeína, Todos os direitos reservados</p>
  </div>
);

export default Footer;
