import styled from "styled-components";

export const Textarea = styled.textarea`
    outline: none;
    resize: none;
    border: 2px solid #30363D;
    border-radius: 6px;
    background-color: #0D1117;
    color: #E5EDF5;
    width: 65vw;
    height: ${({ rows, theme }) => +theme.listSize * rows + 4}px;
    padding: 15px;
    font-size: 14px;
    min-height: 160px;
    max-height: 600px;
`;