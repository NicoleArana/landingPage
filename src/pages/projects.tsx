import React from "react";
import Title from "~/components/ui/title";
import Image from "next/image";

interface ProjectsProps {
  color: string;
  position: string;
  title: string;
  description: string;
  link: string;
  images: string[];
  type: "WEB" | "MOBILE" | "other";
}
const Projects: React.FC<ProjectsProps> = ({ type, images }) => {
  return (
    <div>
      <Title text={`${type} DEVELOPMENT`} />
      <div className="flex flex-row gap-4">
        {images.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt="project"
            width={384}
            height={384}
            className="h-96 w-96"
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
