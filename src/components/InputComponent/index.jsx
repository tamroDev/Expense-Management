/* eslint-disable react/prop-types */
function InputComponent({ des, id, label, name, type, value, register }) {
  if (register) {
    return (
      <div className="flex-auto">
        <label
          htmlFor={id}
          className="text-gray-800 font-bold text-sm mb-2 block"
        >
          {label}
        </label>
        <input
          {...register(name)}
          name={name}
          id={id}
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type={type}
          placeholder={des}
          value={value}
        />
      </div>
    );
  }

  return (
    <div className="flex-auto">
      <label
        htmlFor={id}
        className="text-gray-800 font-bold text-sm mb-2 block"
      >
        {label}
      </label>
      <input
        name={name}
        id={id}
        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type={type}
        placeholder={des}
      />
    </div>
  );
}

export default InputComponent;
