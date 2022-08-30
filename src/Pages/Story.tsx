import React, { useState, useEffect } from "react";
import Maserati6 from "../assets/Maserati6.jpg";
import Maserati5 from "../assets/Maserati5.jpg";
import Maserati11 from "../assets/Maserati11.jpg";
import Maserati26 from "../assets/Maserati26.jpg";
import Maserati29 from "../assets/Maserati29.jpg";
import Maserati31 from "../assets/Maserati31.jpg";
import Maserati35 from "../assets/Maserati35.jpg";
import { createClient } from "contentful";
import { useNavigate, useParams } from "react-router-dom";
import Stories from "../components/Stories";
function Story() {
  const { id } = useParams();

  const navigate = useNavigate();

  console.log(id);
  const [story, setStory] = useState();
  const [description, setDescription] = useState("blank");
  const [title, setTitle] = useState("blank");
  const [photos, setPhotos] = useState([{ fields: { file: { url: "" } } }]);

  const client = createClient({
    space: process.env.REACT_APP_NOWAK_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.REACT_APP_NOWAK_CONTENTFUL_DELIVERY!,
  });
  useEffect(() => {
    const execute = async () => {
      try {
        const res: any = await client.getEntry(id || "null");
        //setStory(res);

        setDescription(res.fields.description);
        setTitle(res.fields.title);
        setPhotos(res.fields.photos);

        console.log(res.fields);
      } catch (err) {
        navigate("/not-found");
        console.log(err);
      }
      // const res = await client.getEntries({ content_type: "story" });
    };
    execute();
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto pt-16 text-black ">
      <div className="flex flex-col items-center">
        <h1>{title}</h1>
        <p className="text-center pt-4">{description}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 mx-4 mt-16 mb-8 gap-2">
          {photos.map((photo) => (
            <img src={photo.fields.file.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Story;
