import { Box, Typography, Link, Container, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import companyLogo from '@/assets/LF.png';
import { styled } from '@mui/material/styles';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#2d2d2d',
  padding: theme.spacing(2, 0),
  color: '#fff'
}));

const emailAddress = 'info@leftfield-solutions.com';

function Footer() {
  return (
    <footer>
      <StyledFooter>
        <Container maxWidth="lg">
          <div className="flex justify-end gap-4">
            <div className="flex flex-col justify-center items-end">
              <div className="hidden md:block">
                <Link href={`mailto:${emailAddress}`} color="inherit" underline="hover">
                  info@leftfield-solutions.com
                </Link>
              </div>
              <div className="block md:hidden">
                <IconButton aria-label="Email" href={`mailto:${emailAddress}`} color="inherit" style={{ padding: '0px' }}>
                  <EmailIcon fontSize="medium" />
                </IconButton>
              </div>

              <Typography variant="body2" color="inherit">
                <IconButton
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/schauer5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  style={{ padding: '0px' }}
                >
                  <LinkedInIcon fontSize="medium" />
                </IconButton>
              </Typography>
            </div>

            <div>
              <img src={companyLogo} alt="Company Logo" title="Company Logo" style={{ height: '65px', width: 'auto' }} />
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <Typography variant="body2" color="inherit">
              © {new Date().getFullYear()} Left Field Solutions LLC. All rights reserved.
            </Typography>
          </div>
        </Container>
      </StyledFooter>
    </footer>
  );
}

export default Footer;
