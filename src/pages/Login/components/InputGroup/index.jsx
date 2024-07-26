import InputComponent from "../../../../components/InputComponent";

function InputGroup({ register, errors }) {
  return (
    <>
      <div>
        <InputComponent
          name="email"
          type="email"
          id="email"
          des="Email ..."
          register={register}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div>
        <InputComponent
          name="password"
          type="password"
          id="password"
          des="Password ..."
          register={register}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
    </>
  );
}

export default InputGroup;
