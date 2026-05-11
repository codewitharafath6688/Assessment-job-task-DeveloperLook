import { FiArrowUpRight } from 'react-icons/fi';
import styled from 'styled-components';

const Button2 = ({content}) => {
  return (
    <StyledWrapper>
      <button className="btn font-bold">
        <span className="btn-text-one">
          {content} <FiArrowUpRight />
        </span>

        <span className="btn-text-two">
          {content} <FiArrowUpRight />
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    width: 140px;
    height: 50px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .btn span {
    position: absolute;
    width: 100%;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;

    transition: top 0.5s;
  }

  .btn-text-one {
    top: 50%;
    transform: translateY(-50%);
  }

  .btn-text-two {
    top: 150%;
    transform: translateY(-50%);
  }

  .btn:hover .btn-text-one {
    top: -100%;
  }

  .btn:hover .btn-text-two {
    top: 50%;
  }
`;

export default Button2;