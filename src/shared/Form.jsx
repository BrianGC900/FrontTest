import React, { useState } from 'react';
import { TextField, Grid, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Form = ({ schema = { fields: [] }, fieldFX, errorFx }) => {
  // Asegúrate de que fieldFX y errorFx son funciones que retornan un par de valores
  const [formData, setFormData] = fieldFX;  // Asumiendo que fieldFX es algo como useState
  const [errors, setErrors] = errorFx;      // Lo mismo para errorFx

  const [showPassword, setShowPassword] = useState({});

  const togglePasswordVisibility = (fieldName) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  };

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  return (
    <Grid container spacing={2}>
      {schema.fields.map((field) => (
        <Grid item xs={12} key={field.name}>
          <TextField
            fullWidth
            label={field.label}
            type={field.type === 'password' && !showPassword[field.name] ? 'password' : 'text'}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(e, field.name)}
            error={Boolean(errors[field.name])}
            helperText={errors[field.name]}
            InputProps={{
              endAdornment:
                field.type === 'password' ? (
                  <InputAdornment position="end">
                    <IconButton onClick={() => togglePasswordVisibility(field.name)} edge="end">
                      {showPassword[field.name] ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ) : null,
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Form;
