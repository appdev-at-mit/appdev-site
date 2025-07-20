import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import AppWindow from "@/app/components/appwindow";

export default function ApplyPage() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="mx-5 md:mx-10 lg:mx-30 pt-20 bg-gray-100 font-sans">
        <AppWindow>
          <h1 className="text-6xl mb-10 font-bold tracking-tight text-appdev-blue">
            apply to appdev
          </h1>
          <p className="text-2xl mb-5">
            We are excited to welcome new members to our community! Please fill
            out the application form below. We welcome applicants from all
            backgrounds and skill levels, whether you're a seasoned developer or
            just starting out.
            <br />
          </p>
          {/* Application form goes here */}
        </AppWindow>
        <Footer />
      </div>
    </div>
  );
}
