import { useState } from 'react';

const Slider = (props:any) => {
  const [value, setValue] = useState(0);
console.log("slider is called "+props.name)
  const handleChange = (e:any) => {
    setValue(parseInt(e.target.value));
    console.log(value)
  };

  return (
    <div className="w-[400px]  mx-auto">
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleChange}
        className="w-full "
      />
      <div className="text-center mt-4">
        <span className="text-lg font-bold text-white">{value}</span>
      </div>
    </div>
  );
};

export default Slider;
