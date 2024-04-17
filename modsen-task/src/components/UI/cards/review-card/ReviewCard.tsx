import { FC } from 'react';
import styled from 'styled-components';
import SubTitle from '../../subTitle';
import Box from '../../box';

type ReviewCardProps = {
  icon: string;
  variant: 1 | 2;
  author: string;
  job: string;
  description: string;
};

const StyledCard = styled.div`
  background-color: var(--colors-white);
  box-shadow: var(--shadow-card-3);
`;

const CardWrapper = styled.div`
  padding: 20px 35px 35px 35px;
`;

export const ReviewCard: FC<ReviewCardProps> = ({
  icon,
  variant,
  author,
  job,
  description,
}) => {
  if (variant === 1) {
    return (
      <StyledCard>
        <CardWrapper>
          <img
            style={{
              borderRadius: '100%',
              width: '80px',
              height: '80px',
              objectFit: 'cover',
            }}
            src={icon}
            alt=""
          />
          <Box sx={{ padding: '35px 0' }}>
            <SubTitle size="m">{description}</SubTitle>
          </Box>
          <address>
            <strong>{author}</strong>
            <SubTitle size="s">{job}</SubTitle>
          </address>
        </CardWrapper>
      </StyledCard>
    );
  }

  if (variant === 2) {
    return (
      <StyledCard>
        <CardWrapper>
          <Box
            sx={{
              width: '80px',
              height: '80px',
              paddingTop: '25px 0',
              display: 'flex',
              gap: '25px',
              alignItems: 'center',
            }}
          >
            <img style={{ objectFit: 'cover' }} src={icon} alt="" />
            <Box>
              <address>
                <strong>{author}</strong>
                <SubTitle size="s">{job}</SubTitle>
              </address>
            </Box>
          </Box>
          <SubTitle size="m">{description}</SubTitle>
        </CardWrapper>
      </StyledCard>
    );
  }
};
