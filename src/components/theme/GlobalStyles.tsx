import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    
    body{
        font-family: ${({ theme }) => theme.fontFamily};
        color: ${({ theme }) => theme.dark.d1};
        background-color: ${({ theme }) => theme.light.l4};
    }

    *::-webkit-scrollbar{
        width: 10px;
    }

    *::-webkit-scrollbar-track{
        box-shadow: inset 0 0 5px ${({ theme }) => theme.dark.d4};
        border-radius: 10px;
    }

    *::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.dark.d4};
        border-radius: 10px;
    }

    *::-webkit-scrollbar-thumb:hover{
        background-color: ${({ theme }) => theme.dark.d3};
    }

    .labelM{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
    }

    .see-more{
        cursor: pointer;
        color: ${({ theme }) => theme.primary.main};
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
    }

    .see-less{
        cursor: pointer;
        color: ${({ theme }) => theme.primary.main};
        font-family: ${({ theme }) => theme.fontFamily};
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
    }

    .see-more + *{
        display: none;
    }

    .see-more + *.show{
        display: block;
    }
    
    .primary-main{
        color: ${({ theme }) => theme.primary.main};
    }
`;

export default Globals;
