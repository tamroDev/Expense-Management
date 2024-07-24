import InputComponent from "../../../../components/InputComponent";

function InputGroup() {
  return (
    <>
      <InputComponent
        name={"email"}
        type={"email"}
        id={"email"}
        des={"Email ..."}
      />
      <InputComponent
        name={"pasword"}
        type={"pasword"}
        id={"pasword"}
        des={"Password ..."}
      />
    </>
  );
}

export default InputGroup;
