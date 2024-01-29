import styled from "styled-components";

export const CarouselHover = styled.div`
  display: flex;
  -webkit-filter: brightness(100%);


  &:hover {
    -webkit-filter: brightness(12%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }

  &:not(:hover) {
    -webkit-filter: brightness(100%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }
`;

