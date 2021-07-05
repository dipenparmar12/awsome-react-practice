import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Input = styled.input`
  padding: 7px 10px;
  min-width: 300px;
  font-size: 22px;
  margin-bottom: 5px;
`

export const Button = styled.button`
  background-color: ${({ bg = 'initial' }) => bg};
  padding: 10px 35px;
  margin-top: 10px;
  box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 20px;
`

export const ChatRoomStyled = styled.div`
  background-color: lightblue;
  /* min-width: 600px; */
  width: auto;
  display: flex;
  flex-flow: column;
  border-radius: 10px;
  overflow: hidden;

  .history {
    padding: 16px 20px;
    height: 170px;
    font-weight: normal;
    overflow-y: scroll;
    font-size: 17px;

    .me {
      text-align: right;
    }
  }

  .control {
    display: flex;

    input {
      flex: 1;
      padding: 5px 10px;
      font-size: 20px;
      border-radius: 5px 0 0 10px;

      &:focus {
      }
    }

    button {
      padding: 10px 30px;
      border-radius: 5px;
      border: none;

      &:active {
        background-color: lightgray;
      }
    }
  }
`
