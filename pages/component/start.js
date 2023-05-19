export function Start() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="font-bold text-[30px] leading-[42px] text-[#444444] py-2">
        Start your free trial
      </h1>
      <p className="text-[16px] leading-[23px] font-normal text-[#606060] pb-4">
        Signup now. Its free and takes less than 3 minutes
      </p>
      <input
        type="text"
        placeholder="Full Name"
        className="text-[18px] font-normal leading-[25px] text-[
#c0c0c0] py-2 px-10 rounded my-2 border-2 border-inherit"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="text-[18px] font-normal leading-[25px] text-[
#c0c0c0] py-2 px-10 rounded my-2 border-2 border-inherit"
      />
      <input
        type="password"
        placeholder="Password"
        className="text-[18px] font-normal leading-[25px] text-[
#c0c0c0] py-2 px-10 rounded my-2 border-2 border-inherit"
      />
      <button className="text-[18px] font-semibold text-white leading-[25px] bg-black py-3 px-12 my-4 rounded">
        GET STARTED FOR FREE
      </button>
    </div>
  );
}
