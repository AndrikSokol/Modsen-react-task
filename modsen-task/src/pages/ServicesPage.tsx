import Box from '@/components/UI/box';
import BreadCrumbs from '@/components/UI/breadcrumbs';
import Container from '@/components/UI/container';
import SubTitle from '@/components/UI/subTitle';
import Title from '@/components/UI/title';
import Contacts from '@/components/contacts';
import styled from 'styled-components';
import BrainIcon from '@/assets/icons/card/3d/icon_brain_3d.svg?react';
import TrendingIcon from '@/assets/icons/card/3d/icon_trending_lines_3d.svg?react';
import KeyIcon from '@/assets/icons/card/3d/icon_key_3d.svg?react';
import AreaIcon from '@/assets/icons/card/3d/icon_data_area_3d.svg?react';
import { CARD_INFO } from '@/constants/solutionsCard.info';
import Card from '@/components/UI/cards';
import CompanyOverview from '@/components/company-overview';
import ClientsLogos from '@/components/clients-logos';
const Section = styled.section``;

const Wrapper = styled.div`
  padding: 40px 0 125px 0;
`;

const Wrapper2 = styled.div`
  padding: 120px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

const ServicesPage = () => {
  const icons3d = [<BrainIcon />, <TrendingIcon />, <KeyIcon />, <AreaIcon />];
  return (
    <>
      <Container>
        <Box sx={{ padding: '15px 0' }}>
          <BreadCrumbs />
        </Box>
      </Container>

      <Section>
        <Container>
          <Wrapper>
            <Box sx={{ textAlign: 'center' }}>
              <Title variant="h6" color="blue">
                Solutions
              </Title>
              <Box sx={{ padding: '15px' }}>
                <Title variant="h1">Data analytics solutions</Title>
              </Box>

              <SubTitle size="lg">
                Getting ready for your success, we provide truly outstanding IT
                solutions.
              </SubTitle>
            </Box>
          </Wrapper>
        </Container>
      </Section>
      <Section>
        <Container>
          <Grid>
            {CARD_INFO.map((card, index) => (
              <Card
                key={index}
                svgIcon={icons3d[index]}
                variant={3}
                title={card.title}
                description={card.description}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Wrapper2>
            <CompanyOverview />
          </Wrapper2>
        </Container>
      </Section>
      <Section>
        <Container>
          <ClientsLogos />
        </Container>
      </Section>
      <Contacts />
    </>
  );
};

export default ServicesPage;
