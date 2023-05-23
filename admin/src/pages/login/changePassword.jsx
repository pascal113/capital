import React, {useState} from 'react';
import {
    Box,
    FormControl,
    Button, 
    TextField,
    Dialog,
    DialogContent,
    DialogTitle,
    Typography,
    IconButton,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const ChangePassword = (props) => {
    const { t }  = useTranslation(['page']);
    const {open, handleClose } = props;
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    const validationSchema = Yup.object().shape({
        old_password: Yup.string()
          .required(t('messages.field_require')),
        new_password: Yup.string()
          .min(8, t('messages.password_min'))
          .matches(/[0-9]/,  t('messages.password_number'))
          .matches(/[a-z]/,  t('messages.password_lowercase'))
          .matches(/[A-Z]/, t('messages.password_uppercase'))
          //.matches(/[^\w]/, t('messages.password_symbol'))
          .required(t('messages.field_require')),
        confirm_password: Yup.string()
          .oneOf([Yup.ref('new_password'), null], t('messages.not_match_password'))
          .required(t('messages.field_require')),
    });

    const onSubmit = data => {
      props.onSubmit(data);  
    };

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
        } = useForm({
        resolver: yupResolver(validationSchema), 
    });

    return (
        <Dialog open={open} onClick={(e) => e.stopPropagation()} onClose={handleClose} fullWidth>
            <DialogTitle sx={{fontWeight: 'bold'}}>{t('change_password.title')}</DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                >
                  <FormControl sx={{ mt:1 }} fullWidth>
                      <Controller
                      control={control}
                      name="old_password"
                      render={({ field }) => (
                          <TextField
                              margin="normal"
                              required
                              fullWidth
                              label={t('change_password.old_password')}
                              name="old_password"
                              autoFocus
                              type="password"
                              placeholder={t('messages.enter_contents')}
                              autoComplete="old_password"
                              {...register("old_password")}
                              error={errors.old_password ? true : false}
                          />
                      )}>
                      </Controller>
                      <Typography variant="inherit" color="textSecondary">
                      {errors.old_password?.message}
                      </Typography>  
                  </FormControl>
                  <FormControl sx={{ mt:2 }} fullWidth>
                      <InputLabel htmlFor="outlined-adornment-password">{t('change_password.new_password')}</InputLabel>
                      <Controller
                      control={control}
                      required
                      name="new_password"
                      render={({ field }) => (
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
                          label={t('change_password.new_password')}
                          name="new_password"
                          placeholder={t('messages.enter_contents')}
                          autoComplete="new_password"
                          endAdornment={
                            <InputAdornment position="end">
                            <IconButton 
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                          }
                          required
                          fullWidth
                          {...register("new_password")}
                          error={errors.new_password ? true : false}
                        />
                      )}>
                      </Controller>
                      <Typography variant="inherit" color="textSecondary">
                      {errors.new_password?.message}
                      </Typography>  
                  </FormControl>

                  <FormControl sx={{ mt:1 }} fullWidth>
                      <Controller
                      control={control}
                      name="confirm_password"
                      render={({ field }) => (
                          <TextField
                              margin="normal"
                              required
                              fullWidth
                              label={t('change_password.confirm_password')}
                              name="confirm_password"
                              type="password"
                              placeholder={t('messages.enter_contents')}
                              autoComplete="confirm_password"
                              {...register("confirm_password")}
                              error={errors.confirm_password ? true : false}
                          />
                      )}>
                      </Controller>
                      <Typography variant="inherit" color="textSecondary">
                      {errors.confirm_password?.message}
                      </Typography>  
                  </FormControl>
                            
                  <Box display="flex"
                      justifyContent="flex-end"
                      alignItems="flex-end"
                  >
                      <Button type="submit" variant="contained" sx={{ mt: 5, mb: 0, mx: 5, paddingLeft: '50px', paddingRight: '50px' }} 
                          size="large" onClick={handleSubmit(onSubmit)}>{t('ok')}</Button>
                      <Button variant="contained" color="error" sx={{ mt: 5, mb: 0 }} size="large" onClick={handleClose}>{t('cancel')}</Button>
                  </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default ChangePassword