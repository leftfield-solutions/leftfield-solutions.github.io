import { Box } from '@mui/material';

import { ProductData } from '@/data';
import { Product } from './product';

interface IProductProps {
  isFeaturedFilter: boolean;
}
export const Products = ({ isFeaturedFilter }: IProductProps) => {
  const products = isFeaturedFilter ? ProductData.filter((p) => p.isFeatured) : ProductData;
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gap: 2
        }}
      >
        {products
          .filter((p) => p.isFeatured)
          .map((card, index) => (
            <div key={index}>
              <Product product={card} showLearnMore={true} />
            </div>
          ))}
      </Box>
    </>
  );
};
