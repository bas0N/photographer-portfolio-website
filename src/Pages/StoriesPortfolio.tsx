import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contentfulClient } from "../config/contentful";
import { Link } from "react-router-dom";
import { FaPhotoVideo } from "react-icons/fa";

function StoriesPortfolio() {
  const navigate = useNavigate();
  const [stories, setStories] = useState([
    {
      fields: {
        title: "blank",
        mainPhoto: { fields: { file: { url: "" } } },
      },
      sys: { id: "null" },
    },
  ]);
  useEffect(() => {
    const execute = async () => {
      try {
        const res: any = await contentfulClient.getEntries({
          content_type: "story",
        });
        if (res.items.length === 0) {
          navigate("/not-found");
        }
        setStories(res.items);
      } catch (err) {
        navigate("/not-found");
        console.log(err);
      }
      // const res = await client.getEntries({ content_type: "story" });
    };
    execute();
  }, []);
  return (
    <div className=" h-screen max-w-[1440px] mx-auto w-full mb-8">
      <div className="flex flex-col ">
        <div className="ml-8  ">
          <h1 className="text-7xl md:text-8xl font-extralight">HISTORIE</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 mx-auto">
          {stories.map((story) => (
            <Link to={`/stories/${story.sys.id}`}>
              <div className="relative">
                <img
                  className="object-cover w-80 h-80"
                  src={story.fields.mainPhoto.fields.file.url}
                />
                <div className="hover:bg-gray-900/30   absolute top-0 left-0 w-full h-full">
                  <p className="left-4 bottom-4 text-2xl font-extralight text-white absolute">
                    {story.fields.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoriesPortfolio;
