import styled from "styled-components"

const LoginStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 50px auto;
    background-color: rgba(241, 241, 241, 0.9);
    font-family: "Poppins", sans-serif;
    font-weight: 700;
  }

  h1 {
    text-align: center;
    color: #1f59bb;
    padding-top: 20px;
  }

  .wrapper {
    width: 550px;
    display: block;
    background-color: #fff;
    position: absolute;
    left: 35%;
    top: 17%;
    margin-left: -55px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 60px;
  }

  label {
    color: #1f59bb;
  }

  form {
    max-width: 100%;
    padding: 40px;
  }

  form input {
    width: 100%;
    padding: 13px 50px;
    border-radius: 5px;
    border: 1px solid #1f59bb;
    margin-bottom: 20px;
    margin-top: 1%;
    background: rgba(31, 89, 187, 0.05);
  }

  form input:focus {
    outline: none;
  }

  .form-con {
    padding: 10px 0 40px 0;
    margin-top: -1.5%;
  }

  .form-con input {
    width: 5%;
    float: left;
    margin-top: 1.5%;
  }

  .form-con a {
    float: right;
    text-decoration: none;
    color: #1f59bb;
  }

  .form-text {
    text-align: center;
    margin-top: -30px;
    padding-bottom: 40px;
    font-weight: 400;
    color: #1f59bb;
  }

  .form-text a {
    text-decoration: none;
    color: #000;
  }

  .btn {
    background: #1f59bb;
    color: #fff;
  }

  @media screen and (max-width: 851px) {
    .wrapper {
      width: 340px;
      position: absolute;
      left: 19%;
    }

    .form-con a {
      float: left;
      text-decoration: none;
    }
  }
`
export default LoginStyled
