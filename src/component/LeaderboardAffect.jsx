import styled from 'styled-components';

const LeaderboardAffect = ({content}) => {
  return (
    <StyledWrapper>
      <button className="btn font-bold text-black whitespace-nowrap">
        <span className="btn-text-one">
          {content}
        </span>

        <span className="btn-text-two">
          {content}
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    width: 100%;
    height: 52px;
    margin-bottom: -100px;
    border-radius: 50px;
    Background: #b2f6e3;
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

export default LeaderboardAffect;