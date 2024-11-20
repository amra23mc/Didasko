interface Props {
  text: string;
  backgroundColor?: string;
  width: string;
  extra?: string;
  textColor?: string;
  borderColor?: string;
}

const TextBox = (props: Props) => {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        width: props.width,
        borderColor: props.borderColor,
      }}
      className={"textbox " + props.extra}
    >
      <p style={{ color: props.textColor }}>{props.text}</p>
    </div>
  );
};

export default TextBox;
