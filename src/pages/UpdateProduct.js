import React, { useState,useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Radio, RadioGroup } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import { Textarea } from '@mui/joy';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function UpdateProduct() {

  const Navigate = useNavigate()
  const {id} = useParams()
  const [Editdata,setEditdata] = useState({})

  useEffect(() => {
      const Products = JSON.parse(localStorage.getItem('ProductList'))
      const filt = Products.find((i) => i.id === Number(id))
      setEditdata(filt)
  },[id])

  // ==================== ADD PRODUCT ===========================
  const OnSubmitProduct = (event) => {
    event.preventDefault()
    const {target} = event
    const product = {
      id : Number(id),
      name : target.name.value,
      descripton : target.description.value,
      price : target.price.value,
      ProductTtype : target.product_type.value
    }
    
    const data = JSON.parse(localStorage.getItem('ProductList'))
    console.log(data);
    const Edit = data.map((i) => {
      if (i.id === Number(id)) {
        i = product
      }
      return i
    })
    localStorage.setItem('ProductList',JSON.stringify(Edit))
    Navigate('/')
  }

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    }}>
      <Typography variant="h4" gutterBottom>
        Update Product
      </Typography>
      <form 
        onSubmit={OnSubmitProduct} 
        style={{
          width:'60%', 
          boxShadow:'2px 2px 5px silver', 
          padding:'15px', 
          borderRadius:'10px',
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <TextField
              type='text'
              label="Enter Product Name"
              name='name'
              fullWidth
              variant="standard"
              defaultValue={Editdata.name}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Description</Typography>
            <Textarea
              label="Product Description"
              fullWidth
              variant="outlined"
              name='description'
              defaultValue={Editdata.descripton}
            />
          </Grid>
          <Grid item xs={12} sx={{display:'flex'}}>
            <CurrencyRupeeIcon fontSize='10px'/>
              <TextField
                type='text'
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
    </div>
  );
}