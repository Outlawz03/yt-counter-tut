import styled from 'styled-components';

const handleTheme = btnTheme => {
  switch(btnTheme) {
  case 'positive':
    return ({
      backgroundColor: '#28a745',
      hoverBackgroundColor: '#218838',
    });
  case 'negative':
    return ({
      backgroundColor: '#dc3545',
      hoverBackgroundColor: '#c82333',
    });
  default:
    return ({
      backgroundColor: '#007bff',
      hoverBackgroundColor: '#0069d9',
    });
  }
};

export const StyledButton = styled.button`
  cursor: pointer;
  user-select: none;
  display: inline-block;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-radius: .25rem;
  color: #ffffff;
  background-color: ${({ btnTheme }) => handleTheme(btnTheme).backgroundColor};
  border: 1px solid transparent;
  text-align: center;
  vertical-align: middle;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;  
  width: 60px;

  &:hover {
    background-color: ${({ btnTheme }) => handleTheme(btnTheme).hoverBackgroundColor};
  }

  &:active {
    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
  }
`;

export const ButtonGroup = styled.div`
  margin-top: .25rem;
  margin-bottom: .25rem;
  position: relative;
  display: inline-flex;
  vertical-align: middle;

  button {
    position: relative;
    flex: 1 1 auto;

    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: 1px solid #bdbdbd;
    }

    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;