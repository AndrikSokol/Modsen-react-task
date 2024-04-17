import Container from '../UI/container';
import { StyledFooter } from './styled';
import styled from 'styled-components';
import SubTitle from '../UI/subTitle';
import { Link } from 'react-router-dom';
import Title from '../UI/title';
import Logo from '@/assets/icons/Logo.svg?react';
import Socials from '../socials';
import { ROUTES } from '@/router/routes';
import Box from '../UI/box';
import DropDown from '../UI/dropDown';

const GridTop = styled.div`
  display: Grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Wrapper = styled.div<{
  $content?: string;
  $items?: string;
  $direction?: string;
  $gap?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.$direction || 'row'};
  align-items: ${(props) => props.$items || 'start'};
  justify-content: ${(props) => props.$content || 'start'};
  gap: ${(props) => props.$content || '20px'};
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  width: 285px;
  margin-right: 190px;

  @media (max-width: 767px) {
    display: none;
  }
`;

const WrapperLink = styled.ul<{
  $direction?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.$direction || 'row'};
  gap: 12px;
  color: var(--colors-grey);
`;

const SocialsWrapper = styled.ul`
  display: flex;
  gap: 15px;
`;
const FooterPrivacy = styled.div`
  padding-top: 34px;
  padding-bottom: 30px;
`;

const WrapperFooter = styled.div`
  border-bottom: 1px solid #607d94;
  display: flex;
  padding: 50px 0;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  border-bottom: 1px solid #607d94;
  padding-top: 40px;

  @media (min-width: 768px) {
    display: none;
  }
`;
const Footer = () => {
  const quickLinks = [
    {
      title: 'Home',
      to: ROUTES.HOME,
    },
    {
      title: 'Solutions',
      to: ROUTES.SOLUTIONS,
    },
    {
      title: 'Blog',
      to: ROUTES.BlOG,
    },
    {
      title: 'Contacts',
      to: ROUTES.CONTACTS,
    },
    {
      title: 'Our Team',
      to: ROUTES.TEAM,
    },
    {
      title: 'About Us',
      to: ROUTES.ABOUT,
    },
    {
      title: 'Services',
      to: ROUTES.SERVICES,
    },
    {
      title: 'FAQ',
      to: ROUTES.FAQ,
    },
  ];

  const serviceLinks = [
    {
      title: 'Pages',
      to: ROUTES.PAGES,
    },
    {
      title: 'Elements',
      to: ROUTES.ELEMENTS,
    },
    {
      title: 'FAQ',
      to: ROUTES.FAQ,
    },
    {
      title: 'Pricing',
      to: ROUTES.PRICING,
    },
    {
      title: 'Site map',
      to: ROUTES.SITE_MAP,
    },
  ];

  const contactsLinks = [
    {
      title: 'ensome@info.co.us',
      to: '#',
    },
    { title: '+1 601-201-5580', to: '#' },
    {
      title: '  1642 Washington Avenue, Jackson, MS, Mississippi, 39201',
      to: '#',
    },
  ];
  return (
    <StyledFooter>
      <Container>
        <WrapperFooter>
          <InfoWrapper>
            <Logo />
            <SubTitle size="s">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </SubTitle>
            <SocialsWrapper>
              <Socials />
            </SocialsWrapper>
          </InfoWrapper>
          <GridTop>
            <Wrapper $direction="column" $gap="31px">
              <Title variant="h6" color="white">
                Quick link
              </Title>
              <WrapperLink $direction="column" style={{ gap: '12px' }}>
                {quickLinks.map((link) => (
                  <li>
                    <Link to={`/${link.to}`}>{link.title}</Link>
                  </li>
                ))}
              </WrapperLink>
            </Wrapper>
            <Wrapper $direction="column" $gap="31px">
              <Title variant="h6" color="white">
                Service
              </Title>
              <WrapperLink $direction="column" style={{ gap: '12px' }}>
                {serviceLinks.map((link) => (
                  <li>
                    <Link to={`/${link.to}`}>{link.title}</Link>
                  </li>
                ))}
              </WrapperLink>
            </Wrapper>
            <Wrapper $direction="column" $gap="31px">
              <Title variant="h6" color="white">
                Contact info
              </Title>
              <WrapperLink $direction="column" style={{ gap: '12px' }}>
                {contactsLinks.map((contact, index) => (
                  <li key={`${contact.title}-${index}`}>
                    <Link to={contact.to}>{contact.title}</Link>
                  </li>
                ))}
              </WrapperLink>
            </Wrapper>
          </GridTop>
        </WrapperFooter>
        <MobileWrapper>
          <Box sx={{ marginBottom: '16px' }}>
            <Logo />
          </Box>
          <DropDown color="dark" title="Quick link" links={quickLinks} />
          <DropDown color="dark" title="Service" links={serviceLinks} />
          <DropDown color="dark" title="Contact info" links={contactsLinks} />
          <Box
            sx={{
              padding: '30px 0',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Title variant="h6" color="white">
              Follow us
            </Title>
            <Box sx={{ display: 'flex', gap: '12px' }}>
              <Socials />
            </Box>
          </Box>
        </MobileWrapper>
        <FooterPrivacy>
          <Wrapper $direction="row" $content="space-between">
            <SubTitle size="s">Ensome© 2022 All Rights Reserved</SubTitle>
            <Wrapper $gap="95px">
              <SubTitle size="s">Privacy policy</SubTitle>
              <SubTitle size="s">Terms of us</SubTitle>
            </Wrapper>
          </Wrapper>
        </FooterPrivacy>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
