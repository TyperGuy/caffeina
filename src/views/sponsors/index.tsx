import { PlusCircle } from 'phosphor-react';
import {FC, useState} from 'react';
import {Container,Logo,Button} from './Sponsors.styles';


const Sponsors: FC = () => {
  const [isHover,setIsHover] = useState(false);
    return (
      <Container>
        <p style={{fontSize:20}}>Junta-te ao grupo de empresa comprometidas com o desenvolvimento</p>
        <div style={
          {
            display:'flex',
            flexDirection:'row',
            gap:'2.5rem',
            alignItems:'center',
            marginBottom:'5rem'
          }}>
            <Logo src="bai.png" alt="" />
            <Logo src="ensa.png" alt="" />
            <Logo src="acelera.png" alt="" />
            <Logo src="ncr.png" alt="" />
            <Button 
              onMouseEnter={()=>setIsHover(true)}
              onMouseLeave={()=>setIsHover(false)}
              >
              <PlusCircle 
                style={
                  {
                    margin:'1rem',
                  }
                } color="inherit"  size={32} weight="fill" />
              {isHover&&
                <span style={
                  {
                    marginRight:'1.5rem',
                    color:'inherit',
                    fontWeight:600
                  }
                } >
                  SUA EMPRESA
                </span>}
            </Button>
        </div>
      </Container>
    )
}

export default Sponsors;
