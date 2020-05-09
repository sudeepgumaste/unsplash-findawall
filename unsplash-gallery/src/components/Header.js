import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setImages, setKeyword, setPage } from '../actions/imagesActions'

import { ReactComponent as SearchIcon } from "../assets/search-solid.svg";

const HeaderContainer = styled.div`
  height: 20rem;
  background: #06080a;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0 1rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 1.5rem;
  }

  .header__search-container {
    width: min(35rem, 80%);
    background-color: white;
    margin-top: 1.5rem;
    display: flex;
    border-radius: 0.5rem;
    overflow: hidden;
    padding: 0.2rem 0rem;

    input {
      padding: 0.5rem 1rem;
      border: none;

      flex: 1;
    }

    button{
      border: none;
      background: none;
      padding: 0.5rem;
      padding-right: 1rem;
      svg{
        width: 1.5rem;
        height: 1.5rem;
        color: #111;
        cursor: pointer;
      }
    }
  }
`;

const Header = ({ keyword, dispatch }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(keyword);
  }, [keyword]);

  const onSubmit = (e) => {
    e.preventDefault();
    window.scrollTop = 0;
    setTimeout(() => {
      window.location.href = "/#top";
      dispatch(setKeyword(search));
      dispatch(setImages({ page: 1, imageCount: 15, keyword: search }));
      dispatch(setPage(2));
    }, 200);
  };

  return (
    <HeaderContainer>
      <h1>FindaWall</h1>
      <p>
        Search and download high resolution images conrtributed by various
        creators all around the world
      </p>
      <form className="header__search-container" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search for..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button><SearchIcon/></button>
      </form>
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  keyword: state.imagesReducer.keyword,
});

export default connect(mapStateToProps)(Header);
