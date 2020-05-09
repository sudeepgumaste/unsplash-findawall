import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { ReactComponent as SearchIcon } from "../assets/search-solid.svg";

import { setKeyword, setImages, setPage } from "../actions/imagesActions";

const Form = styled.form`
  display: flex;
  margin-left: auto;
  background: #444;
  height: 2.5rem;
  padding-left: 0.5rem;
  border-radius: 1.25rem;
  overflow: hidden;
  width: 10rem;
  transition: width ease 0.2s;
  /* border: 1px solid white; */

  &.focus {
    width: 30rem;
  }

  input {
    flex: 1;
    background: none;
    border: none;
    color: white;
    padding: 0 0.5rem;
    font-size: 1rem;
  }

  button {
    border-radius: 0.5rem;
    border: none;
    background: none;
    padding: 0 1rem;
    font-weight: bold;
    font-size: 0.9rem;
    color: white;
    cursor: pointer;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);

    svg {
      height: 1.5rem;
    }
  }
`;

const Search = (props) => {
  const [search, setSearch] = useState("");
  const formRef = useRef();

  useEffect(() => {
    setTimeout(()=>setSearch(_=>props.keyword), 200)
  }, [props.keyword]);

  onsubmit = (e) => {
    e.preventDefault();
    window.scrollTop = 0;
    setTimeout(() => {
      window.location.href = "/#top";
      props.dispatch(setKeyword(search));
      props.dispatch(setImages({ page: 1, imageCount: 15, keyword: search }));
      props.dispatch(setPage(2));
    }, 200);
  };

  return (
    <Form ref={formRef}>
      <input
        onFocus={() => {
          formRef.current.classList.add("focus");
        }}
        onBlur={() => {
          formRef.current.classList.remove("focus");
        }}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for.."
      />
      <button>
        <SearchIcon />
      </button>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  keyword: state.imagesReducer.keyword,
});

export default connect(mapStateToProps)(Search);
