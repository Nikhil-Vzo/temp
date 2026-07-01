import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div 
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-sm bg-void/80"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col border border-accent/30 shadow-[0_0_40px_#33c2cc15] rounded-2xl bg-surface/95 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-sm top-5 right-5 bg-surface/85 border border-accent/30 hover:bg-accent/15 text-accent text-xs font-mono backdrop-blur cursor-pointer transition-colors"
        >
          Close
        </button>
        <div className="overflow-y-auto w-full h-full">
          <img src={image} alt={title} className="w-full opacity-80" />
          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
            <p className="mb-3 font-normal text-text-muted text-sm">{description}</p>
            <div className="space-y-2 mt-4">
              {subDescription.map((subDesc, index) => (
                <p className="font-normal text-text-muted text-sm leading-relaxed" key={index}>
                  <span className="text-accent mr-2">›</span>{subDesc}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-border/50">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="px-2.5 py-1 border border-accent/20 bg-accent/5 rounded text-xs font-mono text-accent"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium cursor-pointer text-accent text-sm hover:underline"
              >
                View Source 
                <img src="assets/arrow-up.svg" className="size-4 invert opacity-80" alt="View Source" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
