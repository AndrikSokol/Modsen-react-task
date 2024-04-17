import FacebookIcon from '@/assets/icons/icon_facebook.svg?react';
import TwitterIcon from '@/assets/icons/icon_twitter.svg?react';
import LinkedInIcon from '@/assets/icons/icon_linkedin.svg?react';
import YoutubeIcon from '@/assets/icons/icon_youtube.svg?react';
import GoogleIcon from '@/assets/icons/icon_google.svg?react';
import DribbbleIcon from '@/assets/icons/icon_dribbble.svg?react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const StyledIcon = styled.svg<{ color?: 'white' | 'blue' }>`
  path {
    fill: ${(props) =>
      props.color === 'blue' ? 'var(--colors-primary)' : 'var(--colors-white)'};
  }
`;

type SocialsProps = {
  color?: 'white' | 'blue';
};
const Socials: FC<SocialsProps> = ({ color = 'white' }) => {
  const socials = [
    { Icon: FacebookIcon },
    { Icon: TwitterIcon },
    { Icon: LinkedInIcon },
    { Icon: YoutubeIcon },
    { Icon: GoogleIcon },
    { Icon: DribbbleIcon },
  ];
  return (
    <>
      {socials.map((social, index) => (
        <li key={index}>
          <Link to="#">
            <StyledIcon as={social.Icon} color={color} />
          </Link>
        </li>
      ))}
    </>
  );
};

export default Socials;
