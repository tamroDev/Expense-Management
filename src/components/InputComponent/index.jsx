/* eslint-disable react/prop-types */
function InputComponent({ des, id, label, name, type }) {
  return (
    <div>
      <label htmlFor={id} className="text-gray-800 text-sm mb-2 block">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
        placeholder={des}
      />
    </div>
  );
}

export default InputComponent;
