declare module 'myButton' {
  type ButtonType = {
    onClick : ()=>void
  };

  interface ButtonProps {
    props: ButtonType,
  }
}

module.exports = {
  ButtonType,
  ButtonProps,
};
