import Box from '@/components/UI/box';
import BreadCrumbs from '@/components/UI/breadcrumbs';
import Container from '@/components/UI/container';
import SubTitle from '@/components/UI/subTitle';
import Title from '@/components/UI/title';
import React from 'react';
import styled from 'styled-components';
import img10 from '@/assets/images/img_about_10.jpg';
import img11 from '@/assets/images/img_about_11.jpg';
import Banner from '@/components/UI/banner';
import InputForm from '@/components/UI/inputForm';
import { Toaster, toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Section = styled.section`
  padding: 100px 0 160px 0;
  background-color: var(--colors-light);
`;

const Section2 = styled.section`
  padding: 120px 0;
`;

const Flex = styled.div`
  display: flex;
  gap: 30px;
`;

const Img = styled.img`
  object-fit: cover;
  max-height: 425px;
  border-radius: 6px;
`;

const TitleWrapper = styled.div`
  padding-bottom: 30px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

const CompanyWrapper = styled.div`
  padding: 100px 0;
  text-align: center;
`;

const BannerWrapper = styled.div`
  padding: 40px 0;
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContactSection = styled.section`
  padding: 120px 0;
  background-color: var(--colors-light);
`;

const SubTitleWrapper = styled.div`
  padding: 24px 0 80px 0;
`;
const AboutPage = () => {
  const sendEmail = (data) => {
    console.log(data);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          theme: data.theme,
          message: data.message,
          to_name: 'andrusha',
        },
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success('Message successfully sent!');
        },
        (error) => {
          toast.error('Failed...');
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <Section>
        <Toaster position="bottom-right" />
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              margin: '0 auto',
            }}
          >
            <Title variant="h1">About Us</Title>
            <BreadCrumbs />
          </Box>
        </Container>
      </Section>
      <Section2>
        <Container>
          <FlexWrapper>
            <Flex>
              <Box sx={{ maxWidth: '435px' }}>
                <TitleWrapper>
                  <Title variant="h1">Who we are</Title>
                </TitleWrapper>
                <SubTitle size="lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Donec tincidunt tempor
                  quam, non mollis quam finibus nec. Quisque finibus consequat
                  felis vel pretium. Aliquam gravida nisi vel convallis
                  ultricies. Integer ante sapien, consequat et dolor vel, cursus
                  lacinia lectus.
                </SubTitle>
              </Box>
              <Img src={img10}></Img>
            </Flex>

            <Flex>
              <Img src={img10}></Img>
              <Box>
                <TitleWrapper>
                  <Title variant="h1">Our mission</Title>
                </TitleWrapper>

                <SubTitle size="lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Donec tincidunt tempor
                  quam, non mollis quam finibus nec. Quisque finibus consequat
                  felis vel pretium.
                </SubTitle>
              </Box>
            </Flex>
          </FlexWrapper>
        </Container>
      </Section2>

      <Section>
        <Container>
          <CompanyWrapper>
            <Title variant="h1">Ensome in numbers</Title>
            <BannerWrapper>
              <Banner variant={3} />
            </BannerWrapper>
          </CompanyWrapper>
        </Container>
      </Section>

      <ContactSection>
        <Container>
          <ContactWrapper>
            <Box sx={{ maxWidth: '540px' }}>
              <Title variant="h1">
                Left questions? Contacts us now for a free consultation and free
                trial!
              </Title>
              <SubTitleWrapper>
                <SubTitle size="m">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
                </SubTitle>
              </SubTitleWrapper>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
                >
                  <SubTitle size="m">Email address</SubTitle>
                  <SubTitle size="m" color="black">
                    ensome@info.co.us
                  </SubTitle>
                </Box>
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
                >
                  <SubTitle size="m">Phone number</SubTitle>
                  <SubTitle size="m" color="black">
                    +1601-201-5580
                  </SubTitle>
                </Box>
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
                >
                  <SubTitle size="m">Address</SubTitle>
                  <SubTitle size="m" color="black">
                    1642 Washington Avenue, Jackson, MS, Mississippi, 39201
                  </SubTitle>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                padding: '50px',
                width: '445px',
                backgroundColor: 'var(--colors-white)',
                boxShadow: 'var(--shadow-card-3)',
              }}
            >
              <Box sx={{ paddingBottom: '30px' }}>
                <Title variant="h3">Contact Us</Title>
              </Box>

              <InputForm variant={1} onSubmit={sendEmail}></InputForm>
            </Box>
          </ContactWrapper>
        </Container>
      </ContactSection>
    </>
  );
};

export default AboutPage;
