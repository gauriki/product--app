export function Header() {
  return (
    <div className="flex justify-between px-14 py-6 border-b-2 border-inherit">
      <h1 className="font-bold text-[#444444] text-[22px] leading-8">
        @ Your Company
      </h1>
      <div className="flex text-base font-semibold text-[#444444] leading-4">
        <p className="px-6 text-base font-semibold text-[#444444] leading-4">
          Features
        </p>
        <p className="px-6 text-base font-semibold text-[#444444] leading-4">
          Pricing
        </p>
        <p className="px-6 text-base font-semibold text-[#444444] leading-4">
          Blog
        </p>
        <p className="px-6 text-base font-semibold text-[#444444] leading-4">
          Pages
        </p>
        <p className="px-6 text-base font-semibold text-[#444444] leading-4">
          Help
        </p>
      </div>
      <div>
        <button className="border-0 text-base font-semibold leading-[22px] rounded text-white px-6 py-1 bg-black">
          Sign Up
        </button>
        <button className="border-black bg-white rounded border-solid border-2 px-6 py-1 ml-2 text-base font-semibold leading-[22px]">
          Log In
        </button>
      </div>
    </div>
  );
}
