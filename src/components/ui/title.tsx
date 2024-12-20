import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="relative flex flex-row">
      <hr className="w-full border-2 border-zinc-200" />
      <div className="absolute -top-5 left-32 bg-white px-4">
        <h1 className="text-4xl font-semibold text-[#DCDCDC] ">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Title;
