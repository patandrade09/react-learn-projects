import "../components/Calculator.css";
import {Container, Box} from '@mui/material'
const Calculator = () => {
  return (
    <>
    <Box margin={10}>
        <Container maxWidth={"xs"}>
            <div className="wrapper">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
                <button>,</button>
                <button>AC</button>
                <button>+</button>
                <button>-</button>
                <button>%</button>
                <button>/</button>
                <button>X</button>
                <button>+-</button>
                <button>=</button>
                <button>+/-</button>
            </div>
        </Container>
      </Box>
    </>
  );
};
export default Calculator;
