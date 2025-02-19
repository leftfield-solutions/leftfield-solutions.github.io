import { Box, Card, CardContent, Typography, Grid2 as Grid, CardHeader, CardActions, Button } from '@mui/material';
import { ServiceData } from '@/data';
import { Link } from '@tanstack/react-router';
import React from 'react';
export const HomeServices = () => {
  return (
    <>
      <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
        Services
      </Typography>

      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
          gap: 2
        }}
      >
        {ServiceData.map((card, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{
              maxWidth: 445,
              minWidth: 285,
              minHeight: 300,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <CardHeader
              title={
                <Grid container spacing={1}>
                  <Grid>{React.createElement(card.image)}</Grid>
                  <Grid>
                    <Typography id={card.locationId} style={{ fontSize: '1.3rem' }} component="span" color="secondary">
                      {card.title}
                    </Typography>
                  </Grid>
                </Grid>
              }
            ></CardHeader>
            <CardContent style={{ minHeight: 150 }}>
              <Typography color="text.secondary">{card.description}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <div className="flex justify-center w-full pb-3">
                <Button size="medium" color="primary" variant="contained" component={Link} to={card.link}>
                  <Typography>Learn More</Typography>
                </Button>
              </div>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};
