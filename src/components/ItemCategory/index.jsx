function ItemCategory({ nameCattegory, src }) {
  return (
    <div className="w-max h-max shadow-lg max-w-[200px] p-3 cursor-pointer relative rounded-lg">
      <h1 className="font-extrabold text-center mb-3">{nameCattegory}</h1>
      <img src={src} className="h-[100px] m-auto" alt="" />
      <input type="radio" className="absolute top-1 right-1 p-3" />
    </div>
  );
}

export default ItemCategory;
