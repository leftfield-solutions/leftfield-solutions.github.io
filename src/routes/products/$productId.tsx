import { createFileRoute, Link } from '@tanstack/react-router';
import { ProductData } from '@/data';

import { Button, Container, Typography } from '@mui/material';
import { ContactUs } from '@/components/contact-us';
import React from 'react';
import { Product } from '@/components/product';
// Define the component as a standard React functional component
function ProductDetail() {
  const { productId } = Route.useLoaderData();
  const product = ProductData.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <div className="flex flex-wrap justify-between items-center gap-3">
        <Typography variant="h4" color="primary.dark" sx={{ fontWeight: 700 }}>
          {product?.title}
        </Typography>
        <div className="flex justify-end gap-4 w-full">
          <Link to="/products">
            <Button size="large" color="secondary" variant="outlined">
              Back to Products
            </Button>
          </Link>
          <ContactUs />
        </div>
      </div>
      <div className="mt-4">
        <Product product={product} showLearnMore={false} />
      </div>
      <div className="mt-4">{product.detail && React.createElement(product.detail)}</div>
    </Container>
  );
}
// Create the route with the component
export const Route = createFileRoute('/products/$productId')({
  component: ProductDetail,
  loader: async ({ params }) => {
    return { productId: params.productId };
  },
  errorComponent: () => <div>Product not found</div>
});
