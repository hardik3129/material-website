import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Dasboard() {

  const Navigate = useNavigate()
  const [ProductData, setProductData] = React.useState([])
  
  React.useEffect(() => {
    setProductData(JSON.parse(localStorage.getItem('ProductList')) || [])
  },[])

  const OnClickDelete = (id) => {
    if (window.confirm() === true) {
      const FilterData = ProductData.filter((i) => {
        return i.id !== id
      })
      setProductData(FilterData)
      localStorage.setItem('ProductList',JSON.stringify(FilterData))
    }
  }

  const OnClickEdit = (Id) => {
    Navigate(`/updateproduct/${Id}`)
  }
  
  return (
    <>
      {
        ProductData.map((i) => {
          return (
            <React.Fragment key={Math.random()}>
            <Divider sx={{padding:'5px'}} />
            <Card sx={{ display: 'flex', alignItems:'center', padding:'5px 20px', ":Hover":{} }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"
                alt="Live from space album cover"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', width: 1}}>
                <CardContent sx={{ flex: '1 0 auto', paddingBottom:'5px !important' }}>
                  <Typography component="div" variant="h5">
                    {i.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {i.descripton}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div" sx={{display:'flex', alignItems:'center'}}>
                    <CurrencyRupeeIcon fontSize='10px'/>{i.price}
                  </Typography>
                  <Typography variant="subtitle1" color={i.ProductTtype === 'Vage'? '#008000' : 'red'} component="div">
                    <b>{i.ProductTtype}</b>
                  </Typography>
                </CardContent>
                  <Typography sx={{textAlign:'right'}}>
                    <Button variant="contained" color="success" onClick={() => OnClickEdit(i.id)}>Edit</Button>&nbsp;&nbsp;
                    <Button variant="contained" color='error' onClick={() => OnClickDelete(i.id)}>Delete</Button>
                  </Typography>
              </Box>
            </Card>
            </React.Fragment>
          )
        })
      }
    </>
  );
}