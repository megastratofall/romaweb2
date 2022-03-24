const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
${""}

:root{
    --background: #050505;
    --black:#0a0b10;
    --purple:#803bec;
    --red:#934646;
    --white:#fff;
    --nav: #363636;
    --nav2: rgb(150,145,145);
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Comic Sans MS, sans-serif;
}
html{
    scroll-behavior: smooth;
    box-sizing: border-box;
    }
body,
html,
a{
    font-family: Comic Sans MS, sans-serif;
}
body{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: var(--background);
    overflow-x: hidden;
}
h1,
h2,
h3,
h4,
h5,
h6{
   margin: 0;
   padding: 0; 
}
a {
    text-decoration: none;
    outline: none;
}
button{
    border: none;
    outline: none;
    &:focus{
        outline: none;
    }
}
img{
    width: 100%;
    height: auto;
}

*:focus{
    outline: none;
}
`;
