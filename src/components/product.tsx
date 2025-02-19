import type { IProduct } from '@/data/products';
import { Button, Card, CardActions, CardContent, CardHeader, Grid2 as Grid, Typography } from '@mui/material';
import { Link } from '@tanstack/react-router';
import React from 'react';
export interface ProductProps {
  product: IProduct;
  showLearnMore?: boolean;
}

export const Product = ({ product, showLearnMore }: ProductProps) => {
  return (
    <Card variant="outlined" sx={{ backgroundColor: '#f5f5f5' }}>
      <CardHeader
        title={
          <Grid container spacing={1}>
            <Grid className="flex justify-between w-full">
              <Typography style={{ fontSize: '1.4rem' }} component="span" color="secondary">
                {product.title}
              </Typography>
              {React.createElement(product.icon, { fontSize: 'large', color: 'secondary' })}
            </Grid>
          </Grid>
        }
      ></CardHeader>
      <CardContent style={{ minHeight: 100 }}>
        <div className="flex justify-between items-stretch gap-4 md:flex-row flex-col">
          <div className="md:w-1/3 w-full h-auto">{product.image()}</div>
          <div className="md:w-2/3 w-full" dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
      </CardContent>

      {showLearnMore && (
        <CardActions disableSpacing>
          <div className="p-2 flex justify-center w-full">
            <Link to="/products/$productId" params={{ productId: product.id }}>
              <Button size="large" color="secondary" variant="outlined">
                Learn More
              </Button>
            </Link>
          </div>
        </CardActions>
      )}
    </Card>
  );
};
