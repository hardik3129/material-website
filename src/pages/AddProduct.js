import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Radio, RadioGroup } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Textarea } from '@mui/joy';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function ValidationTextFields() {

  const Navigate = useNavigate()

  // ==================== ADD PRODUCT ===========================
  const OnSubmitProduct = (event) => {
    event.preventDefault()
    const {target} = event
    const product = {
      id : new Date().getTime(),
      name : target.name.value,
      descripton : target.description.value,
      price : target.price.value,
      ProductTtype : target.product_type.value
    }
    if (!localStorage.getItem('ProductList')) {
      localStorage.setItem('ProductList',JSON.stringify([product]))
    } else {
      const data = JSON.parse(localStorage.getItem('ProductList'))
      data.push(product)
      localStorage.setItem('ProductList',JSON.stringify(data))
    }

    Navigate('/')
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add Product
      </Typography>
      <form onSubmit={OnSubmitProduct}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <TextField
              label="Enter Product Name"
              name='name'
              fullWidth
              autoComplete="cc-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Description</Typography>
            <Textarea
              id="expDate"
              label="Product Description"
              fullWidth
              variant="outlined"
              name='description'
            />
          </Grid>
          <Grid item xs={12} sx={{display:'flex'}}>
            <CurrencyRupeeIcon fontSize='10px'/>
              <TextField
                type='number'
                label="Enter Price"
                fullWidth
                name='price'
                variant="standard"
              />
          </Grid>
          <Grid item xs={12}>
            <Typography>Product Type</Typography>
            <RadioGroup>
              <FormControlLabel
                control={<Radio color="secondary" name="product_type" value="Vage" />}
                label="Vage"
              />
              <FormControlLabel
                control={<Radio color="secondary" name="product_type" value="NonVage" />}
                label="NonVage"
              />
            </RadioGroup>
          </Grid>
        </Grid>
        <Box sx={{textAlign:'right'}}>
          <Button type='submit' variant="contained" color="success">
            Add Product
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
}