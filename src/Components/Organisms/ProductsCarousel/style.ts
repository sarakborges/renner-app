import styled from 'styled-components'

export const ProductsCarousel = styled.div`
  .carousel {
    overflow: hidden;

    .carousel__slider-tray {
      display: flex;
      gap: 24px;

      .carousel__inner-slide {
        img {
          width: 100%;
        }
      }
    }
  }
`
