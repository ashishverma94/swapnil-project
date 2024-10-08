import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full bg-[red] 1300px:flex-row flex-col flex justify-between items-center py-[40px] gap-[50px]">
      <div className=" h-full w-full 1300px:max-w-[791px] bg-[green]  flex flex-col gap-[63px]">
        <div className=" bg-[purple] font-[600] text-[43px] font-[poppins] flex flex-col gap-[25px]">
          <p>
            Elevate your space with sleek minimalist furniture designs that
            inspire
          </p>
          <p className="font-[300] text-[20px] font-[Poppins]">
            Discover the beauty of minimalism. Transform your home with stylish
            sofas, streamlined dining tables, chic storage, and elegant decor
            for a modern, minimalist look
          </p>
          <div className="bg-[white] w-[313px] h-[48px] flex justify-between items-center">
            <div className="w-[131px] h-full bg-[#3C3228] text-[white] font-[500] text-[18px] font-[poppins] flex justify-center items-center">
              shop now
            </div>
            <div className="w-[118px] h-[28px] font-[500] text-[18px] font-[poppins] self-end">
              <u>Watch demo</u>
            </div>
          </div>
        </div>
        <div class="h-[77px] flex flex-row flex-auto bg-[yellow] gap-[38px]">
          <div className=" h-[full] p-[10px] bg-[blue] flex flex-col gap-[2px]">
            <span>2500 + </span>
            <span>Unique Styles</span>
          </div>
          <div>
            3000+
            <div className="w-[141px] h-[full] font-[16px] font-[poppins]">
              Happy customers
            </div>
          </div>

          <div className="w-[50px] h-[33px]">
            1000+
            <div className=" w-[128px] h-[24px] font-[300] font-[poppins]">
              Certified Outlets
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[499px] rounded-[29px] flex bg-[white] ]">
        <img
          src="https://s3-alpha-sig.figma.com/img/0632/724b/907c4765ebe7798cd7418085eb1cb0b2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OiGmPz5zdsk4GzlK-pwCicKNnTwlT93uKsj~qCcKbLPzCB7L1ewwQLwEr6533jQwkSv-qlWS66SrjKmo6WLVsb5h6jJr0XqQT65Y1uyZKhviMgdkWlWDJfbUmixCh1PysGZ~UQ7ctZ355D8Mx7dzg5tjnE5eJQAqTp-~alaTSY9lFgzAhoozM7bAftop8Q4MlZvXXk0P6RcfcaZ1loudDkp53c1jYe7tlSqhSnps~GGJg98R2OF8qsrIQddF6FhLyxkEXLKFLFKb-rWi02gcp4CDIdkQofl5CRPnmoT56bIi-Q2G42mP-RGZJKAzCWiduXERmmTaEfIZdDbIRg4k6A__"
          alt="furniture"
          className="w-[499px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
