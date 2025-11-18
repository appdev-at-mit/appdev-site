import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import AppWindow from "@/app/components/appwindow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply to AppDev",
  description:
    "Join MIT's fastest-growing web and mobile app development club. Applications open each semester for students of all skill levels.",
  keywords: [
    "mit app dev application",
    "apply mit app dev",
    "join mit app development",
    "mit programming club application",
    "mit coding club recruitment",
    "mit software club join",
  ],
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-1 mx-5 md:mx-10 lg:mx-30 pt-20 bg-gray-100 font-sans">
        <AppWindow>
          <h1 className="text-6xl mb-10 font-bold tracking-tight text-appdev-blue">
            apply to appdev
          </h1>
          <p className="text-2xl mb-5">
            We are excited to welcome new members to our community! We recruit
            at the start of each semester.{" "}
            <a
              href="https://forms.gle/odJsoojYr2Ln1o7Y7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-appdev-blue hover:underline"
            >
              Sign up on our mailing list for updates!
            </a>{" "}
            We welcome applicants from all backgrounds and skill levels, whether
            you're a seasoned developer or just starting out.
            <br />
          </p>
          {/* Application form goes here */}
        </AppWindow>
      </div>
      <div className="mx-5 md:mx-10 lg:mx-30">
        <Footer />
      </div>
    </div>
  );
}
