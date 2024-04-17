import Container from '@/components/UI/container';
import Button from '../UI/button';
import logo from '@/assets/images/logo.png';
import { StyledPlayIcon, Ul, Wrapper, StyledHeader } from './styled';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ArrowDown from '@/assets/icons/icon_chevron_down.svg?react';
import Hamburger from '@/assets/icons/icon_navigation.svg?react';
import DismissIcon from '@/assets/icons/icon_dismiss.svg?react';
import { ROUTES } from '@/router/routes';
import Socials from '../socials';
import Box from '../UI/box';
import Title from '../UI/title';
import { useState } from 'react';
import DropDown from '../UI/dropDown';

const StylesArrowDown = styled(ArrowDown)`
  width: 16px;
  height: 16px;
  path {
    fill: var(--colors-text-muted);
  }
`;

const StyledButton = styled(Button)`
  @media (max-width: 991px) {
    display: none;
  }
`;

const HamburgerIcon = styled(Hamburger)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  path {
    fill: var(--colors-primary);
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

const StyledLink = styled(Link)<{ $active: boolean }>`
  color: ${({ $active }) =>
    $active ? 'var(--colors-black)' : 'var(--colors-text-muted)'};
  font-weight: 500;
  font-size: 14px;

  &:hover {
    border-bottom: 1px solid white;
  }
`;

const WrapperMobile = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
`;
const WrapperLink = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const UlMobile = styled.ul``;

const Homelinks = [
  { title: 'Home 1', to: '/Home/1' },
  { title: 'Home 2', to: '/Home/2' },
  { title: 'Home 3', to: '/Home/3' },
];

const Solutionslinks = [
  { title: 'Data integration', to: '#' },
  { title: 'Big Data', to: '#' },
  { title: 'Data warehousing', to: '#' },
  { title: 'Self-service BI', to: '#' },
  { title: 'Data visualization', to: '#' },
];
const navLinks = [
  {
    title: 'Home',
    to: ROUTES.HOME,
  },
  {
    title: 'Solutions',
    to: ROUTES.SOLUTIONS,
  },
  {
    title: 'Pages',
    to: ROUTES.HOME,
  },
  {
    title: 'Elements',
    to: ROUTES.HOME,
  },
  {
    title: 'Blog',
    to: ROUTES.HOME,
  },
  {
    title: 'Contacts',
    to: ROUTES.CONTACTS,
  },
];

{
  /* <li>
<StyledLink to="#">
  <WrapperLink>
    Pages
    <StylesArrowDown />
  </WrapperLink>
</StyledLink>
</li> */
}

const Header = () => {
  const [isOpenedNav, setIsOpenedNav] = useState<boolean>(false);

  const location = useLocation();
  const page = location.pathname.split('/')[1];
  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="ENSOME" />
          </Link>
          <Ul $gap="40px">
            {navLinks.map((link, index) => (
              <StyledLink
                key={`${link.title}-${index}`}
                $active={page.toLowerCase() === link.title.toLowerCase()}
                to={link.to}
              >
                {link.title}
              </StyledLink>
            ))}
          </Ul>

          <StyledButton
            renderSVG={<StyledPlayIcon height="24px" color="white" />}
          >
            Whatch the demo
          </StyledButton>
          {!isOpenedNav && (
            <HamburgerIcon onClick={() => setIsOpenedNav(true)} />
          )}
          {isOpenedNav && <DismissIcon onClick={() => setIsOpenedNav(false)} />}
        </Wrapper>
        {isOpenedNav && (
          <Box sx={{ height: '100vh' }}>
            <UlMobile>
              <DropDown title="Home" links={Homelinks} />
              <DropDown title="Solutions" links={Solutionslinks} />
              <DropDown title="Pages" />
              <DropDown title="Elements" />
              <DropDown title="Blog" />
              <DropDown title="Contacts" />
            </UlMobile>
            <WrapperMobile>
              <Title variant="h6">Follow us</Title>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Socials color="blue" />
              </Box>
            </WrapperMobile>
          </Box>
        )}
      </Container>
    </StyledHeader>
  );
};

export default Header;
