import Box from '@/components/UI/box';
import BreadCrumbs from '@/components/UI/breadcrumbs';
import InputForm from '@/components/UI/inputForm';
import Title from '@/components/UI/title';
import React from 'react';
import styled from 'styled-components';
import IconMail from '@/assets/icons/icon_mail.svg?react';
import IconCall from '@/assets/icons/icon_call.svg?react';
import IconLocation from '@/assets/icons/icon_location.svg?react';
import SubTitle from '@/components/UI/subTitle';
import Container from '@/components/UI/container';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MAP } from '@/constants/map/map';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
const Span = styled.div`
  color: var(--colors-primary);

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const BreadCrumbsWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 75px;

  @media (max-width: 767px) {
    padding-top: 10px;
    padding-bottom: 40px;
  }
`;

const ContactsWrapper = styled.div`
  display: flex;
  gap: 47px;
  margin-bottom: 120px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
    margin: 50px 0;
  }
`;

const MapWrapper = styled.div`
  height: 460px;

  @media (max-width: 767px) {
    height: 290px;
  }
`;

const TitleWrapper = styled.div`
  @media (max-width: 767px) {
    display: flex;
    margin: 0 auto;
    gap: 5px;
    padding-bottom: 40px;
  }
`;

const ContactsPage = () => {
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

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_KEY,
  });

  const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <>
      <Toaster position="bottom-right" />
      <Container>
        <Box>
          <BreadCrumbsWrapper>
            <BreadCrumbs />
          </BreadCrumbsWrapper>
        </Box>
        <Grid>
          <TitleWrapper>
            <Title variant="h1" size="80px">
              How can we <Span>help you?</Span>
            </Title>
          </TitleWrapper>

          <InputForm variant={3} onSubmit={sendEmail} />
        </Grid>
        <ContactsWrapper>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <IconMail />
              <SubTitle size="s">Email</SubTitle>
            </Box>
            <SubTitle size="m">ensome@info.co.us</SubTitle>
          </Box>

          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <IconCall />
              <SubTitle size="s">Phone</SubTitle>
            </Box>
            <SubTitle size="m"> +1 601-201-5580</SubTitle>
          </Box>
          <Box>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <IconLocation />
                <SubTitle size="s"> Address</SubTitle>
              </Box>
              <SubTitle size="m"> 1642 Washington Ave, Jackson, MS</SubTitle>
            </Box>
          </Box>
        </ContactsWrapper>
      </Container>
      {isLoaded && (
        <MapWrapper>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={{
              lat: 32.2926781,
              lng: -90.2150536,
            }}
            zoom={10}
            // onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <></>
          </GoogleMap>
        </MapWrapper>
      )}
    </>
  );
};

export default ContactsPage;
