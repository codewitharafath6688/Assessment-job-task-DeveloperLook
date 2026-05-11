import { FiArrowUpRight } from 'react-icons/fi';
import styled from 'styled-components';

const Button1 = ({content}) => {
  return (
    <StyledWrapper>
      <button className="btn font-bold text-black whitespace-nowrap">
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
    width: 220px;
    height: 52px;
    border-radius: 50px;
    Background: #ffff;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .btn:hover{
    border-radius:20px;
    duration:2
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

export default Button1;