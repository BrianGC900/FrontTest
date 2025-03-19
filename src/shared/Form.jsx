import React from 'react';
import { TextField, Grid } from '@mui/material';

const Form = ({ schema = { fields: [] }, fieldFX, errorFx, grid, sheetName }) => {
  const [formData, setFormData] = fieldFX;
  const [errors, setErrors] = errorFx;

  return (
    <Grid container spacing={2}>
      {schema.fields && schema.fields.map((field, index) => (
        <Grid item xs={12} key={index}>
          <TextField
            fullWidth
            label={field.label}
            value={formData[field.name] || ''}
            onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
            error={Boolean(errors[field.name])}
            helperText={errors[field.name]}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Form;
