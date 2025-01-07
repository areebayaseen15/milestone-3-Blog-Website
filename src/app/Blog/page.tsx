"use client";

import Link from "next/link";
import BlogCard from "../component/BlogCard";

const data = [
  {
    id: 1,
    image: "/Assets/Blog1.webp",
    title: "Mexico: A Culinary Journey",
    description:
      "When you think of Mexico, images of sun-soaked beaches, vibrant festivals, and colorful traditions may come to mind. But there’s another aspect of Mexican culture that holds an irresistible charm—its food.....",
  },
  {
    id: 2,
    image: "/Assets/Budget-Travel.webp",
    title: "5 Tips For Budget Travelers",
    description:
      "Traveling on a budget doesn’t mean you have to sacrifice comfort or miss out on the best experiences. With a little planning and creativity, you can enjoy an amazing trip without breaking the bank....",
  },
  {
    id: 3,
    image: "/Assets/diving-spots.webp",
    title: "The Most Amazing Diving Spots",
    description:
      "If you’re a fan of the ocean and all its wonders, diving is an experience like no other. From colorful coral reefs to mysterious shipwrecks, the underwater world is full of surprises....",
  },
  {
    id: 4,
    image: "/Assets/markets.webp",
    title: "5 Food Markets Around The World",
    description:
      "One of the best ways to experience a new culture is through its food. And what better place to sample local delicacies than a bustling food market?....",
  },
  {
    id: 5,
    image: "/Assets/hikes.webp",
    title: "Top Hikes in Australia",
    description:
      "Australia is a hiker’s paradise, with a diverse range of landscapes and trails to explore. From rugged mountain ranges to lush rainforests, the country offers some of the best hiking experiences in the world....",
  },
  {
    id: 6,
    image: "/Assets/trip.webp",
    title: "Asia Trip: Off the Beaten Path",
    description:
      "Asia is a continent of contrasts, with bustling cities, ancient temples, and stunning natural landscapes. While popular destinations like Thailand and Japan attract millions of visitors each year, there are plenty of hidden gems to discover off the beaten path....",
  },
  {
    id: 7,
    image: "/Assets/rising-sense.webp",
    title: "The Rising Sense of Wanderlust",
    description:
      "Wanderlust is a powerful feeling that drives us to explore new places, try new things, and meet new people. But what causes this sense of wanderlust, and how can we nurture it in our own lives?....",
  },
  {
    id: 8,
    image: "/Assets/digital.jpeg",
    title: "Lessons From a Digital Nomad",
    description:
      "The digital nomad lifestyle has become increasingly popular in recent years, with more and more people choosing to work remotely and travel the world. But what is it really like to be a digital nomad?....",
  },
];

export default function Blog() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-40">
      <h1 className="mt-10 text-center text-slate-700 text-4xl font-bold">
        Blog
      </h1>
      <div>
        <div className="flex gap-5 xl:gap-10 mt-10 justify-center md:justify-start md:ml-10">
          <Link href="#" className="text-slate-600 hover:text-slate-800">
            All Posts
          </Link>
          <Link href="#" className="text-slate-600 hover:text-slate-800">
            Recent
          </Link>
        </div>

        <div className="posts mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
  {data.map((elem) => (
    <div
      key={elem.id}
      className="transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
    >
      <BlogCard
        id={elem.id}
        image={elem.image}
        title={elem.title}
        description={elem.description}
      />
    </div>
  ))}
</div>
      </div>
    </div>
  );
}
