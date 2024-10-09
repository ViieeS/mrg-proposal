import styled from 'styled-components';

// Define props type for the styled component
interface FadeInBlockProps {
  isVisible: boolean;
}

// Styled block with transition for smooth appearance
const FadeInBlock = styled.div<FadeInBlockProps>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? 'translateY(0)' : 'translateY(-20px)'};
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

export default FadeInBlock;
