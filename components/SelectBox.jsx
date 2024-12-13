"use client";

const SelectBox = ({ list }) => {
  const change = (e) => {
    console.log(e.target.value);
    return e.target.value;
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl font-bold">현재상영작</span>
      <select onChange={change} className="text-black p-2 rounded-lg">
        {list.map((v, i) => (
          <option key={i} value={v.id}>
            {v.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
