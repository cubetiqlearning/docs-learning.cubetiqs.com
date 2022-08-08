import React from "react";

interface CountYearComponentProps {
  startYear: number;
}

const CountYearComponent: React.FC<CountYearComponentProps> = (props) => {
  const { startYear } = props;

  return <>{new Date().getFullYear() - startYear}</>;
};

export default CountYearComponent;
