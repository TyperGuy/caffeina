import Styles from './MeetupCard.module.scss';



const Card:React.FC = () =>(
  <div className={Styles.container}>
      <img className={Styles.img} src="collaboration-1.webp" alt="" />
      <div className={Styles.container}>
        <p
          style={{
            fontWeight:800,
            fontSize:'1.2em'
          }}
        >Titulo da Palestra
        </p>
        <span style={{marginTop:-15, paddingRight:'1rem', color:'#57606a'}} >
          {
            'Work seamlessly across your organization on a platform designed for collaboration.'
          }
        </span>
      </div>
  </div>
);

export default Card;
