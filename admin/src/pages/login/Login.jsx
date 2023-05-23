import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useHistory } from 'react-router-dom';
import {
  CssBaseline,
  Box,
  Grid,
  TextField,
  FormControlLabel,
  FormControl,
  Button,
  Checkbox,
  Link,
  Paper,
  Typography
} from "@mui/material";

import { Container } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import signBkgImage from "../../assets/images/login/sign_bkg.png";
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t }  = useTranslation(['page']);
  const dispatch = useDispatch();
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(t('messages.field_require'))
      .email(t('messages.email_invalid')),
    password: Yup.string()
      .required(t('messages.field_require'))
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = data => {
    login(dispatch, data, history);
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          minWidth: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid container >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${signBkgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderTopLeftRadius: '16px',
              borderBottomLeftRadius: '16px'
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            sx={{
            borderTopRightRadius: '16px',
            borderBottomRightRadius: '16px'}}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                {t('login.sign_in')}
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <FormControl sx={{ mt:3 }} fullWidth>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={t('login.email')}
                  name="email"
                  autoComplete="email"
                  autoFocus
                  {...register('email')}
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
                </Typography>
                </FormControl>
                <FormControl sx={{ mt:3 }} fullWidth>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label={t('login.password')}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  {...register('password')}
                  error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.password?.message}
                </Typography>
                </FormControl>
                {/*<FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />*/}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 5, mb: 0 }}
                  size="large"
                  onClick={handleSubmit(onSubmit)}
                >
                  {t('login.log_in')}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}