export function Benifit() {
  return (
    <div className="py-14 px-12">
      <div className=" flex gap-8 items-center justify-center">
        <div className="w-[520px] h-[270px] rounded-[10px] bg-[#F7F6F6]"></div>
        <div className="text-center">
          <h1 className="text-[28px] font-semibold leading-[39px] text-[#444444] py-6">
            Primary benefit showcase
          </h1>
          <p className="font-normal text-[14px] leading-[23px] text-[#606060]">
            Show how your product&apos;s features matter, how they set <br />{" "}
            you apart from the competition, and how you can <br /> transform
            your customer&apos;s experience at work or at <br /> home.
          </p>
        </div>
      </div>
      <div className=" flex gap-[300px] py-6 items-center justify-center">
        <div className="pt-10">
          <h1 className="text-[28px] font-semibold leading-[39px] text-[#444444] py-6">
            econdary benefit showcase
          </h1>
          <p className="font-normal text-[14px] leading-[23px] text-[#606060] ">
            Help your customer imagine how life will be like when <br /> using
            your product. Paint a picture of the practical, <br /> emotional, or
            psychological benefits of purchasing
          </p>
        </div>
        <div className="relative">
          <div className="rounded-[10px] bg-[#EBEBEB] w-[300px] h-[150px]"></div>
          <div className="rounded-[10px] bg-[#F7F6F6] w-[300px] h-[150px] absolute right-28 top-[80px]"></div>
        </div>
      </div>
    </div>
  );
}
