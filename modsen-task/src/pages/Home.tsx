import FeedBack from '@/components/subscribe';
import img11 from '@/assets/images/img_11.png';
import img10 from '@/assets/images/img_10.png';
import Button from '@/components/UI/button';
import Title from '@/components/UI/title';
import SubTitle from '@/components/UI/subTitle';
import Container from '@/components/UI/container';
import styled from 'styled-components';
import Box from '@/components/UI/box';
import Card from '@/components/UI/cards';
import { CARD_INFO } from '@/constants/solutionsCard.info';

import BrainIcon from '@/assets/icons/card/icon_brain.svg?react';
import DataIcon from '@/assets/icons/card/icon_data.svg?react';
import KeyIcon from '@/assets/icons/card/icon_key.svg?react';
import TrendingIcon from '@/assets/icons/card/icon_arrow_trending.svg?react';
import { REVIEW_CARDS } from '@/constants/cards/reviewCard';
import { ReviewCard } from '@/components/UI/cards/review-card/ReviewCard';

import person1 from '@/assets/images/person1.jpg';
import person2 from '@/assets/images/person2.jpg';
import person3 from '@/assets/images/person3.jpg';
import { BLOG_CARDS } from '@/constants/cards/blogCard';
import { BlogCard } from '@/components/UI/cards/blog-card/BlogCard';
import img7 from '@/assets/images/img_7.jpg';
import img8 from '@/assets/images/img_8.jpg';
import img9 from '@/assets/images/img_9.jpg';
import Controls from '@/components/UI/controls';
import { PriceCard } from '@/components/UI/cards/price-card.tsx/PriceCard';
import { PRICE_CARD } from '@/constants/cards/priceCard';
import Subscribe from '@/components/subscribe';
import { useNavigate } from 'react-router-dom';
import Contacts from '@/components/contacts';
import CompanyOverview from '@/components/company-overview';
import ClientsLogos from '@/components/clients-logos';

import { Navigation } from 'swiper/modules';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';

const HeroWrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 90px;

  @media (max-width: 991px) {
    padding: 20px 0 46px 0;
  }
`;

const CommonWrapper = styled.div`
  padding: 120px 0;

  @media (max-width: 991px) {
    padding: 50px 0;
  }
`;

const FeatureWrapper = styled.div`
  align-self: center;

  @media (max-width: 767px) {
    padding-bottom: 50px;
  }
`;

const CompanyWrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 50px;

  @media (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 20px;
  }
`;

const Grid = styled.div<{ $gap?: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.$gap || '30px'};

  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
      padding-left: 0px;
    }
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;

  @media (max-width: 767px) {
    height: 230px;
  }
`;

const GridCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  & > div:nth-child(2n) {
    position: relative;
    top: 56px;
  }
`;

const Section2 = styled.section`
  background-color: #f1f6fa;
`;

const SwiperWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const Section = styled.section``;

const TitleWrapper = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

const Span = styled.span`
  color: var(--colors-primary);
`;

const ImgFeatures = styled.img`
  object-fit: cover;
  width: 100%;
  @media (max-width: 360px) {
    height: 180px;
  }
`;

const MobileWrapper = styled.div`
  padding-top: 40px;
  @media (min-width: 767px) {
    display: none;
  }
`;

const SubTitleWrapper = styled.div`
  padding: 30px 0;

  @media (max-width: 767px) {
    padding: 0 0 20px 0;
  }
`;

const ClientslogoWrapper = styled.div`
  padding-bottom: 80px;

  @media (max-width: 767px) {
    padding: 20px 0 0 0;
  }
`;

export const Home = () => {
  const navigate = useNavigate();
  const persons = [person1, person2, person3];
  const [swiperBlog, setSwiperBlog] = useState();
  const [swiperReview, setSwiperReview] = useState();
  const swiperBlogRef = useRef<SwiperRef>(null);
  const swiperReviewRef = useRef<SwiperRef>(null);
  const cardIcons = [
    <BrainIcon key="brain" />,
    <DataIcon key="data" />,
    <KeyIcon key="key" />,
    <TrendingIcon key="trending" />,
  ];
  const blogs = [img7, img8, img9];

  return (
    <>
      <Section>
        <Container>
          <HeroWrapper>
            <Grid>
              <Title variant="h1">
                Find true power in your data with <Span>Ensome</Span>
              </Title>

              <Box sx={{ position: 'relative', paddingLeft: '220px' }}>
                <SubTitle size="m">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque lauda, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi.
                </SubTitle>
                <Box sx={{ position: 'absolute', bottom: '-170px' }}>
                  <Button
                    variant="rounded"
                    onClick={() => {
                      navigate('/services');
                    }}
                  >
                    Learn more
                  </Button>
                </Box>
              </Box>
            </Grid>
          </HeroWrapper>
        </Container>
        <Box sx={{ width: '100wh' }}>
          <Img src={img11} alt="" />
        </Box>
      </Section>

      <Section>
        <Container>
          <CommonWrapper>
            <Grid>
              <Title variant="h2">
                The<Span> newest </Span>business analytics platform
              </Title>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px',
                }}
              >
                <SubTitle size="lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis etquasi architecto
                  beatae vitae dicta sunt explicabo.
                </SubTitle>
                <Button>Discover more</Button>
              </Box>
            </Grid>
          </CommonWrapper>
        </Container>
        <Box sx={{ backgroundColor: 'var(--colors-light)' }}>
          <Container variant="right">
            <Grid $gap="46px">
              <MobileWrapper>
                <Title variant="h3">Radically new solutions for data</Title>
              </MobileWrapper>

              <ImgFeatures src={img10} alt="" />

              <FeatureWrapper>
                <TitleWrapper>
                  <Title variant="h3">Radically new solutions for data</Title>
                </TitleWrapper>

                <SubTitleWrapper>
                  <SubTitle size="lg">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </SubTitle>
                </SubTitleWrapper>
                <Button>Learn more</Button>
              </FeatureWrapper>
            </Grid>
          </Container>
        </Box>
      </Section>

      <Section>
        <Container>
          <CompanyWrapper>
            <CompanyOverview />
          </CompanyWrapper>
        </Container>
      </Section>
      <Section>
        <Container>
          <ClientslogoWrapper>
            <ClientsLogos />
          </ClientslogoWrapper>
        </Container>
      </Section>

      <Section2>
        <Container>
          <CommonWrapper>
            <Grid>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Title variant="h3">The benefits of Ensome </Title>
                <Box sx={{ marginTop: '30px' }}>
                  <SubTitle size="lg">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </SubTitle>
                </Box>
              </Box>

              <GridCard>
                {CARD_INFO.map((card) => {
                  return (
                    <Card
                      variant={4}
                      key={card.id}
                      svgIcon={cardIcons[card.id]}
                      title={card.title}
                      description={card.description}
                    ></Card>
                  );
                })}
              </GridCard>
            </Grid>
          </CommonWrapper>
        </Container>
      </Section2>
      <Section>
        <Container>
          <CommonWrapper>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '50px',
              }}
            >
              <Title variant="h3">Testimonials </Title>
              {swiperReviewRef.current && (
                <Controls swiperRef={swiperReviewRef} />
              )}
            </Box>

            <Swiper
              onSwiper={setSwiperReview}
              ref={swiperReviewRef}
              modules={[Navigation]}
              spaceBetween={30}
              pagination={{ clickable: true }}
              breakpoints={{
                // when window width is <= 767px
                767: {
                  slidesPerView: 1,
                },
                // when window width is > 767px
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {REVIEW_CARDS.map((card, index) => {
                return (
                  <SwiperSlide>
                    <ReviewCard
                      variant={1}
                      icon={persons[index]}
                      author={card.author}
                      job={card.job}
                      description={card.description}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </CommonWrapper>
        </Container>
      </Section>
      <Section>
        <Container>
          <Box
            sx={{
              paddingBottom: '50px',
            }}
          >
            <Title variant="h3">Our pricing</Title>
          </Box>
          <SwiperWrapper>
            {PRICE_CARD.map((card, index) => (
              <PriceCard
                key={index}
                title={card.title}
                price={card.price}
                active={index === 2 ? true : false}
                options={card.options}
              />
            ))}
          </SwiperWrapper>
        </Container>
      </Section>

      <Section>
        <Container>
          <CommonWrapper>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '50px',
              }}
            >
              <Title variant="h3">Our blog</Title>
              {swiperBlogRef.current && <Controls swiperRef={swiperBlogRef} />}
            </Box>

            <Swiper
              onSwiper={setSwiperBlog}
              ref={swiperBlogRef}
              modules={[Navigation]}
              spaceBetween={30}
              pagination={{ clickable: true }}
              breakpoints={{
                // when window width is <= 767px
                767: {
                  slidesPerView: 1,
                },
                // when window width is > 767px
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {BLOG_CARDS.map((card, index) => (
                <SwiperSlide key={`blog-${index}`}>
                  <BlogCard
                    size="s"
                    icon={blogs[index]}
                    date={card.date}
                    title={card.title}
                    description={card.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </CommonWrapper>
        </Container>
      </Section>

      <Contacts />
      <Subscribe />
    </>
  );
};
