import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  border: ${({theme}) => `2px dashed ${theme.color.black}`};
  padding: 8px;
  border-radius: 4px;
`;

export const EventName = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${({ theme }) => `${theme.color.secondaryText}`};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  svg {
    display: block;
    margin-right: 8px;
    color: ${({ theme }) => `${theme.color.secondaryText}`};
  }
`;

const setBg = ({ eventType, theme }) => {
  switch (eventType) {
    case 'free':
      return theme.color.green;
    case 'paid':
      return theme.color.blue;
    case 'vip':
      return theme.color.red;
    default:
      return theme.color.black;
  }
};

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => `${theme.color.white}`};
  background-color: ${setBg};
`;

