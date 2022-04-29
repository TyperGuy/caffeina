declare module 'myButton' {
  type ButtonType = {
    color: string,
    hoverColor:string,
    background: string,
    hoverBackground: string,
    title: string
  };

  interface ButtonProps {
    props: ButtonType,
  }
}

module.exports = {
  ButtonType,
  ButtonProps,
};
