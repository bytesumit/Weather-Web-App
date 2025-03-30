import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';    
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: 'auto',
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const InfoBox = ({ info }) => {
  const ImageUrl =
    'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg';

  return (
    <Box sx={{ p: 2 }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6}>
          <StyledCard>
            <CardMedia
              sx={{ height: 200 }}
              image={ImageUrl}
              title="Weather"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}
              >
                {info.city}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', textAlign: 'center' }}
                component="div"
              >
                <p><strong>Temp:</strong> {info.temp} &#8451;</p>
                <p><strong>Max Temp:</strong> {info.tempMax} &#8451;</p>
                <p><strong>Min Temp:</strong> {info.tempMin} &#8451;</p>
                <p><strong>Humidity:</strong> {info.humidity}%</p>
                <p><strong>Weather:</strong> {info.weather}</p>
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfoBox;
