import styled from 'styled-components';

const Wrapper = styled.div`
  width: 450px;
  margin: 25px auto 0;
  padding: 15px;
  background-color: #fbfcfc;
  border-radius: 3px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: DarkCyan;
`;

const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 250px;
`;

const Label = styled.label`
  color: Teal;
  font-size: 1em;
`;

const Input = styled.input`
  width: 220px;
  padding: 0.5em;
  margin: 0.5em;
  color: Teal;
  background: AliceBlue;
  border: none;
  border-radius: 3px;

  &::placeholder {
    color: Teal;
    opacity: 0.3;
  }
`;

const Button = styled.button`
  max-width: 150px;
  background: DarkCyan;
  color: white;

  font-size: 1em;
  margin: 1em auto;
  padding: 0.25em 1em;
  border: 2px solid DarkCyan;
  border-radius: 3px;
  cursor: pointer;

  &:hover,
  &:focus {
    background: white;
    color: DarkCyan;
  }
`;

const ButtonItems = styled(Button)`
  margin: 0;
`;

const Text = styled.p`
  color: Teal;
  font-size: 1em;
`;

const TextFilter = styled(Text)`
  margin-left: 30px;
`;

const InputFilter = styled(Input)`
  margin-left: 25px;
`;

const Table = styled.table`
  width: 420px;
  margin-top: 10px;
  padding: 15px;
  // border-radius: 3px;
`;

export {
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  Button,
  ButtonItems,
  Text,
  TextFilter,
  InputFilter,
  Table,
};
