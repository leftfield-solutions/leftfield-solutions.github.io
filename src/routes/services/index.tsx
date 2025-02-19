import { ContactUs } from '@/components/contact-us';
import { ServiceData } from '@/data';
import { useScroll } from '@/hooks/scroll.hook';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/services/')({
  component: RouteComponent
});

const ServiceCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%', // Make cards fill available height in their column.  Crucial for consistent appearance
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', //Distribute the spacing of the components
        borderColor: 'rgba(0, 0, 0, 0.12)', // Subtle border
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)', // Soft shadow
        backgroundColor: 'primary.light'
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" component="h3" sx={{ ml: 1, fontWeight: 600, color: 'primary.dark' }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

function RouteComponent() {
  useScroll();
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <div className="flex justify-between items-center">
        <Typography variant="h4" color="primary.dark" className="mb-3" sx={{ fontWeight: 700, mb: 2 }}>
          Services
        </Typography>
        <ContactUs />
      </div>

      {ServiceData.map((service) => (
        <div key={service.title}>
          <Typography variant="h5" id={service.locationId} component="h3" sx={{ fontWeight: 600, color: 'secondary.dark', mb: 2 }}>
            {service.title}
          </Typography>
          <Box
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 1fr))',
              gap: 3,
              marginBottom: '2rem'
            }}
          >
            {service.children.map((child) => (
              <ServiceCard key={child.title} title={child.title} description={child.description} />
            ))}
          </Box>
        </div>
      ))}
    </Container>
  );
}
