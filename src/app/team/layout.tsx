import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the team of software engineers, web and mobile app developers, UI/UX designers, and product managers at AppDev@MIT.",
  keywords: [
    "mit app dev",
    "mit web development club",
    "mit app development club",
    "mit mobile app club",
    "mit web app club",
    "mit programming club",
    "mit coding club",
    "mit software student organization",
    "mit software club",
    "mit full stack club",
    "mit app dev team",
    "mit app dev members",
  ],
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
