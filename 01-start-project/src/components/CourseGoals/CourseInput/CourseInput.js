import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';

const FormControl = styled.div`
margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: inline;
  margin-bottom: 0.5rem;
  color: ${props => (props.invalid ? "red" : "black")}
}

& input {
  margin-top:5px;
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? "red" : "#ccc")};
  background: ${props => (props.invalid ? "#ffd7d7" : "#FFFF")};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;

}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
@media (min-width: 768px){
  width:auto
}

`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);  
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {!isValid ? <p>Insert a goal!</p> : ""}
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
