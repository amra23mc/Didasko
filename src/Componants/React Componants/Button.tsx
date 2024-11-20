import TextBox from "./TextBox";

interface Props {
  text: string;
}

const Button = (props: Props) => {
  return (
    <>
      <TextBox
        text={props.text}
        backgroundColor="#f0f277"
        borderColor="#feffb0"
        width="30vw"
      ></TextBox>
    </>
  );
};

export default Button;
