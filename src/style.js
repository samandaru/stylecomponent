import styled from 'styled-components'


export const Wrapper = styled.div`
display:flex;
width:800px;
height: 200px;
box-shadow: 0 0 12px blue;
margin: 100px;
`;



export const Button = styled.button`
width:${(props)=>props.type=== 'large' ? '150px' : '100px'};
height: 40px;
box-shadow: 0 0 8px blue;
margin: 5px;
`;


