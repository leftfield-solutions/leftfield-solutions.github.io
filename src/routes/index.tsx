import { createFileRoute } from '@tanstack/react-router';
import Hero from '../components/home/hero';
import { Container, Typography } from '@mui/material';
import { HomeServices } from '@/components/home/home-services';
import { Products } from '@/components/products';

export const Route = createFileRoute('/')({
  component: Index
});

function Index() {
  return (
    <>
      <Hero />

      <div className="flex flex-col gap-4">
        <div style={{ backgroundColor: '#bdc9cb', paddingTop: '2rem', paddingBottom: '5rem' }}>
          <Container maxWidth="lg">
            <HomeServices />
          </Container>
        </div>
        <div style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
          <Container maxWidth="lg">
            <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
              Featured Products
            </Typography>
            <Products isFeaturedFilter={true} />
          </Container>
        </div>
      </div>
    </>
  );
}
