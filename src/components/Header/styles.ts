import styled from "styled-components";

export const HeaderNav = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: "Roboto", sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .header {
    border-bottom: 1px solid #e2e8f0;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .hamburger {
    display: none;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: var(--brand-color);
  }

  .nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-item {
    margin-left: 5rem;
  }

  .nav-link {
    font-size: 1.6rem;
    font-weight: 400;
    color: #475569;
  }

  .nav-link:hover {
    color: #482ff7;
  }

  .nav-logo {
    font-size: 2.1rem;
    font-weight: bold;
    color: #482ff7;
  }

  @media only screen and (max-width: 768px) {
    .nav-menu {
      position: fixed;
      left: -100%;
      top: 5rem;
      flex-direction: column;
      background-color: #fff;
      width: 100%;
      border-radius: 10px;
      text-align: center;
      transition: 0.3s;
      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    }

    .nav-menu.active {
      left: 0;
    }

    .nav-item {
      margin: 2.5rem 0;
    }

    .hamburger {
      display: block;
      cursor: pointer;
    }
  }
`;
