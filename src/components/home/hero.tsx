import { styled } from '@mui/material/styles';
import { Box, Typography, Container, Grid2 as Grid } from '@mui/material';

import backgroundImage from '@/assets/hero.png'; // Import the image
import { ContactUs } from '../contact-us';

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  width: '100%' /* Ensure container takes full width */,
  color: theme.palette.common.white,
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left'
  },
  '&:before': {
    // Add an overlay for better text readability
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust darkness as needed
    zIndex: 0
  }
}));

const HeroContent = styled(Container)(() => ({
  position: 'relative',
  zIndex: 1 // Ensure content is above the overlay and wave
}));

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent maxWidth="md">
        <Grid container spacing={3} alignItems="center">
          <Grid size={{ xs: 12, md: 9 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Unlock Your Business Potential With SharePoint & Power Platform
            </Typography>
            <Typography variant="subtitle1">
              We provide high-quality services and innovative solutions for your needs. Explore our website to learn more.
            </Typography>
            <div className="mt-4">
              <ContactUs />
            </div>
          </Grid>
        </Grid>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
