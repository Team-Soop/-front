import { css } from "@emotion/react";

export const rigthButton = css`
    position: fixed;
    right: 150px;
    bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      border: 2px solid #ffffff73;
      border-radius: 50%;
      /* background-color: var(--secondary-button-background-floating); */
      background-color: white;
      width: 65px;
      height: 65px;
      cursor: pointer;
      
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    

    button:nth-child(1) {
      margin-right: 7px;
      font-size: 25px;
    }

    button:nth-child(2) {
      font-size: 25px;
    }

    button:hover {
      background-color: #fafafa;
      /* -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); */
    }


    /* button {
        box-sizing: border-box;
        border-radius: 50%;
        border: none;
        margin: 10px;
        padding: 10px;
        width: 50px;
        height: 50px;
        background-color: #f3c1c1;
        cursor: pointer;
    } */
`

export const feedModal = css`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #00000088;
`

export const modalCancel = css`
  position: absolute;
  border: none;
  top: 30px;
  right: 30px;
  font-size: 50px;
  color: #CBF1F5;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #B3E7EC;
  }
  &:active {
    color: #23d1e0;
  }
`;