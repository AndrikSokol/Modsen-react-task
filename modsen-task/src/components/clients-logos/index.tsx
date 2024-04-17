import BannerIcon1 from '@/assets/images/banner/logo_1.png';
import BannerIcon2 from '@/assets/images/banner/logo_3.png';
import BannerIcon3 from '@/assets/images/banner/logo_4.png';
import BannerIcon4 from '@/assets/images/banner/logo_5.png';
import BannerIcon5 from '@/assets/images/banner/logo_6.png';
import BannerIcon6 from '@/assets/images/banner/logo_7.png';
import Box from '../UI/box';
import styled from 'styled-components';

const Img = styled.img`
  @media (max-width: 767px) {
    height: 65px;
  }
`;

const ClientsLogos = () => {
  const bannerIcons = [
    BannerIcon1,
    BannerIcon2,
    BannerIcon3,
    BannerIcon4,
    BannerIcon5,
    BannerIcon6,
  ];

  return (
    <Box sx={{ display: 'flex', overflow: 'hidden' }}>
      {bannerIcons.map((bannerIcon, index) => {
        return (
          <Box key={index}>
            <Img style={{ objectFit: 'cover' }} src={bannerIcon} />
          </Box>
        );
      })}
    </Box>
  );
};

export default ClientsLogos;
