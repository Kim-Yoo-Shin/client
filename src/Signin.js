import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import validation from './utils/SigninValidation.js'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Signin() {
  const classes = useStyles();
  const [errors, setErrors] =useState({});

  const [data, setData] = useState({
    userId: "",
    password:"",
  });
  
  function handle(e){
    const newData = { ...data }
    newData[e.target.name] = e.target.value
    setData(newData)
    console.log(newData)
    }


  function submit(e){
    e.preventDefault();
    setErrors(validation(data))
    

    }
    

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar style={{ color: 'black' }}>
          <VpnKeyIcon/>
        </Avatar>
        <Typography component="h1" variant="h6">
          로그인
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="아이디"
            value={data.userId} onChange={e => handle(e)}
            name="userId"
            id = "userId"
            autoComplete="id"
            autoFocus
            
          />
          {errors.userId && <p className="text-danger">{errors.userId}</p>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="비밀번호"
            value={data.password} onChange={e => handle(e)}
            name="password"
            type="password"      
            autoComplete="current-password"
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
          
          <Button
            type="submit"
            onClick ={submit}
            fullWidth
            variant="contained"
            style={{ color: 'black[200]' }}
            className={classes.submit}
          >
            로그인
          </Button>
          
            
            <Grid item>
              <Link href="/member" variant="body2">
                {"계정이 없나요? 회원가입"}
              </Link>
            </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Signin;