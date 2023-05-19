export function Plan() {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-[#F7F6F6]">
      <h1 className="font-bold text-[30px] leading-[42px] text-[#444444] py-4">
        Choose your plan
      </h1>
      <p>
        Choose a plan that&apos;s right for your growing team. Simple pricing.
        No hidden charges.
      </p>
      <div className="border-2 border-[black] rounded-l-lg  rounded-[10px] my-8 ">
        <button className="bg-black text-white px-10 border-0 py-2 font-semibold rounded-l-md">
          Monthly
        </button>
        <button className="bg-white border-0 px-8  py-2 rounded-r-lg font-semibold">
          Annual
        </button>
      </div>
      <div className="flex gap-10">
        <div className="bg-white shadow-md flex flex-col items-center  py-4 px-10 rounded-[10px] justify-center gap-[100px]">
          <div>
            <p className="text-center text-[16px] font-semibold leading-[22px] text-[#444444] py-2">
              Basic
            </p>
            <h1 className="text-[56px] font-bold leading-[78px] text-[#444444] text-center py-2">
              $9
            </h1>
            <p className="text-[16px] font-medium leading-[22px] text-[#444444] text-center py-2">
              3 Projects
            </p>
            <p className="text-[16px] font-medium leading-[22px] text-[#444444] text-center py-2">
              250 objects per project
            </p>
            <p className="text-[16px] font-medium leading-[22px] text-[#444444] text-center py-2">
              One Active User
            </p>
          </div>
          <div>
            <button className="border-2 rounded-md font-bold text-[18px] border-black text-black py-1 px-8">
              Choose this plan
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md flex flex-col items-center  py-4 px-10 rounded-[10px] justify-center gap-[100px]">
          <div>
            <p className="text-center text-[16px] font-semibold leading-[22px] text-[#444444] py-2">
              Basic
            </p>
            <h1 className="text-[56px] font-bold leading-[78px] text-[#444444] text-center py-2">
              $9
            </h1>
            <p className="text-[16px] font-medium leading-[22px] text-[#444444] text-center py-2">
              3 Projects
            </p>
            <p className="text-[16px] font-medium leading-[22px] text-[#444444] text-center py-2">
              250 objects per project
            </p>
            <p className="text-[16px] font-medium leading-[22px] text-[#444444] text-center py-2">
              One Active User
            </p>
          </div>
          <div>
            <button className="border-2 rounded-md font-bold text-[18px] border-black text-black py-1 px-8">
              Choose this plan
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md flex flex-col items-center  py-4 px-10 rounded-[10px] justify-center gap-[100px]">
          <div>
            <p className="text-center text-[16px] font-semibold leading-[22px] text-[#444444] py-2">
              Basic
            </p>
            <h1 className="text-[56px] font-bold leading-[78px] text-[#444444] text-center py-2">
              $9
            </h1>
            <p className="text-[16px] font-medium leading-[22px] text-[#444444] text-center py-2">
              3 Projects
            </p>
            <p className="text-[16px] font-medium leading-[22px] text-[#444444] text-center py-2">
              250 objects per project
            </p>
            <p className="text-[16px] font-medium leading-[22px] text-[#444444] text-center py-2">
              One Active User
            </p>
          </div>
          <div>
            <button className="border-2 rounded-md font-bold text-[18px] border-black text-black py-1 px-8">
              Choose this plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
