import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import AppWindow from "@/app/components/appwindow";
import { featuredProjects } from "./projectdetails";
import Image from "next/image";

export default function ProductsPage() {
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
              products
            </h1>
            <p className="text-2xl mb-5">
              Our products are our pride and joy. We're building apps to help
              students plan their academic career, find places to live, get
              around campus, and so much more. Each app is inspired by a problem
              we've seen in the world and are motivated to solve.
            </p>
            <hr className="text-gray-200" />
            <p className="font-mono py-2 tracking-widest text-gray-300 uppercase">
              &lt;/div&gt;
            </p>
          </div>
          <div className="hidden w-full lg:w-1/2 justify-center items-center relative sm:flex">
            <Image
              src="/presenter.jpg"
              alt="Products"
              width={200}
              height={200}
              className="w-full border rounded-lg shadow-lg shadow-gray-200"
            />
            <div className="absolute -top-0 -right-10 w-30 h-30 bg-appdev-purple/30 rounded-lg"></div>
            <div className="absolute top-20 -left-20 w-40 h-40 bg-appdev-green/30 rounded-lg"></div>
            <div className="absolute -bottom-0 right-10 w-20 h-20 bg-appdev-blue/30 rounded-lg"></div>
          </div>
        </div>
        <h2 className="text-5xl mt-20 mb-5 font-semibold text-gray-700">
          featured projects
        </h2>
        {featuredProjects.map((project) => (
          <div key={project.title}>
            <AppWindow>
              <div className="md:flex justify-center mb-5">
                <div className="w-full lg:w-1/2 mb-5 md:pr-5">
                  <h3 className="text-3xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-xl mb-5">{project.description}</p>
                  <p className="text-xl text-gray-500">{project.team}</p>
                </div>
                <div className="w-full lg:w-1/2 justify-center items-center">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={400}
                    height={400}
                    className="rounded-lg border-1 border-gray-300 w-full"
                  />
                </div>
              </div>
            </AppWindow>
            <div className="mt-10"></div>
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
}
