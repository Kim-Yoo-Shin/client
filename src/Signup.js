import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import validation from './utils/validation';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Signup() {
  const classes = useStyles();
  const [errors, setErrors] =useState({});
  
  const [data, setData] = useState({
      userName : "",
      email: "",
      userId: "",
      password:"",
      checkPassword: "",
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="이름"
                value={data.userName} onChange={e => handle(e)}
                name="userName"
                id ="userName"
                autoComplete="name"/>
                
            </Grid>
            {errors.userName && <p className="text-danger">{errors.userName}</p>}

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="이메일"
                value={data.email} onChange={e => handle(e)}
                name="email"
                id = "email"
                autoComplete="email"/>
                
            </Grid>
            {errors.email && <p className="text-danger">{errors.email}</p>}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="아이디"
                value={data.userId} onChange={e => handle(e)}
                name="userId"
                id = "userId"
                autoComplete="id"
              />
            </Grid>
            {errors.userId && <p className="text-danger">{errors.userId}</p>}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                id="password"
                label="비밀번호"
                value={data.password} onChange={e => handle(e)}
                type="password"
                autoComplete="current-password"
              />
            </Grid>
            {errors.password && <p className="text-danger">{errors.password}</p>}

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="checkPassword"
                id="checkPassword"
                label="비밀번호 확인"
                value={data.checkPassword} onChange={e => handle(e)}
                type="password"
                
              />
            </Grid>
            {errors.checkPassword && <p className="text-danger">{errors.checkPassword}</p>}
            
            
          </Grid>
          <Button
            type="submit"
            onClick={submit}
            fullWidth
            variant="contained"
            style={{ color: 'black' }}
            className={classes.submit}
          >
            회원가입
          </Button>
          
            <Grid item>
              <Link href="/signin" variant="body2">
                회원이시라면 로그인!
              </Link>
            </Grid>
        </form>
      </div>
      
    </Container>
  );
}

export default Signup;