import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// secton one
import heroImg from "../../.././public/Images/Section1/heroImg.svg";
import heroBottom from "../../.././public/Images/Section1/heroBottom.svg";
import heroMidddle from "../../.././public/Images/Section1/heroMiddle.svg";
import heroTop from "../../.././public/Images/Section1/heroTop.svg";
import mixPolygon from "../../.././public/Images/Section1/mixPolygon.svg";
import bgTop from "../../.././public/Images/Section1/Vector 92.svg";
import logo1 from "../../.././public/Images/Section1/logo1.svg";
import logo2 from "../../.././public/Images/Section1/logo2.svg";
import logo3 from "../../.././public/Images/Section1/logo3.svg";
import logo4 from "../../.././public/Images/Section1/logo4.svg";
import arrowBlue from "../../.././public/Images/Section1/downBlue.svg";
import navIcon1 from "../../.././public/Images/Section1/nav/navS1.svg";
// secton two
import Vector2 from "../../.././public/Images/Section2/Vector2.svg";
import icon1 from "../../.././public/Images/Section2/iconBlue.svg";
import icon2 from "../../.././public/Images/Section2/iconBlue2.svg";
import icon3 from "../../.././public/Images/Section2/iconBlue3.svg";

// section four
import sideImg from "../../.././public/Images/Section4/sideImage.svg";
import Vector4 from "../../.././public/Images/Section4/Vector4.svg";

// section five
import Vector5 from "../../.././public/Images/Section5/Vector5.svg";
import leftArrow from "../../.././public/Images/Section5/arrowgray.svg";
import rightArrow from "../../.././public/Images/Section5/arrowwhite.svg";
import imgMan from "../../.././public/Images/Section5/img.svg";
import checkPoint from "../../.././public/Images/Section5/check.svg";
import rightBottom from "../../.././public/Images/Section6/rightBottom.svg";
import rightOne from "../../.././public/Images/Section6/rightOne.svg";
import leftBottom from "../../.././public/Images/Section6/leftBottom.svg";
import leftOne from "../../.././public/Images/Section6/leftOne.svg";
import tryangle from "../../.././public/Images/Section6/tryaa.svg";
import rightTop from "../../.././public/Images/Section6/itemright.svg";

// secton3
import rightTop3 from "../../.././public/Images/Section3/rightTop3.svg";
import rightBottom3 from "../../.././public/Images/Section3/info.svg";
import blueTick from "../../.././public/Images/Section3/blurTicik.svg";
import Rectangles3 from "../../.././public/Images/Section3/Rectangles3.svg";
import analysisBottom from "../../.././public/Images/Section3/analysisBottom.svg";
import analysis from "../../.././public/Images/Section3/analysis.svg";
import marketing from "../../.././public/Images/Section3/marketingImg.svg";
import salesAnalysis from "../../.././public/Images/Section3/salesAnalysis.svg";
import Vector3 from "../../.././public/Images/Section3/Vector3.svg";
import multPic from "../../.././public/Images/Section3/multPic.svg";
import mobileG3 from "../../.././public/Images/Section3/mobileG3.svg";
// footer
import insta from "../../.././public/Images/Footer/insta.svg";
import viver from "../../.././public/Images/Footer/viver.svg";
import linkedin from "../../.././public/Images/Footer/linkedin.svg";
import youtube from "../../.././public/Images/Footer/youtube.svg";
import global from "../../.././public/Images/Footer/global.svg";
import downarrow from "../../.././public/Images/Footer/downarrow.svg";

export default function Landingpage() {
  const [buttonClick, setButtonClick] = useState(1);
  const [serviceShow, setServiceShow] = useState(false);
  const [techShow, setTechShow] = useState(false);
  const [aboutShow, setAboutShow] = useState(false);

  return (
    <>
      {/* section 1 # Hero Section */}
      <div className="relative flex flex-col w-full">
        {/* <Navbar></Navbar> */}
        <div className="flex xl:flex-row xs:flex-col xs:left-6 xl:left-[200px] absolute w-full z-50 xl:h-[96px]">
          <div className="container  flex flex-row w-[1400px]">
            <div className="flex pr-12">
              <h1 className="flex my-auto text-[28px] text-[#1F293C]">
                FLAIR<span className="text-[12px] pt-[6px]">TM</span>{" "}
              </h1>
            </div>

            <div className="flex xs:hidden xl:inline-flex xl:gap-8 justify-left">
              <p className=" text-[#1F293C] my-auto">
                <Link href="#">Why FLAIR</Link>
              </p>
              <p className=" text-[#1F293C] my-auto">
                <Link href="#">Services</Link>
                <button
                  onClick={() =>
                    setServiceShow((pre) => {
                      return !pre;
                    })
                  }
                  className="ml-2"
                >
                  {!serviceShow ? (
                    <Image src={arrowBlue} alt="This is an icon" />
                  ) : (
                    <Image
                      className="rotate-180"
                      src={arrowBlue}
                      alt="This is an icon"
                    />
                  )}
                </button>
              </p>
              <p className=" text-[#1F293C] my-auto">
                <Link href="#">Technology</Link>
                <button
                  onClick={() =>
                    setTechShow((pre) => {
                      return !pre;
                    })
                  }
                  className="ml-2"
                >
                  {!techShow ? (
                    <Image src={arrowBlue} alt="This is an icon" />
                  ) : (
                    <Image
                      className="rotate-180"
                      src={arrowBlue}
                      alt="This is an icon"
                    />
                  )}
                </button>
              </p>
              <p className=" text-[#1F293C] my-auto">
                <Link href="#">About</Link>
                <button
                  onClick={() =>
                    setAboutShow((pre) => {
                      return !pre;
                    })
                  }
                  className="ml-2"
                >
                  {!aboutShow ? (
                    <Image src={arrowBlue} alt="This is an icon" />
                  ) : (
                    <Image
                      className="rotate-180"
                      src={arrowBlue}
                      alt="This is an icon"
                    />
                  )}
                </button>
              </p>
              <p className=" text-[#1F293C] my-auto">
                <Link href="#">Pricing</Link>
              </p>
            </div>
          </div>
        </div>
        {/* navDropDown */}
        {serviceShow && (
          <div className="w-full flex bg-[#F0F2F6] absolute top-[96px] left-0 z-50 shadow-lg">
            <div className="container flex xs:flex-col xl:flex-row mx-auto xl:py-8 xl:gap-8 flex-wrap">
              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">FLAIR Manager</p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    Manage your locations, staff and complete operations and
                    more in our advanced admin dashboard
                  </p>
                </div>
              </div>
              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">
                    Branded Mobile Applications
                  </p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    Build your brand and stand out with your own mobile
                    applications listed on the App Store & Google Play
                  </p>
                </div>
              </div>
              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">FLAIR Mobile</p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    A complete, integrated mobile application for your staff to
                    manage their day-to-day operations and operate at maximum
                    efficiency
                  </p>
                </div>
              </div>
              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">
                    Branded Web Applications
                  </p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    Cater to new clients, drive organic traffic and more with
                    your own online booking platform
                  </p>
                </div>
              </div>

              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">FLAIR POS</p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    A fully integrated and branded iPad point of sale system for
                    seamless customer checkouts
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {techShow && (
          <div className="w-full flex bg-[#F0F2F6] absolute top-[96px] left-0 z-50 shadow-lg">
            <div className="container flex xs:flex-col xl:flex-row mx-auto xl:py-8 xl:gap-8 flex-wrap">
              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">FLAIR Manager</p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    Manage your locations, staff and complete operations and
                    more in our advanced admin dashboard
                  </p>
                </div>
              </div>
              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">
                    Branded Mobile Applications
                  </p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    Build your brand and stand out with your own mobile
                    applications listed on the App Store & Google Play
                  </p>
                </div>
              </div>
              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">FLAIR Mobile</p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    A complete, integrated mobile application for your staff to
                    manage their day-to-day operations and operate at maximum
                    efficiency
                  </p>
                </div>
              </div>
              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">
                    Branded Web Applications
                  </p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    Cater to new clients, drive organic traffic and more with
                    your own online booking platform
                  </p>
                </div>
              </div>

              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">FLAIR POS</p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    A fully integrated and branded iPad point of sale system for
                    seamless customer checkouts
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {aboutShow && (
          <div className="w-full flex bg-[#F0F2F6] absolute top-[96px] left-0 z-50 shadow-lg">
            <div className="container flex xs:flex-col xl:flex-row mx-auto xl:py-8 xl:gap-8 flex-wrap">
              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">FLAIR Manager</p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    Manage your locations, staff and complete operations and
                    more in our advanced admin dashboard
                  </p>
                </div>
              </div>
              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">
                    Branded Mobile Applications
                  </p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    Build your brand and stand out with your own mobile
                    applications listed on the App Store & Google Play
                  </p>
                </div>
              </div>
              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">FLAIR Mobile</p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    A complete, integrated mobile application for your staff to
                    manage their day-to-day operations and operate at maximum
                    efficiency
                  </p>
                </div>
              </div>
              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">
                    Branded Web Applications
                  </p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    Cater to new clients, drive organic traffic and more with
                    your own online booking platform
                  </p>
                </div>
              </div>

              <div className="flex h-[108px] w-[415px] p-4  hover:bg-white hover:rounded-[16px]">
                <div className="h-full w-[40px] bg-[#E1E6F6] flex rounded-lg mr-4">
                  <Image
                    className="my-auto w-5 h-5 mx-auto"
                    src={navIcon1}
                    alt="this is an icon"
                  />
                </div>
                <div className="w-full">
                  <p className="font-[600] pb-[4px]">FLAIR POS</p>
                  <p className="text-[#98A7C3] text-[13px] w-full">
                    A fully integrated and branded iPad point of sale system for
                    seamless customer checkouts
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex w-full relative ">
          <Image
            src={bgTop}
            alt="This is an icon"
            className="w-full absolute  xs:invisible xl:visible z-0 right-[250px] left-0 bottom-[150px]"
          />
          <div className={`xs:w-full xl:w-4/6 flex flex-col pt-20 `}>
            <div className="xs:px-6 xl:pl-[192px] xl:pr-[80px] my-auto z-10">
              <h1 className="xs:text-[40px]  xl:text-[60px] ">
                Transform your barber <br /> shop into a{" "}
                <span className="text-[#1642C5]">profitable</span> & <br />{" "}
                <span className="text-[#1642C5]">client-driven </span>business
              </h1>
              <p className="text-[20px] text-[#98A7C3] pt-6">
                Our AI powered software makes running your barbershop easier and{" "}
                <br /> improves customer satisfaction. We use your data to help
                you make smart <br /> decisions and increase profits.
              </p>
              <div className="mt-[60px] flex xs:flex-col xl:flex-row justify-left ">
                <button className="bg-[#1642C5] xs:w-full xl:w-[200px] h-[64px] xs:mb-4 xl:mb-0 rounded-full text-white mr-5">
                  See how it works
                </button>
                <button className="border-[1px] xs:w-full xl:w-[200px] border-[#1F293C] h-[64px] rounded-full text-[#1F293C]">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-[#EDF1F4] xs:mt-10 flex xs:flex-col xl:flex-row w-full h-[168px] xs:py-4 xl:py-[63px] mt-auto xs:px-6 xl:pl-[200px]">
              <div className="flex flex-row gap-2 xs:pb-4 xl:pb-0">
                <Image src={logo1} className="xs:w-2/4  xl:w-full h-full" />
                <Image
                  src={logo2}
                  className="xs:w-2/4 xs:mx-2 xl:mx-10 xl:w-full h-full"
                />
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src={logo3}
                  className="xs:w-2/4 xs:mx-2 xl:mx-10 xl:w-full h-full"
                />
                <Image src={logo4} className="xs:w-2/4  xl:w-full h-full" />
              </div>
            </div>
          </div>

          <div className="w-2/6 h-full ml-auto z-20 xs:hidden xl:block relative">
            <Image className="w-full h-full" src={heroImg} />
            <div
              className={`flex w-[650px] absolute xs:hidden xl:inline-flex z-30 xl:gap-8 py-4  top-0 text-right xl:px-5 ${
               (serviceShow || techShow || aboutShow)&& "bg-white"
              }`}
            >
              <p
                className={` text-[#ffffff] my-auto ${
                  (serviceShow || techShow || aboutShow) && "text-black"
                } `}
              >
                <Link href="#">Log in</Link>
              </p>
              <button
                className={`h-[64px] rounded-full border-2 xl:px-10 text-white ${
                  (serviceShow || techShow || aboutShow)&& "text-black border-2  border-black"
                }`}
              >
                <Link className={`${(serviceShow || techShow || aboutShow) && "text-black "}`} href="#">
                  Get a live Demo
                </Link>
              </button>
              <p
                className={` text-[#ffffff] my-auto ${
                  (serviceShow || techShow || aboutShow) && "text-black"
                } `}
              >
                <Link href="#">EN</Link>
              </p>
            </div>

            <Image
              className=" absolute xs:invisible xl:visible top-[150px] right-[0px]"
              src={heroTop}
            />
            <Image
              className=" absolute xs:invisible xl:visible right-[450px] bottom-[300px]"
              src={heroMidddle}
            />
            <Image
              className=" absolute xs:invisible xl:visible right-[160px] bottom-[0px]"
              src={heroBottom}
            />
            <Image
              className=" absolute xs:invisible xl:visible bottom-[0px] right-[0px]"
              src={mixPolygon}
            />
          </div>
        </div>
      </div>

      {/* section 2 # INTRODUCING FLAIR */}
      <div className="flex flex-col xs:mx-6 xl:px-[200px] ">
        <p className="text-[20px] text-[#1642C5] mx-auto xs:mt-[80px] xl:mt-[160px]">
          INTRODUCING FLAIR
        </p>
        <h3 className="xs:text-[32px] xl:text-[48px] font-semibold mt-4 mb-[72px] text-center">
          <span className="text-[#1642C5]">FLAIR</span>'s complete platform
          provides your barbershop with everything you need to{" "}
          <span className="text-[#1642C5]">
            succeed, stand out and increase profitability
          </span>
          in today's competitive market. 
        </h3>
      </div>
      <div className=" w-full relative flex flex-col">
        <div className="bg-[#F6F8F9] rounded-[40px] flex xl:flex-row xs:flex-col justify-between xs:px-4 xl:px-[80px] py-[64px] container mx-auto z-40">
          <div className="flex flex-col justify-center xs:w-full xl:w-[290px]">
            <div className=" mb-[24px]">
              <Image className="mx-auto" src={icon2} alt="this is an icon" />
            </div>
            <div className="flex flex-col">
              <p className="text-[20px] mx-auto mb-4 font-medium">
                Efficient Operations
              </p>
              <p className="text-[#98A7C3] text-center ">
                FLAIR is a complete solution that simplifies operations,
                automates tasks, and offers data-driven insights to boost
                revenue and staff performance.
              </p>
            </div>
          </div>

          <div className="flex flex-col xs:my-[60px] xl:my-0 justify-center xs:w-full xl:w-[290px]">
            <div className=" mb-[24px]">
              <Image className="mx-auto" src={icon3} alt="this is an icon" />
            </div>
            <div className="flex flex-col">
              <p className="text-[20px] mx-auto mb-4 font-medium">
                Data-Driven Decisions
              </p>
              <p className="text-[#98A7C3] text-center">
                Using your data, we drive your bookings and key metrics with
                automated marketing algorithms, reducing costs and optimizing
                revenue for barbershops.
              </p>
            </div>
          </div>

          <div className="flex flex-col  justify-center xs:w-full xl:w-[290px]">
            <div className="mb-[24px]">
              <Image className="mx-auto" src={icon1} alt="this is an icon" />
            </div>
            <div className="flex flex-col">
              <p className="text-[20px] mx-auto mb-4 font-medium text-center">
                Expectional Client Experience
              </p>
              <p className="text-[#98A7C3] text-center">
                We offer a customizable suite of products to streamline all
                salon/client operations and enhance the client experience with
                mobile payments, referrals, loyalty programs, and more.
              </p>
            </div>
          </div>
        </div>

        {/* button grp */}
        <div className="mt-[80px] flex  xl:flex-row xs:flex-col justify-center xs:mx-6 xs:mb-[80px] xl:mb-[160px] z-10">
          <button className="bg-[#1642C5]  xs:w-full  xl:w-[200px] xs:mb-4 xl:mb-0 h-[64px] rounded-full text-white mr-5">
            See how it works
          </button>
          <button className="border-[1px] border-[#1F293C]  xs:w-full  xl:w-[200px] h-[64px] rounded-full text-[#1F293C]">
            Learn More
          </button>
        </div>
        <Image
          src={Vector2}
          alt="This is an icon"
          className="w-full absolute  bottom-[0px] left-0 z-0"
        />
      </div>

      {/* section 3 # Untapped Potential */}
      <div className="bg-[#EEF2F5] flex-col flex ">
        {/* untapped potential */}
        <div className="flex flex-col relative ">
          <Image
            src={Vector3}
            alt="This is an icon"
            className="w-full absolute  top-[763px] left-0  z-0 "
          />
          <div className="z-10">
            <div className="xs:mt-20 xl:mt-[160px] text-center xs:mx-6 xl:mx-auto">
              <p className="text-[20px] text-[#1642C5] pb-4">
                Unlock the full potential of your salon with FLAIR
              </p>
              <h1 className="text-[52px] font-semibold text-[#1642C5] pb-6">
                <span className="text-black">Untapped</span> Potential
              </h1>
              <p className="pb-[52px] text-[#98A7C3]">
                From appointment bookings, to marketing, to staff management and
                payment processing, FLAIR alleviates your schedule while giving
                you a 360 view of your operations.
              </p>
            </div>
            <div className="w-full relative flex flex-col">
              <div className="rounded-[40px]    w-100 relative">
                <Image
                  src={multPic}
                  className="xl:mx-auto xs:hidden xl:block z-1 top-0 right-[520px] "
                />
                {/* <Image src={Rectangles3} className="mx-auto z-0 mt-10 xs:invisible" /> */}

                <Image
                  src={mobileG3}
                  className="mx-auto  xl:hidden xs:block z-1 top-0 right-0 "
                />
                {/* <Image src={Rectangles3} className="mx-auto z-0 mt-10" /> */}
              </div>

              <Image
                src={rightTop3}
                className="absolute xs:invisible xl:visible -top-[12px]  right-[320px]"
              />
              <Image
                src={rightBottom3}
                className="absolute xs:invisible xl:visible top-[282px] right-[400px]"
              />
            </div>

            <div className="flex xl:flex-row xl:justify-center xs:mx-6 xl:mx-auto xl:mt-0 xs:mt-[60px] z-20 xs:flex-col">
              <button className="xs:w-full xs:mb-4 xl:mb-0 xl:w-[200px] h-[64px] bg-[#1642C5] text-white rounded-full mr-5">
                Explore Platform
              </button>
              <button className="xs:w-full xl:w-[200px] h-[64px] rounded-full border-[2px] border-[#1F293C] text-[#000000]">
                Get a Live Demo
              </button>
            </div>
          </div>

          {/* analysis */}
          <div className="flex xs:flex-col xl:flex-row xs:mx-0 xl:mt-[80px] xs:pt-20 xl:px-[120px]">
            <div className="xs:w-full xl:w-2/4 relative">
              <Image className="w-full h-full" src={analysis} />
              <Image
                className=" absolute xs:invisible xl:visible -right-[120px] bottom-0"
                src={analysisBottom}
              />
            </div>
            <div className="xs:w-full xl:w-2/4 bg-[#1642C5] xs:px-6 xl:pl-[104px] xl:pr-[80px] flex xl:rounded-r-[40px]">
              <div className="my-auto xs:pt-[60px]">
                <p className="text-[#88D4FF] text-[20px] ">
                  Save time, improve your brand image and reputation, and tap
                  into your full potential with FLAIR
                </p>
                <h2 className="xs:text-[32px] xl:text-[52px] font-semibold text-white pt-3 pb-6 ">
                  Experience <br /> unmatched growth
                </h2>
                <p className="text-white text-[20px] ">
                  Move your business forward faster, with thoughtful automations
                  and algorithms helping your staff operate efficiently while
                  delivering an elite client experience.
                </p>
                <div className="flex xl:flex-row xs:flex-col justify-left my-[60px] ">
                  <button className="xs:w-full xs:mb-4 xl:mb-0 xl:w-[200px] h-[64px] text-[#1F293C] bg-white rounded-full mr-5">
                    Explore Platform
                  </button>
                  <button className="xs:w-full xl:w-[200px] h-[64px] rounded-full border-[2px] border-[#fff] text-[#fff]">
                    Get a Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* marketing */}
        <div className="flex flex-col justify-center z-20">
          <div className="flex xs:flex-col xl:flex-row xs:pt-20 xl:pt-[320px] xs:mx-6 xl:px-[190px] w-full z-20">
            <div className="xs:w-full xl:w-2/4 my-auto xs:pr-6 xl:pr-5 relative">
              <Image
                className="absolute right-0 -bottom-[230px] z-30"
                src={salesAnalysis}
              />
              <p className="text-[20px] text-[#1690C5] pb-4">
                Maximize Efficiency, Increase Revenue, and Grow Your Business
              </p>
              <h2 className="text-[32px] xl:text-[52px] font-medium pb-6">
                <span className="text-[#1642C5]">Transform</span> Your Business{" "}
                <br /> with
                <span className="text-[#1642C5]">AI & Automation</span>
              </h2>
              <p className="pb-10 text-[#98A7C3]">
                Save time and resources, uncover hidden opportunities for
                growth, and create a more personalized and seamless customer
                experience with FLAIR’s AI-powered algorithms and automation of
                manual tasks
              </p>

              <p className="text-[18px] pb-5 flex text-[#1F293C]">
                <Image
                  src={blueTick}
                  alt="this is an Icon"
                  className="mr-3 mt-[6px] mb-auto"
                />
                Personalized client notifications and promotions
              </p>
              <p className="text-[18px] pb-5 flex">
                <Image
                  src={blueTick}
                  alt="this is an Icon"
                  className="mr-3 mt-[6px] mb-auto"
                />{" "}
                Most likely to book client recommendations
              </p>
              <p className="text-[18px] pb-5 flex text-[#1F293C]">
                <Image
                  src={blueTick}
                  alt="this is an Icon"
                  className="mr-3 mt-[6px] mb-auto"
                />{" "}
                Automated marketing campaigns
              </p>
              <p className="text-[18px] pb-5 flex text-[#1F293C]">
                <Image
                  src={blueTick}
                  alt="this is an Icon"
                  className="mr-3 mt-[6px] mb-auto"
                />{" "}
                Specialized discounts and promotions
              </p>
              <p className="text-[18px] pb-5 flex text-[#1F293C]">
                <Image
                  src={blueTick}
                  alt="this is an Icon"
                  className="mr-3 mt-[6px] mb-auto"
                />
                Filling slow days
              </p>
              <p className="text-[18px] pb-5 flex text-[#1F293C]">
                <Image
                  src={blueTick}
                  alt="this is an Icon"
                  className="mr-3 mt-[6px] mb-auto"
                />
                Automated payout and rent collection calculations
              </p>
              <p className="text-[18px] pb-5 flex text-[#1F293C]">
                <Image
                  src={blueTick}
                  alt="this is an Icon"
                  className="mr-3 mt-[6px] mb-auto"
                />
                More +
              </p>
            </div>
            <div className="xs:w-full xl:w-2/4 justify-center">
              <Image
                className=" w-full h-full mx-auto"
                src={marketing}
                alt="This is a picture"
              />
            </div>
          </div>
          <div className="container mx-auto mt-8 z-0 relative flex flex-col">
            <div className="bg-[#e2e4e7] -mb-10 rounded-[24px] p-[20px] z-40 ">
              <div>
                <p className="text-[20px] text-[#1F293C] font-[700]">
                  Automated Campaigns
                </p>
                <p className="text-[12px] text-[#98A7C3] mt-[8px] mb-[16px]">
                  Drastically boost bookings and engage clients with our smart
                  automations and AI powered algorithms. <br />
                  Streamline your marketing strategy with these hyper-targeted
                  campaigns designed to maximize your operations and
                  profitability.
                </p>
              </div>
              <div className="flex gap-3 xs:flex-col xl:flex-row">
                <div className="xs:w-full xl:w-1/4 bg-white p-5 rounded-[24px]">
                  <p className="font-[700px] text-base">Reminder to Book</p>
                  <p className="text-[12px] text-[#98A7C3] pt-4 pb-10">
                    Send a friendly reminder to clients who don’t have a future
                    appointment scheduled.
                  </p>
                  <button className="text-[#1642C5] border-[2px] border-[#1642C5] w-full h-10 rounded-full">
                    Enable
                  </button>
                </div>

                <div className="xs:w-full xl:w-1/4 bg-white p-5 rounded-[24px]">
                  <p className="font-[700px] text-base">Last Minute Opening</p>
                  <p className="text-[12px] text-[#98A7C3] pt-4 pb-10">
                    Give clients first dibs when your calender has a last-minute
                    Opening.
                  </p>
                  <button className="text-[#1642C5] border-[2px] border-[#1642C5] w-full h-10 rounded-full">
                    Enable
                  </button>
                </div>

                <div className="xs:w-full xl:w-1/4 bg-white p-5 rounded-[24px]">
                  <p className="font-[700px] text-base">Rescue Lost Clients</p>
                  <p className="text-[12px] text-[#98A7C3] pt-4 pb-10">
                    Clients who haven't booked X perecntage or days after their
                    average booking time.
                  </p>
                  <button className="text-[#1642C5] border-[2px] border-[#1642C5] w-full h-10 rounded-full">
                    Enable
                  </button>
                </div>

                <div className="xs:w-full xl:w-1/4 bg-white p-5 rounded-[24px]">
                  <p className="font-[700px] text-base">Slow Days Decision</p>
                  <p className="text-[12px] text-[#98A7C3] pt-4 pb-10">
                    lients who haven't booked X perecntage or days after their
                    average booking time.
                  </p>
                  <button className="text-[#1642C5] border-[2px] border-[#1642C5] w-full h-10 rounded-full">
                    Enable
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-[24px] w-full h-full top-[60px] z-0 right-5 bg-[#C7CFDE] absolute"></div>
          </div>
        </div>
      </div>

      {/* section 4 # KEY BENEFITS */}
      <div className="bg-[#EEF2F5]">
        <div className="flex flex-col justify-center">
          <p className="text-[20px] text-[#1642C5] mx-auto xs:mt-[80px] xl:mt-[160px]">
            KEY BENEFITS
          </p>

          <h3 className="text-[32px] xl:text-[52px] xs:mx-6 font-semibold mt-4  mb-[24px] text-center">
            FLAIR prides itself by
            <span className="text-[#1642C5]">
              helping our partners <br />
            </span>
            run the
            <span className="text-[#1642C5]">best version</span>
            of their business
          </h3>
          <p className="text-[#98A7C3] mb-[72px] text-center xs:mx-6">
            Our platform offers a comprehensive set of features that benefits
            business owners, service providers and their client base
          </p>
        </div>
        {/* bg-curbed */}
        <div className="flex justify-center">
          <div className="xs:w-[325px] xs:mx-6 xl:mx-auto flex xl:w-[600px]  xl:h-[48px] xs:h-[48px] mx-auto bg-white rounded-full">
            <button
              onClick={() => {
                setButtonClick(1);
              }}
              className={` ${
                buttonClick === 1
                  ? "bg-[#1F293C] text-white w-[200px] h-full rounded-full"
                  : "text-[#1F293C] bg-white w-[200px] h-full rounded-full"
              }`}
            >
              Business Owners
            </button>
            <button
              onClick={() => {
                setButtonClick(2);
              }}
              className={`${
                buttonClick === 2
                  ? "bg-[#1F293C] text-white w-[200px] h-full rounded-full"
                  : "text-[#1F293C] bg-white w-[200px] h-full rounded-full"
              }`}
            >
              Service Providers
            </button>
            <button
              onClick={() => {
                setButtonClick(3);
              }}
              className={`${
                buttonClick === 3
                  ? "bg-[#1F293C] text-white w-[200px] h-full rounded-full"
                  : "text-[#1F293C] bg-white w-[200px] h-full rounded-full"
              }`}
            >
              Clients Base
            </button>
          </div>
        </div>
        <div className="flex flex-col relative overflow-hidden">
          <Image
            src={Vector4}
            alt="This is an icon"
            className="w-full absolute  bottom-[50px] top-0 left-[0px] z-0 right-0"
          />
          <div className="flex w-full xs:flex-col-reverse xl:flex-row pt-[72px] xs:px-6 xl:px-[190px] z-10">
            <div className="xs:w-full xl:w-2/4 my-auto xl:pr-5">
              <h2 className="xl:text-[40px] xs:text-[32px] font-medium mb-[40px]">
                Business Owners
              </h2>
              <p className="text-[18px] pb-5 flex">
                <Image
                  src={blueTick}
                  alt="this is an Icon"
                  className="mr-3 mt-[6px] mb-auto"
                />{" "}
                Streamline operations with our fully integrated platform
              </p>
              <p className="text-[18px] pb-5 flex">
                <Image
                  src={blueTick}
                  alt="this is an Icon"
                  className="mr-3 mt-[6px] mb-auto"
                />{" "}
                Boost customer loyalty and referrals
              </p>
              <p className="text-[18px] pb-5 flex">
                <Image
                  src={blueTick}
                  alt="this is an Icon"
                  className="mr-3 mt-[6px] mb-auto"
                />{" "}
                Increase revenue with automated, AI-driven marketing campaigns
              </p>
              <p className="text-[18px] pb-5 flex">
                <Image
                  src={blueTick}
                  alt="this is an Icon"
                  className="mr-3 mt-[6px] mb-auto"
                />{" "}
                Protect against no-shows and cancellations with our advanced
                booking and payment features
              </p>
              <p className="text-[18px] pb-5 flex">
                <Image
                  src={blueTick}
                  alt="this is an Icon"
                  className="mr-3 mt-[6px] mb-auto"
                />{" "}
                Improve your brand image and reputation with a highly
                customizable and intuitive platform
              </p>
              <p className="text-[18px] pb-5 flex">
                <Image
                  src={blueTick}
                  alt="this is an Icon"
                  className="mr-3 mt-[6px] mb-auto"
                />{" "}
                Save time and resources by automating manual tasks
              </p>
              <p className="text-[18px] pb-5 flex">
                {" "}
                <Image
                  src={blueTick}
                  alt="this is an Icon"
                  className="mr-3 mt-[6px] mb-auto"
                />{" "}
                More +
              </p>
            </div>
            <div className="xs:w-full xl:w-2/4 flex xs:1mt-10 xs:mb-[60px]">
              <Image
                className="mx-auto"
                src={sideImg}
                alt="This is a picture"
              />
            </div>
          </div>
        </div>

        <div className="mt-[64px] flex  xl:flex-row xs:flex-col xs:mx-6 justify-center xs:pb-[80px] xl:pb-[160px]">
          <button className="bg-[#1642C5] xs:w-full xl:w-[336px] h-[64px] xs:mb-3 xl:mb-0 rounded-full text-white mr-5">
            Discover Features for Owners
          </button>
          <button className="border-[1px] border-[#1F293C] xs:w-full xl:w-[336px] h-[64px] rounded-full text-[#1F293C]">
            Discover Features for Professionals
          </button>
        </div>
      </div>

      {/* section 5 # Testimonials */}
      <div className="flex flex-col relative">
        <Image
          src={Vector5}
          alt="This is an icon"
          className="w-full absolute  bottom-[50px] top-[650px] left-0 z-0 "
        />
        <div className="bg-[#1642C5] xs:px-6 xs:py-[80px] xl:px-[190px] xl:py-[160px]">
          <div className="pb-[120px]">
            <h2 className="text-white xs:text-[32px] xl:text-[52px]">
              Hear from our <br /> satisfied partners
            </h2>
            <p className="mt-6 text-white">
              Experience the Benefits of FLAIR Through the Words of Our Partners
            </p>
          </div>
          <div className="flex flex-row">
            <div className="w-[33px] h-full flex my-auto">
              <button className="">
                <Image
                  className="my-automy-auto"
                  src={leftArrow}
                  alt="this is an icon"
                />
              </button>
            </div>

            <div className="w-full flex xs:flex-col xl:flex-row xs:mx-6 xl:mx-[60px]">
              <div className="w-full h-full  ">
                <Image
                  className=" w-full h-full"
                  src={imgMan}
                  alt="This is a picture of man"
                />
              </div>
              <div className="my-auto xs:pl-0 xs:pt-9  xl:pl-[72px]">
                <h4
                  className="text-[20px] font-semibold text-white
            "
                >
                  WHAT THEY SAY
                </h4>
                <p className="text-[32px] pb-[40px] pt-4 text-white">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum hendrerit pulvinar dui, non interdum nisl posuere
                  ac. Vestibulum nec arcu auctor mi fermentum convallis quis at
                  tortor.”
                </p>
                <p className="text-[20px] font-semibold text-white">
                  Resky Fernanda
                </p>
                <p className="text-[#98A7C3] text-base pt-2">
                  Barbershop owner at New York
                </p>
              </div>
            </div>
            <div className="w-[33px] h-full  my-auto">
              <Image src={rightArrow} alt="this is an icon" />
            </div>
          </div>
        </div>
      </div>

      {/* section 6 # Get Started with flair */}
      <div className="w-full">
        <div className="bg-[#2E3B54] xl:h-[432px] xs:h-[735px] rounded-[24px] xl:mx-[192px] xs:mx-6  xs:my-[80px] xl:my-[160px] flex flex-col justify-center relative ">
          <h1 className="xl:text-[52px] xs:text-[32px] xs:mx-20  font-semibold text-center text-white    xs:-mt-[136px] xl:mt-16 pb-6 xl:mx-0 xl:w-full">
            Get started with FLAIR
          </h1>
          <p className="text-[#98A7C3] xl:pb-[40px] xs:pb-7 xs:mx-6 xs:px-[24px] text-center">
            We're dedicated to helping barbershops achieve their full potential.
            Book a demo today and see the difference yourself.
          </p>

          <div className="flex mx-auto xl:flex-row xl:gap-4 xs:flex-col xs:justify-center">
            <div className="flex my-auto xs:mx-auto">
              <Image
                className="my-auto"
                src={checkPoint}
                alt="This is an icon"
              />
              <p className="text-[20px] ml-[14px] my-auto text-white">
                Save time
              </p>
            </div>
            <div className="flex my-auto ml-[26px] xs:mx-auto">
              <Image src={checkPoint} alt="This is an icon" />
              <p className="text-[20px] ml-[14px] text-white">
                Increase profitability
              </p>
            </div>
            <div className="flex my-auto ml-[26px] xs:mx-auto">
              <Image src={checkPoint} alt="This is an icon" />
              <p className="text-[20px] ml-[14px] text-white">
                Boost efficiency
              </p>
            </div>
          </div>
          <button className="w-[256px] h-[64px] rounded-[40px] bg-[#1642C5] mx-auto xs:my-[39px] xl:my-[64px]  text-white">
            Get a live demo
          </button>
          <div className="right-0 bottom-0 absolute z-10">
            <Image src={rightOne} alt="This is a pciture" />
          </div>
          <div className="right-0 bottom-0 absolute z-0">
            <Image src={rightBottom} alt="This is a pciture" />
          </div>
          <div className="left-0 bottom-0 absolute z-10">
            <Image src={leftOne} alt="This is a pciture" />
          </div>
          <div className="left-[150px] bottom-0 absolute z-0">
            <Image src={leftBottom} alt="This is a pciture" />
          </div>
          <div className="left-0 top-0 absolute z-10">
            <Image src={tryangle} alt="This is a pciture" />
          </div>
          <div className="right-0 top-0 absolute z-10 ">
            <Image src={rightTop} alt="This is a pciture" />
          </div>
        </div>
      </div>

      {/* footer section */}
      <div className="bg-[#1F293C]">
        <div className="container xs:ml-4 xl:mx-auto  flex xl:flex-row xs:flex-col xl:pb-[69px]">
          <div className="xs:pt-[60px] xl:pt-[100px] flex flex-col text-white">
            <div className="flex">
              <h1 className="xs:text-[28px] xl:text-[40px] p-0 m-0">FLAIR </h1>
              <span className="xl:text-[12px] xs:text-[8px] mb-auto mt-[10px]">
                TM
              </span>
            </div>
            <div className="flex xl:flex-col xs:flex-row">
              <div className="flex gap-1 my-8">
                <button className="w-10 h-10 bg-[#253451] rounded-[16px]">
                  <a hrf="" className="">
                    <Image src={insta} className="mx-auto my-auto" />
                  </a>
                </button>
                <button className="w-10 h-10 bg-[#253451] rounded-[16px]">
                  <a hrf="" className="">
                    <Image src={viver} className="mx-auto my-auto" />
                  </a>
                </button>
                <button className="w-10 h-10 bg-[#253451] rounded-[16px]">
                  <a hrf="" className="">
                    <Image src={youtube} className="mx-auto my-auto" />
                  </a>
                </button>
                <button className="w-10 h-10 bg-[#253451] rounded-[16px]">
                  <a hrf="" className="">
                    <Image src={linkedin} className="mx-auto my-auto" />
                  </a>
                </button>
              </div>
              <div className="flex gap-2 h-[20px] xs:my-auto xs:ml-4">
                <Image src={global} className="my-auto" />
                <p className="text-[14px]">English</p>
                <Image src={downarrow} className="" />
              </div>
            </div>
          </div>

          <div className="text-white xs:pt-[60px] xl:pt-[100px] xl:ml-[89px] xl:mr-[56px] xs:w-full xl:w-[180px]">
            <p className="font-medium xl:mb-5">Services</p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              FLAIR Manager
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">FLAIR Mobile</p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              Branded Mobile Applications
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              Branded Web Applications
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">FLAIR POS</p>
          </div>

          <div className="text-white xs:pt-[60px] xl:pt-[100px] xl:mx-[56px] w-[190px]">
            <p className="font-medium xl:mb-5 ">For Owners</p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              Manage operations
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              Multi-Location Management
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              Analytics & Client Insights
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              Marketing & Promotions
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              Automated Payrolls
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              POS & Mobile Pay
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              Loyalty & Referral Programs
            </p>
          </div>
          <div className="text-white xs:pt-[60px] xl:pt-[100px] xl:mx-[56px] w-[180px]">
            <p className="font-medium xl:mb-5 ">For Professionals</p>

            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              Daily Operation Management
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              Smart Scheduling & Pricing
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              Automated Payouts
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              Performance Analytics
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              No Show & Cancellation Policies
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              Detailed Client Insights
            </p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">
              Engage Your Client Base
            </p>
          </div>

          <div className="text-white xs:pt-[60px] xl:pt-[100px] xl:mx-[56px]">
            <p className="font-medium xl:mb-5">About</p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">Testimonials</p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">Case Studies</p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">Blog</p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">FAQ/</p>
          </div>

          <div className="text-white xs:pt-[60px] xl:pt-[100px] xl:mx-[56px] w-[150px] xs:mb-8">
            <p className="font-medium xl:mb-5">AI & Automations</p>
            <p className="text-[14px] text-[#ffffffa5] xl:mb-4">Overview</p>
          </div>
        </div>
        <div className="border-t-[1px] border-[rgba(217,217,217,0.23)] text-white">
          <div className="container xs:justify-between xl:mx-auto flex xl:flex-row xs:flex-col py-[25px]">
            <p className="text-[12px] xs:text-center">
              © Copyright 2023, All Rights Reserved by FLAIR
            </p>
            <p className="text-[12px]  xs:text-center xl:text-left ">
              Privacy Policy <span className="mx-3"></span> Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
