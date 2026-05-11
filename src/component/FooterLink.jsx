import styled from "styled-components";

const FooterLink = ({ content }) => {
  return (
    <StyledWrapper>
      <button className="btn  whitespace-nowrap hover:font-[500] hover:text-[#b2f6e3]">
        <span className="btn-text-one">{content}</span>

        <span className="btn-text-two">{content}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    width: 175px;
    height: 30px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .btn span {
    position: absolute;
    width: 100%;
    left: 0;
    display: flex;
    font-size: 18;
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

export default FooterLink;
