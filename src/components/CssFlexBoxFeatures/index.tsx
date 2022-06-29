import FlexBoxConfig from "@site/src/config/flexbox";
import React from "react";
import styled from "styled-components";

interface CssFlexBoxProps {
  // for styling
  boxBorderColor?: string;
  contentBorderColor?: string;
  contentBackgroundColor?: string;
  borderRadius?: string;
  boxOneBackgroundColor?: string;
  boxTwoBackgroundColor?: string;
  boxThreeBackgroundColor?: string;
  boxFourBackgroundColor?: string;
  boxFiveBackgroundColor?: string;
  contentWidth?: string;
  contentHeight?: string;
  contentMargin?: string;
  contentPadding?: string;
  contentBorderWidth?: string;
  boxMargin?: string;
  boxWidth?: string;
  boxHeight?: string;
  boxBorderWidth?: string;

  // for className
  contentClassName?: string;

  // for hidden
  showBoxOne?: boolean;
  showBoxTwo?: boolean;
  showBoxThree?: boolean;
  showBoxFour?: boolean;
  showBoxFive?: boolean;
}

const Container = styled.div<CssFlexBoxProps>`
  width: 100%;
  position: relative;

  & > .content {
    width: ${(props) => props.contentWidth || FlexBoxConfig.contentWidth};
    height: ${(props) => props.contentHeight || FlexBoxConfig.contentHeight};
    margin: ${(props) => props.contentMargin || FlexBoxConfig.contentMargin};
    background-color: ${(props) =>
      props.contentBackgroundColor || FlexBoxConfig.contentBackgroundColor};
    border-radius: ${(props) =>
      props.borderRadius || FlexBoxConfig.borderRadius};
    border: ${(props) =>
        props.contentBorderWidth || FlexBoxConfig.contentBorderWidth}
      solid
      ${(props) => props.contentBorderColor || FlexBoxConfig.contentBorderColor};
    padding: ${(props) => props.contentPadding || FlexBoxConfig.contentPadding};
  }

  & > .content > .box {
    margin: ${(props) => props.boxMargin || FlexBoxConfig.boxMargin};
    width: ${(props) => props.boxWidth || FlexBoxConfig.boxWidth};
    height: ${(props) => props.boxHeight || FlexBoxConfig.boxHeight};
    border-radius: ${(props) =>
      props.borderRadius || FlexBoxConfig.borderRadius};
    border: ${(props) => props.boxBorderWidth || FlexBoxConfig.boxBorderWidth}
      solid ${(props) => props.boxBorderColor || FlexBoxConfig.boxBorderColor};
  }

  & > .content > .box__one {
    background-color: ${(props) =>
      props.boxOneBackgroundColor || FlexBoxConfig.boxOneBackgroundColor};
  }

  & > .content > .box__two {
    background-color: ${(props) =>
      props.boxTwoBackgroundColor || FlexBoxConfig.boxTwoBackgroundColor};
  }

  & > .content > .box__three {
    background-color: ${(props) =>
      props.boxThreeBackgroundColor || FlexBoxConfig.boxThreeBackgroundColor};
  }

  & > .content > .box__four {
    background-color: ${(props) =>
      props.boxFourBackgroundColor || FlexBoxConfig.boxFourBackgroundColor};
  }

  & > .content > .box__five {
    background-color: ${(props) =>
      props.boxFiveBackgroundColor || FlexBoxConfig.boxFiveBackgroundColor};
  }

  & > .content__two {
    display: flex;
  }

  & > .content__three {
    display: flex;
    flex-direction: column;
  }

  & > .content__four {
    display: flex;
    flex-direction: row;
  }

  & > .content__five {
    display: flex;
    flex-direction: column-reverse;
  }

  & > .content__six {
    display: flex;
    flex-direction: row-reverse;
  }

  & > .content__seven {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  & > .content__eight {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }

  & > .content__nine {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  & > .content__ten {
    display: flex;
    flex-flow: row wrap;
  }

  & > .content__eleven {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  & > .content__twelve {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  & > .content__thirteen {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
  }

  & > .content__fourteen {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  & > .content__fifteen {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  & > .content__sixteen {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  & > .content__seventeen {
    display: flex;
    flex-flow: row wrap;
    justify-content: stretch;
  }

  & > .content__eighteenth {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
  }

  & > .content__nineteen {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-start;
  }

  & > .content__twenty {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-end;
  }

  & > .content__twenty__one {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: space-between;
  }

  & > .content__twenty__two {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: space-around;
  }

  & > .content__twenty__three {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: stretch;
  }

  & > .content__twenty__four {
    display: flex;
    flex-flow: row wrap;
    place-content: center center;
  }

  & > .content__twenty__five {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  & > .content__twenty__six {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-end;
  }

  & > .content__twenty__seven {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
  }

  & > .content__twenty__eight {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: stretch;
  }

  & > .content__twenty__nine {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  & > .content__thirty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > .content__thirty__one {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  & > .content__thirty__two {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  & > .content__thirty__three {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  & > .content__thirty__three > .box {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
    color: white;
  }

  & > .content__thirty__three > .box__one {
    order: 5;
  }

  & > .content__thirty__three > .box__two {
    order: 4;
  }

  & > .content__thirty__three > .box__three {
    order: 3;
  }

  & > .content__thirty__three > .box__four {
    order: 2;
  }

  & > .content__thirty__three > .box__five {
    order: 1;
  }

  & > .content__thirty__four {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  & > .content__thirty__four > .box__one {
    flex-grow: 1;
  }

  & > .content__thirty__four > .box__four {
    flex-grow: 1;
  }

  & > .content__thirty__four > .box__five {
    flex-grow: 1;
  }

  & > .content__thirty__five {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  & > .content__thirty__five > .box__one {
    flex-shrink: 0;
  }

  & > .content__thirty__six {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  & > .content__thirty__six > .box__two {
    flex-basis: 100px;
  }

  & > .content__thirty__seven {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  & > .content__thirty__seven > .box__three {
    flex: 1 0 500px;
  }

  & > .content__thirty__eight {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }

  & > .content__thirty__eight > .box__one {
    align-self: center;
  }

  & > .content__thirty__eight > .box__two {
    align-self: flex-start;
  }

  & > .content__thirty__eight > .box__three {
    align-self: flex-end;
  }

  & > .content__thirty__eight > .box__four {
    align-self: stretch;
  }

  & > .content__thirty__eight > .box__five {
    align-self: center;
  }
`;

const CssFlexBox: React.FC<CssFlexBoxProps> = (props) => {
  const {
    contentClassName,
    showBoxOne,
    showBoxTwo,
    showBoxThree,
    showBoxFour,
    showBoxFive,
    ...rest
  } = props;

  return (
    <Container {...rest}>
      {!showBoxOne &&
      !showBoxTwo &&
      !showBoxThree &&
      !showBoxFour &&
      !showBoxFive ? (
        <div className={`content ${contentClassName || "content__one"}`}>
          <div className="box box__one">1</div>
          <div className="box box__two">2</div>
          <div className="box box__three">3</div>
          <div className="box box__four">4</div>
          <div className="box box__five">5</div>
        </div>
      ) : (
        <div className={`content ${contentClassName || "content__one"}`}>
          {showBoxOne && <div className="box box__one">1</div>}

          {showBoxTwo && <div className="box box__two">2</div>}

          {showBoxThree && <div className="box box__three">3</div>}

          {showBoxFour && <div className="box box__four">4</div>}

          {showBoxFive && <div className="box box__five">5</div>}
        </div>
      )}
    </Container>
  );
};

export default CssFlexBox;
