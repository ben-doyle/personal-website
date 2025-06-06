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
}: ProjectSectionProps) => (
  <section className="space-y-4">
    <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-poppins font-bold`} style={{color: 'var(--heading)'}}>
      {title}
    </h2>
    <div className={isMobile ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} onImageClick={onImageClick} />
      ))}
    </div>
  </section>
) 