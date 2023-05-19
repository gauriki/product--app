export function Product() {
  return (
    <div className="py-10 px-16 border-2 border-inherit">
      <div className="flex gap-[100px] items-center justify-center">
        <div>
          <h1 className="font-bold text-[38px]  text-[#444444] leading-[46px] pt-8 pb-4">
            Powerful Tagline <br />
            for Your Product
          </h1>
          <p className="text-[#929292] font-normal text-[16px] leading-[24px] ">
            Supporting statement for your product&apos;s tagline. <br /> This
            text should communicate your unique selling <br /> proposition to
            the reader.
          </p>
          <button className="rounded-md bg-black text-white text-[16px] my-10   font-bold leading-[22px] px-8 py-[12px]">
            START YOUR FREE TRIAL
          </button>
        </div>
        <div className="border-2 border-[#F7F6F6] w-[600px] h-[400px] rounded-[8px] py-4">
          <div className="w-full h-full  bg-[#EBEBEB]"></div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <h1 className=" font-semibold text-[22px] leading-[26px] py-10 text-[#444444]">
          Trusted by most popular brands
        </h1>
        <div className="flex gap-8">
          <div className="bg-[#F7F6F6] w-[120px] h-[60px] rounded-[8px]"></div>
          <div className="bg-[#F7F6F6] w-[120px] h-[60px] rounded-[8px]"></div>
          <div className="bg-[#F7F6F6] w-[120px] h-[60px] rounded-[8px]"></div>
          <div className="bg-[#F7F6F6] w-[120px] h-[60px] rounded-[8px]"></div>
          <div className="bg-[#F7F6F6] w-[120px] h-[60px] rounded-[8px]"></div>
          <div className="bg-[#F7F6F6] w-[120px] h-[60px] rounded-[8px]"></div>
        </div>
        <p className="font-normal text-[16px] leading-[24px] text-[#929292] py-10">
          Join over 1 000 000 customers worldwide
        </p>
      </div>
    </div>
  );
}
