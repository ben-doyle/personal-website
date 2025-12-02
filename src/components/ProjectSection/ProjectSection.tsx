import { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { ProjectCard, type Project } from "@/components/ProjectCard/ProjectCard"

interface ProjectSectionProps {
  title: string
  projects: Project[]
  isMobile?: boolean
  onImageClick: (imageSrc: string) => void
}

export const ProjectSection = ({ 
  title, 
  projects, 
  isMobile = false,
  onImageClick
}: ProjectSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const maxIndex = Math.max(0, projects.length - 2)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  }

  if (isMobile) {
    return (
      <section className="space-y-4">
        <h2 className="text-xl font-poppins font-bold" style={{color: 'var(--heading)'}}>
          {title}
        </h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} onImageClick={onImageClick} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-poppins font-bold" style={{color: 'var(--heading)'}}>
        {title}
      </h2>
      
      <div className="relative group">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-1/2 flex-shrink-0 px-3">
                <ProjectCard {...project} onImageClick={onImageClick} />
              </div>
            ))}
          </div>
        </div>

        {projects.length > 2 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-garnet hover:bg-garnet/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg z-10"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-garnet hover:bg-garnet/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg z-10"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-4">
              {projects.slice(0, -1).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-garnet w-8"
                      : "bg-gray-300 dark:bg-gray-600 w-2 hover:bg-garnet/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
