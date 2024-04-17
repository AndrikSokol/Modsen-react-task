import styled from 'styled-components';
import Container from '../UI/container';
import Box from '../UI/box';
import Title from '../UI/title';
import SubTitle from '../UI/subTitle';
import Banner from '../UI/banner';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
      padding-left: 0px;
    }
  }
`;

const CompanyWrapper = styled.div`
  padding-top: 50px;

  @media (max-width: 767px) {
    padding-top: 20px;
  }
`;
const CompanyOverview = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Title variant="h3">
          We provide services that guarantee your success
        </Title>
      </Box>

      <CompanyWrapper>
        <Grid>
          <Banner variant={4} />
          <SubTitle size="lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam
            finibus nec.
          </SubTitle>
        </Grid>
      </CompanyWrapper>
    </>
  );
};

export default CompanyOverview;
