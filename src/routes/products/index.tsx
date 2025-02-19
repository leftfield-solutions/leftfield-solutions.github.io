import { ContactUs } from '@/components/contact-us';
import { Products } from '@/components/products';
import { useScroll } from '@/hooks/scroll.hook';
import { Container, Typography } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/products/')({
  component: RouteComponent
});

function RouteComponent() {
  useScroll();
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <div className="flex justify-between items-center  mb-4">
        <Typography variant="h4" color="primary.dark" sx={{ fontWeight: 700 }}>
          Products
        </Typography>

        <ContactUs />
      </div>
      <Products isFeaturedFilter={false} />
    </Container>
  );
}
