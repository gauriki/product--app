import { DiFirebase } from "react-icons/di";

export function Primary() {
  return (
    <div className="bg-[#F7F6F6] py-16 flex items-center justify-center gap-[140px]">
      <div className="flex flex-col items-center">
        <div className="w-[50px] h-[50px]  bg-white rounded-[20px] flex items-center">
          <DiFirebase className="w-[100px] h-[50px] bg-white rounded-[20px] " />
        </div>
        <h1 className="font-semibold text-[21px] leading-[29px] text-[#444444] py-2">
          Primary Benefit One
        </h1>
        <p className="text-[14px] text-[#606060] font-normal leading-[20px]">
          Describe a key benefit that your <br /> product provides for your{" "}
          <br /> customers – and explain the <br />
          impact it can have.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[50px] h-[50px]  bg-white rounded-[20px] flex items-center">
          <DiFirebase className="w-[100px] h-[50px] bg-white rounded-[20px] " />
        </div>
        <h1 className="font-semibold text-[21px] leading-[29px] text-[#444444] py-2">
          Primary Benefit One
        </h1>
        <p className="text-[14px] text-[#606060] font-normal leading-[20px]">
          Describe a key benefit that your <br /> product provides for your{" "}
          <br /> customers – and explain the <br />
          impact it can have.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[50px] h-[50px]  bg-white rounded-[20px] flex items-center">
          <DiFirebase className="w-[100px] h-[50px] " />
        </div>
        <h1 className="font-semibold text-[21px] leading-[29px] text-[#444444] py-2">
          Primary Benefit One
        </h1>
        <p className="text-[14px] text-[#606060] font-normal leading-[20px]">
          Describe a key benefit that your <br /> product provides for your{" "}
          <br /> customers – and explain the <br />
          impact it can have.
        </p>
      </div>
    </div>
  );
}
