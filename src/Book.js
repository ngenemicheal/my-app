import React from "react";

const Book = ({ img, title, author }) => {
  // const {img, title, author} = props;
    const clickHandler = () => {
        alert("Reference Word");
    };

    return (
    <article
        className="book" onMouseOver={() => {
            console.log(author);
        }}>
        <img src={img} alt="This is an Pic" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>Reference Example</button>
        <br />
        <button type="button" onClick={() => alert("Inline Example")}>Inline Example</button>
    </article>
    );
};

export default Book;
