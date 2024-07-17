import React from 'react';
import styled from 'styled-components';
import HeroImg from '../../images/HeroImage.jpg'
const TestimonialContainer = styled.div`
  background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
  padding: 80px 0;
`;

const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Testimonial = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  width: 100%;
  max-width: 600px;
  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TestimonialImage = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  width: 80px;
  height: 80px;
  @media (max-width: 960px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TestimonialName = styled.h3`
  font-size: 1.2em;
  color: black;
  margin-bottom: 10px;
`;

const TestimonialText = styled.p`
  font-size: 1em;
  color: black;

`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;
function TestimonialPage() {
  return (
    <container id="testinomial">
    <TestimonialContainer>
      <TestimonialWrapper>
      <Title>Testimonial</Title>
        <Testimonial>
          <TestimonialImage src={HeroImg} alt="Testimonial 1" />
          <TestimonialContent>
            <TestimonialName>Muhammad Umer</TestimonialName>
            <TestimonialText>"He has been a game-changer for my business. His expertise and innovative approach have made complex tasks easy to handle, significantly streamlining my workflow"</TestimonialText>
          </TestimonialContent>
        </Testimonial>
        <Testimonial>
          <TestimonialImage src={HeroImg}  alt="Testimonial 2" />
          <TestimonialContent>
            <TestimonialName>Muhammad Umer</TestimonialName>
            <TestimonialText>"He has been a game-changer for my business. His expertise and innovative approach have made complex tasks easy to handle, significantly streamlining my workflow"</TestimonialText>
          </TestimonialContent>
        </Testimonial>
        <Testimonial>
          <TestimonialImage src={HeroImg}  alt="Testimonial 3" />
          <TestimonialContent>
            <TestimonialName>Muhammad Umer</TestimonialName>
            <TestimonialText>"He has been a game-changer for my business. His expertise and innovative approach have made complex tasks easy to handle, significantly streamlining my workflow"</TestimonialText>
          </TestimonialContent>
        </Testimonial>
      </TestimonialWrapper>
    </TestimonialContainer>
    </container>
  );
  
}

export default TestimonialPage;
