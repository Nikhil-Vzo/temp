import React, { useState, memo } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = memo(({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  
  const handleMouseEnter = () => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setPreview(image);
    }
  };
  
  const handleMouseLeave = () => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setPreview(null);
    }
  };

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0 group cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <p className="text-2xl font-medium text-white group-hover:text-accent transition-colors">{title}</p>
          <div className="flex gap-3 mt-2 text-accent/80 font-mono text-xs">
            {tags.map((tag) => (
              <span key={tag.id} className="border border-accent/30 px-2 py-0.5 rounded text-accent/80">{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer text-sm text-text-muted hover:text-accent transition-colors"
        >
          View Details
          <img src="assets/arrow-right.svg" className="w-5 invert opacity-60" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-accent/20 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
});

export default Project;
