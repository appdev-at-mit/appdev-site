"use client";

import { developers, exec, alumni } from "./members";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AppWindow from "../components/appwindow";
import RoleBadges from "../components/rolebadge";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TeamPage() {
  const [openAlumni, setOpenAlumni] = useState<string | null>(null);

  const toggleAlumni = (semester: string) => {
    setOpenAlumni(openAlumni === semester ? null : semester);
  };
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="mx-5 md:mx-10 lg:mx-30 pt-20 bg-gray-100 font-sans">
        <div className="flex justify-between items-center border-l border-gray-200">
          <div className="w-full lg:w-1/2 pr-20">
            <p className="font-mono py-2 tracking-widest text-gray-300 uppercase">
              &lt;div className="w-full lg:w-1/2 pr-20"&gt;
            </p>
            <hr className="text-gray-200" />
            <h1 className="text-6xl mb-10 font-bold tracking-tight text-appdev-blue">
              meet the team.
            </h1>
            <p className="text-2xl mb-5">
              Every year, we recruit a diverse team of engineers, designers, and
              leaders to further our mission of promoting full-stack development
              within MIT and beyond. We ensure that all members have the unique
              opportunity to develop their technical and soft skills through
              practical projects that have real impact.
            </p>
            <hr className="text-gray-200" />
            <p className="font-mono py-2 tracking-widest text-gray-300 uppercase">
              &lt;/div&gt;
            </p>
          </div>
          <div
            className="hidden w-full lg:w-1/2 justify-center items-center
relative sm:flex"
          >
            <Image
              src="/social.jpg"
              alt="AppDev@MIT team at social event - diverse group of engineers and designers"
              width={400}
              height={400}
              className="w-full border rounded-lg shadow-lg shadow-gray-200"
            />
            <div className="absolute -top-0 -right-10 w-30 h-30 bg-appdev-purple/30 rounded-lg"></div>
            <div className="absolute top-20 -left-20 w-40 h-40 bg-appdev-green/30 rounded-lg"></div>
            <div className="absolute -bottom-0 right-10 w-20 h-20 bg-appdev-blue/30 rounded-lg"></div>
          </div>
        </div>
        <h2 className="text-5xl mt-20 mb-5 font-semibold text-gray-700">
          executive board
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exec.map((member) => (
            <AppWindow key={member.name}>
              <Image
                src={member.imageSrc}
                alt={`${member.name} - AppDev@MIT ${member.roles.join(
                  " and "
                )} member`}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">
                {member.name}{" "}
                <span className="text-gray-300"> / Class of {member.year}</span>
              </h3>
              <RoleBadges roles={member.roles} />
            </AppWindow>
          ))}
        </div>

        <h2 className="text-5xl mt-20 mb-5 font-semibold text-gray-700">
          developers
        </h2>
        <AppWindow>
          <div className="bg-gray-800 p-6 rounded-lg text-white font-mono">
            <p>
              <span className="text-appdev-purple">
                C:\proj\appdev-at-mit\developers&gt;
              </span>
              <span className="text-appdev-teal"> ls</span>
            </p>
            <div className="grid grid-cols-1 mt-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {developers.map((dev) => (
                <p key={dev}>{dev}</p>
              ))}
            </div>
          </div>
        </AppWindow>

        <h2 className="text-5xl mt-20 mb-5 font-semibold text-gray-700">
          alumni
        </h2>
        {alumni.map((group) => (
          <div key={group.semester} className="mb-4">
            <AppWindow>
              <div className="bg-gray-800 rounded-lg text-white font-mono overflow-hidden">
                <button
                  onClick={() => toggleAlumni(group.semester)}
                  className="w-full p-6 text-left hover:bg-gray-700 transition-colors rounded-lg"
                >
                  <p className="flex items-center justify-between">
                    <span>
                      <span className="text-appdev-purple">
                        C:\proj\appdev-at-mit\alumni\
                        {group.semester.toLowerCase().replace(" ", "-")}&gt;
                      </span>
                      <span className="text-appdev-teal"> ls</span>
                    </span>
                    <span
                      className={`text-2xl transition-transform duration-300 ${
                        openAlumni === group.semester ? "rotate-0" : "rotate-0"
                      }`}
                    >
                      {openAlumni === group.semester ? "-" : "+"}
                    </span>
                  </p>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openAlumni === group.semester
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {group.members.map((person) => (
                      <p key={person}>{person}</p>
                    ))}
                  </div>
                </div>
              </div>
            </AppWindow>
          </div>
        ))}
        <Link href="/apply" className="flex justify-center mt-10">
          <button className="bg-appdev-green text-white text-xl mt-5 cursor-pointer hover:brightness-110 w-60 py-2 rounded-full">
            Join us!
          </button>
        </Link>
        <Footer />
      </div>
    </div>
  );
}
