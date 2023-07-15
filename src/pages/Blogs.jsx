import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="container mx-auto p-3">
      <h1 className="text-white font-bold text-4xl">Aprende algo nuevo</h1>
      <p className="text-gray-300 text-sm mb-3">
        En zeew Space puedes aprender nuevas habilidades, que quieres apreder
        hoy?
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <article className="bg-gray-700 rounded-lg overflow-hidden">
          <Link to='/blog/1'>
            <figure className="aspect-video">
              <img
                className="w-full"
                src="https://cdn.discordapp.com/attachments/1038187542257872916/1093592386808053972/HTML-CSS.png"
                alt=""
              />
            </figure>
            <div className="p-2">
              <h1 className="text-white font-bold text-xl">HTML Y CSS</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                optio aperiam qui.
              </p>
            </div>
          </Link>
        </article>
      </section>
    </div>
  );
};

export default Blogs;
