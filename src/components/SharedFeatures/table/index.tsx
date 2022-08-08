import React from "react";
import styled from "styled-components";

interface TableProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const TableContainer = styled.table`
  & > thead > tr:hover,
  & > tbody > tr:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const TableComponent: React.FC<TableProps> = (props) => {
  const { style, children } = props;

  return (
    <TableContainer style={style}>
      {children}
    </TableContainer>
  );
};

export default TableComponent;
