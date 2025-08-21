'use client';

import Image from "next/image";
import Navbar from "./components/navbar";
import AppWindow from "./components/appwindow";
import Link from "next/link";
import Footer from "./components/footer";
import Badges from "./components/badges";
import { useEffect, useState } from "react";

function BlogComponent() {
  const API_URL = "https://appdev-blog.vercel.app/api";
  type Author = {
    id: string;
    name: string;
  };
  type Post = {
    id: string;
    title: string;
    author: Author;
    date: string;
    tags: string[];
    content: string;
    image?: string;
    excerpt?: string;
    important?: boolean;
  };
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          API_URL
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }
    fetchPosts();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <Link
          href={`https://appdev-blog.vercel.app/posts/${post.id}`}
          key={post.id}
          className={post.important ? "col-span-1 md:col-span-2" : ""}
        >
          <AppWindow color={(index % 5) + 1}>
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="font-mono uppercase text-sm pb-3">
              {post.author.name} |{" "}
              {new Date(post.date).toLocaleDateString()}
            </p>
            {post.excerpt && <p className="pb-3">{post.excerpt}</p>}
            <Badges tags={post.tags} color={(index % 5) + 1} />
          </AppWindow>
        </Link>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Navbar />
      <div className="mx-5 md:mx-10 lg:mx-30 pt-20 bg-gray-100 font-sans">
        {/* HEADER */}
        <div className="lg:flex justify-between border-l border-gray-200">
          <div>
            <p className="font-mono py-2 tracking-widest text-gray-300 uppercase">
              &lt;div className="p-20 bg-gray-100 font-sans"&gt;
            </p>
            <hr className="text-gray-200" />
            <h1 className="text-6xl md:text-8xl mb-4 font-bold lowercase tracking-tight text-gray-800">
              CULTIVATE SKILLS.
              <br />
              CREATE IMPACT.
            </h1>
            <h2 className="text-2xl mb-3 lowercase text-gray-700">
              MIT'S FASTEST-GROWING SOFTWARE DEVELOPMENT COMMUNITY.
            </h2>
            <hr className="text-gray-200" />
            <p className="font-mono py-2 tracking-widest text-gray-300 uppercase">
              &lt;/div&gt;
            </p>
          </div>
          <div className="hidden w-full lg:w-1/3 justify-center items-center relative sm:flex">
            <Image
              src="/fullclub2.jpg"
              alt="Logo"
              width={200}
              height={200}
              className="w-full border rounded-lg shadow-lg shadow-gray-200"
            />
            {/* interesting floating elements */}
            <div className="absolute -top-0 -right-10 w-30 h-30 bg-appdev-purple/30 rounded-lg"></div>
            <div className="absolute top-20 -left-20 w-40 h-40 bg-appdev-green/30 rounded-lg"></div>
            <div className="absolute -bottom-0 right-10 w-20 h-20 bg-appdev-blue/30 rounded-lg"></div>
          </div>
        </div>
        {/* CONTENT SECTIONS */}
        <div className="mt-20"></div>
        <AppWindow>
          <h2 className="text-4xl md:text-6xl mt-10 mb-5 font-bold tracking-tight text-appdev-blue">
            what we do
          </h2>
          <p className="text-2xl mb-3">
            Our mission is to build web and mobile applications with the goal
            of:
          </p>
          <ul className="list-decimal list-inside text-2xl mb-5 space-y-1">
            <li>
              Serving students, campus groups, and local businesses and
              organizations.
            </li>
            <li>
              Fostering practical skills in software development, product
              management, design, and marketing.
            </li>
          </ul>
        </AppWindow>
        <div className="mt-20"></div>
        <AppWindow>
          <h2 className="text-4xl md:text-6xl mt-10 mb-5 font-bold tracking-tight text-appdev-green">
            what we're building
          </h2>
          <p className="text-2xl mb-5">Some of the things we're working on.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="w-full">
              <div className="flex justify-center mb-8">
                <Image
                  src="/mapit.png"
                  alt="Mapit"
                  width={375}
                  height={250}
                  className="rounded-lg border-1 border-gray-300"
                />
              </div>
              <h4 className="text-xl font-semibold">MapIT</h4>
              <p className="text-base font-light">
                MapIT is a comprehensive campus map that helps you find your way
                around MIT. It provides room-level search resolution, popular
                locations pins, and an indoor navigation planner you won't find
                anywhere else.
              </p>
            </div>
            <div className="w-full">
              <div className="flex justify-center mb-8">
                <Image
                  src="/fullhouse.png"
                  alt="Full House"
                  width={375}
                  height={250}
                  className="rounded-lg border-1 border-gray-300"
                />
              </div>
              <h4 className="text-xl font-semibold">Full House</h4>
              <p className="text-base font-light">
                Are you looking for summer housing near MIT or your internship?
                This project will let you find affordable accommodations and
                connect you with other MIT students living in the same area.
              </p>
            </div>
            <div className="w-full">
              <div className="flex justify-center mb-8">
                <Image
                  src="/clubs.jpg"
                  alt="Beaver Clubs"
                  width={375}
                  height={250}
                  className="rounded-lg border-1 border-gray-300"
                />
              </div>
              <h4 className="text-xl font-semibold">Beaver Clubs</h4>
              <p className="text-base font-light">
                There are too many clubs and organizations to keep track of.
                Browse MIT's full list of clubs, and filter by club size, focus,
                and recruiting status to find your fit.
              </p>
            </div>
          </div>
          <Link href="/products" className="flex justify-center mt-10">
            <button className="bg-appdev-green text-white text-xl mt-5 cursor-pointer hover:brightness-110 w-60 py-2 rounded-full">
              See more projects
            </button>
          </Link>
        </AppWindow>
        <div className="mt-20"></div>
        <AppWindow>
          <h2 className="text-4xl md:text-6xl mt-10 mb-5 font-bold tracking-tight text-appdev-teal">
            news and ramblings
          </h2>
          <p className="text-2xl mb-10">
            announcements, updates, and stories from our members.
          </p>
          <BlogComponent />
          <Link href="https://appdev-blog.vercel.app" className="flex justify-center mt-10">
            <button className="bg-appdev-teal text-white text-xl mt-5 cursor-pointer hover:brightness-110 w-60 py-2 rounded-full">
              Read our blog
            </button>
          </Link>
        </AppWindow>
        <div className="mt-20"></div>
        <AppWindow>
          <h2 className="text-4xl md:text-6xl mt-10 mb-5 font-bold tracking-tight text-appdev-purple">
            powered by
          </h2>
          <p className="text-2xl mb-5">
            caffeine pills and our amazing sponsors.
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-12">
            <div>
              <Link href="https://www.convex.dev/" target="_blank">
                <Image
                  src="/convex-logo.svg"
                  alt="Convex Logo"
                  width={350}
                  height={200}
                  className="mx-auto"
                />
              </Link>
            </div>
            <div>
              <Link
                href="https://www.warp.dev/?utm_source=mit_fullstack&utm_medium=newsletter&utm_campaign=fullstack_20241107"
                target="_blank"
              >
                <Image
                  src="/warp-logo.png"
                  alt="Warp Logo"
                  width={230}
                  height={200}
                  className="mx-auto"
                />
              </Link>
            </div>
          </div>
          <Link href="/products" className="flex justify-center mt-10">
            <button className="bg-appdev-purple text-white text-xl mt-5 cursor-pointer hover:brightness-110 w-60 py-2 rounded-full">
              Support us!
            </button>
          </Link>
        </AppWindow>
        <Footer />
      </div>
    </div>
  );
}
