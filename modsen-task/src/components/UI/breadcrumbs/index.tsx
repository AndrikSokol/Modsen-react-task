import { ROUTES } from '@/router/routes';
import { FC, ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../box';

type BreadCrumbsProps = {
  children?: ReactNode;
};

const BreadCrumbWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledLink = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--colors-grey);
  cursor: pointer;
`;

const Span = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--colors-grey);
`;

const BreadCrumbs: FC<BreadCrumbsProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathnameParts = location.pathname.split('/');
  const firstPathnamePart = pathnameParts[1];
  const capitalizedFirstLetter =
    firstPathnamePart.charAt(0).toUpperCase() + firstPathnamePart.slice(1);
  return (
    <BreadCrumbWrapper>
      <StyledLink onClick={() => navigate('/home')}>Home</StyledLink>{' '}
      <Span>|</Span>
      <Box sx={{ fontSize: '14px', fontWeight: '600' }}>
        {capitalizedFirstLetter}
      </Box>
    </BreadCrumbWrapper>
  );
};

export default BreadCrumbs;
