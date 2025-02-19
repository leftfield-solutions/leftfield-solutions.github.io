import { FilloutPopupEmbed } from '@fillout/react';
import '@fillout/react/style.css';
import { Button, styled } from '@mui/material';
import { useState } from 'react';

const HeroButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3)
}));
export const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center">
      <HeroButton variant="contained" color="secondary" size="large" sx={{ marginTop: 0 }} onClick={() => setIsOpen(true)}>
        Contact Us
      </HeroButton>

      {isOpen && <FilloutPopupEmbed filloutId="1hkCRohkVLus" onClose={() => setIsOpen(false)} />}
    </div>
  );
};
