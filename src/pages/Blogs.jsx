import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Blogs = () => {
  const data = useLoaderData();
  console.log(data);

  const Card = ({ title, body, id }) => (
    <article className="bg-gray-700 rounded-lg overflow-hidden">
      <Link to={`/blog/${id}`}>
        <figure className="aspect-video">
          <img
            className="w-full"
            src="https://via.placeholder.com/1280x720"
            alt=""
          />
        </figure>
        <div className="p-2">
          <h1 className="text-white font-bold text-xl">{title}</h1>
          <p className="text-gray-500">{body}</p>
        </div>
      </Link>
    </article>
  );

  return (
    <div className="container mx-auto p-3">
      <h1 className="text-white font-bold text-4xl">Aprende algo nuevo</h1>
      <p className="text-gray-300 text-sm mb-3">
        En zeew Space puedes aprender nuevas habilidades, que quieres apreder
        hoy?
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {data.map((item, index) => <Card key={index} id={item.id} title={item.title} body={item.body}/>)}
      </section>
    </div>
  );
};

export default Blogs;
