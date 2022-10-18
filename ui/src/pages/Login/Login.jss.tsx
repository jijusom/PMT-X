import {createUseStyles} from 'react-jss';
import { skyLight } from '../../theme';

const {light, primary, muted, dark} = skyLight;
const classes = createUseStyles({
  container: {
    // background: 'url(https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg)',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize:'cover',
    backgroundColor: dark,
    height:'100vh',
    width: '100vw',
    display:'flex',
    fontSize: '14px',
  },
  card:{
    boxShadow: '0 4px 8px 0 rgba(200,200,200,0.3)',
    transition: '0.3s',
    backgroundColor: `${light}f5`,
    margin:'auto',
    width:'500px',
    height:'600px',
    '&:hover':{
      boxShadow:' 0 8px 16px 0 rgba(200,200,200,0.3)',
      border:'none',
    },
    borderRadius: '100px 10px 100px 10px',
    position:'relative',
  },
  logoContainer: {
    borderRadius:'60% 40% 60% 40%',
    padding:'25px',
    backgroundColor:primary,
    position: 'absolute',
    bottom:'91%',
    left:'32%',
    
  },
  logo: {
    background: `-webkit-linear-gradient(${light},${muted})`,
    WebkitBackgroundClip: 'text',
    'WebkitTextFillColor': 'transparent',
    fontWeight: 700,
    fontSize:'3em',
    margin: 0,
  },
  form:{
    display:'flex',
    justifyContent: 'center',
    flexDirection:'column',
    margin: '0 30px' ,
    height:'100%',
    width: 'auto',
    '& input': {
      padding:'20px 10px',
      border:'none',
      fontSize: '20px',
      borderBottom: `1px solid ${light}`,
      borderRadius: '10px',
      backgroundColor: light,
      '&:hover': {
        border: `1px solid ${primary}`,
      },
      '&:focus-visible': {
        outline: `1px solid ${primary}`,
      }
    },
    '& label': {
      margin: '10px 0 5px 0',
      color: muted,
    },
    '& span': {
      minHeight: '14px',
      fontSize: '15px',
      color: 'red',
      margin: '5px 0 10px 0',
      fontStyle: 'italic',
    },
    '& button': {
      width: '30%',
      height: 'auto',
      padding: '10px 15px',
      backgroundColor: `${primary}aa`,
      color: light,
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      fontWeight: 700,
      '&:hover': {
        backgroundColor: `${primary}ef`,
        cursor: 'pointer',
      },
    },
  },
  buttonWrapper: {
    height: '41px',
    display:'flex',
    transform: '0.3s ease-out',
    },
  runButton: {
    transition: '0.4s',
    '&:hover':{
      transform:'translateX(-100%)',
    }
  }
});

export default classes;