import styled from "styled-components";

export const HomepagePattern = styled.div`
  @import url("https://rsms.me/inter/inter.css");
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background-color: var(--brand-color);

  .span,
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 49%;
    min-width: 380px;
    height: 100%;
    margin-top: 11.9vh;
  }

  .span {
    display: flex;
    justify-content: start;
    text-align: left;
  }

  .span p,
  .span span,
  .span img,
  .span button {
    padding-left: 250px;
  }

  .span p {
    font-size: 1.8rem;
    color: var(--mid-color);
    font-family: "inter", sans-serif;
  }

  .span span {
    font-size: 3.9rem;
    color: var(--light-color);
    font-family: "inter", sans-serif;
  }

  .span img {
    width: 375px;
  }

  .hr {
    width: 100%;
    height: 1px;
    background-color: #00000000;
  }

  .image img {
    width: 60%;
    height: 100%;
  }

  @media (max-width: 1200px) {
    .span p,
    .span span,
    .span img,
    .span button {
      padding-left: 150px;
    }
  }

  @media (max-width: 1000px) {
    .span p,
    .span span,
    .span img,
    .span button {
      padding-left: 100px;
    }
  }

  @media (max-width: 900px) {
    .span p,
    .span span,
    .span img,
    .span button {
      padding-left: 50px;
    }
  }

  @media (max-width: 768px) {
    .span {
      display: flex;
      justify-content: center;
    }

    .span p {
      font-size: 1.3rem;
      color: var(--light-color);
      font-family: "inter", sans-serif;
      padding-left: 0px;
    }

    .span span {
      font-size: 2.5rem;
      color: var(--light-color);
      font-family: "inter", sans-serif;
      padding-left: 0px;
    }

    .span img {
      width: 200px;
      padding-right: 82px;
    }

    .image img {
      width: 370px;
    }
  }
`;
