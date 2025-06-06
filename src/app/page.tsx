"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { 
  MapPinIcon, 
  ChartBarIcon, 
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline"
import Image from "next/image"
import DarkModeToggle from "@/components/DarkModeToggle/DarkModeToggle"

const GithubIcon = () => (
  <a href="https://github.com/ben-doyle" target="_blank" rel="noopener noreferrer">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  </a>
)

const BlueSkyIcon = () => (
  <a href="https://bsky.app/profile/imjackofitall.bsky.social" target="_blank" rel="noopener noreferrer">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 568 501">
      <path d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.209C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-119.86 122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.631-7.733-.017-2.875-1.169.506-3.631 7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.889-129.52 80.986-149.07-65.72 11.185-139.6-7.295-159.875-79.748C9.945 203.66 0 75.293 0 57.947 0-28.906 76.134-1.611 123.121 33.664Z"/>
    </svg>
  </a>
)

const LinkedinIcon = () => (
  <a href="https://www.linkedin.com/in/benjamin-doyle-aus/" target="_blank" rel="noopener noreferrer">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </a>
)

const InstagramIcon = ({ href }: { href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>
)

// Image modal component
const ImageModal = ({ 
  isOpen, 
  onClose, 
  imageSrc, 
  alt 
}: { 
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  alt: string 
}) => {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4"
      style={{ zIndex: 9999 }}
      onClick={onClose}
    >
      <div 
        className="max-w-5xl max-h-full relative bg-white rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>
        <Image
          src={imageSrc}
          alt={alt}
          width={1200}
          height={800}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
      </div>
    </div>
  )
}

// Sparkline component for mini charts
const Sparkline = ({ data, color = "#754043" }: { data: number[]; color?: string }) => {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100
      const y = 100 - ((value - min) / range) * 100
      return `${x},${y}`
    })
    .join(" ")

  return (
    <svg className="w-16 h-8" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline fill="none" stroke={color} strokeWidth="3" points={points} className="opacity-80" />
    </svg>
  )
}

// Project card component
const ProjectCard = ({
  title,
  description,
  tagline,
  logo,
  screenshots,
  isComingSoon = false,
  sparklineData,
  ctaText = "View Project",
  ctaLink = "#",
  showGrowth = false,
  instagramLink,
  onImageClick,
}: Project & { onImageClick: (imageSrc: string) => void }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showAllThumbnails, setShowAllThumbnails] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowAllThumbnails(false)
      }
    }

    if (showAllThumbnails) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showAllThumbnails])

  return (
    <div
      className={`card shadow-lg hover:shadow-xl transition-all duration-300 ease-out cursor-pointer h-full border ${
        isHovered ? "transform -translate-y-1" : ""
      } ${isComingSoon ? "opacity-75" : ""}`}
      style={{
        backgroundColor: 'var(--card-background)',
        borderColor: 'var(--border)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-body p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          {logo ? (
            <div className={`rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 ${
              screenshots && screenshots.length === 3 
                ? 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-12' 
                : 'w-12 h-12 sm:w-16 sm:h-12 md:w-20 md:h-12'
            }`}>
              <Image
                src={logo}
                alt={`${title} logo`}
                width={80}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className={`rounded-xl bg-gradient-to-br from-garnet to-beaver flex items-center justify-center flex-shrink-0 ${
              screenshots && screenshots.length === 3 
                ? 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-12' 
                : 'w-12 h-12 sm:w-16 sm:h-12 md:w-20 md:h-12'
            }`}>
              <span className="text-white font-bold text-xs sm:text-sm md:text-base">{title.charAt(0)}</span>
            </div>
          )}
          
          {screenshots && screenshots.length > 0 && (
            <div className="relative flex-shrink-0" ref={dropdownRef}>
              <div className="flex gap-2">
                {/* Show all thumbnails if 3 or fewer images */}
                {screenshots.length <= 3 ? (
                  screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => onImageClick(screenshot)}
                      className={`rounded-lg overflow-hidden border border-beaver/20 dark:border-beaver/30 hover:scale-105 hover:border-garnet hover:shadow-md transition-all duration-200 ${
                        screenshots.length === 3 
                          ? 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-12' 
                          : 'w-12 h-12 sm:w-16 sm:h-12 md:w-20 md:h-12'
                      }`}
                    >
                      <Image
                        src={screenshot}
                        alt={`${title} screenshot ${index + 1}`}
                        width={80}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))
                ) : (
                  /* For 4+ images: show first 2 + expandable "+N" button */
                  <>
                    {screenshots.slice(0, 2).map((screenshot, index) => (
                      <button
                        key={index}
                        onClick={() => onImageClick(screenshot)}
                        className="w-12 h-12 sm:w-16 sm:h-12 md:w-20 md:h-12 rounded-lg overflow-hidden border border-beaver/20 dark:border-beaver/30 hover:scale-105 hover:border-garnet hover:shadow-md transition-all duration-200"
                      >
                        <Image
                          src={screenshot}
                          alt={`${title} screenshot ${index + 1}`}
                          width={80}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setShowAllThumbnails(!showAllThumbnails)
                      }}
                      className="w-12 h-12 sm:w-16 sm:h-12 md:w-20 md:h-12 rounded-lg overflow-hidden border border-beaver/20 dark:border-beaver/30 flex items-center justify-center text-xs font-medium hover:scale-105 hover:border-garnet hover:shadow-md transition-all duration-200 relative"
                      style={{
                        backgroundColor: 'var(--muted)',
                        color: '#ffffff'
                      }}
                    >
                      +{screenshots.length - 2}
                      <ChevronDownIcon className={`w-2 h-2 sm:w-3 sm:h-3 ml-0.5 sm:ml-1 transition-transform duration-200 ${showAllThumbnails ? 'rotate-180' : ''}`} />
                    </button>
                  </>
                )}
              </div>
              
              {/* Dropdown gallery for remaining images */}
              {showAllThumbnails && screenshots.length > 3 && (
                <div className="absolute top-14 sm:top-14 md:top-14 right-0 z-10 bg-white dark:bg-gray-800 border border-beaver/20 dark:border-beaver/30 rounded-lg shadow-lg p-2 min-w-[120px] sm:min-w-[140px] md:min-w-[180px]">
                  <div className="grid grid-cols-2 gap-2">
                    {screenshots.slice(2).map((screenshot, index) => (
                      <button
                        key={index + 2}
                        onClick={() => {
                          onImageClick(screenshot)
                          setShowAllThumbnails(false)
                        }}
                        className="w-12 h-12 sm:w-16 sm:h-12 md:w-20 md:h-12 rounded-lg overflow-hidden border border-beaver/20 dark:border-beaver/30 hover:scale-105 hover:border-garnet hover:shadow-md transition-all duration-200"
                      >
                        <Image
                          src={screenshot}
                          alt={`${title} screenshot ${index + 3}`}
                          width={80}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="space-y-2 flex-grow">
          <h3 className="font-poppins font-semibold text-lg" style={{color: 'var(--heading)'}}>{title}</h3>
          <p className="text-sm font-dm-sans leading-relaxed" style={{color: 'var(--text-secondary)'}}>{description}</p>
          {tagline && <p className="text-xs font-dm-sans italic" style={{color: 'var(--muted)'}}>{tagline}</p>}
        </div>

        {showGrowth && sparklineData && !isComingSoon && (
          <div className="flex items-center justify-between py-3 mt-4">
            <span className="text-xs font-dm-sans" style={{color: 'var(--muted)'}}>Growth</span>
            <Sparkline data={sparklineData} color="#754043" />
          </div>
        )}

        <div className="mt-4 pt-4">
          {isComingSoon ? (
            <div className="flex items-center justify-center py-2">
              <span className="font-dm-sans text-sm" style={{color: 'var(--muted)'}}>Coming soon ✨</span>
            </div>
          ) : (
            <div className="space-y-3">
              {instagramLink && (
                <div className="flex justify-center">
                  <button className="btn btn-outline btn-circle border-beaver/20 dark:border-beaver/30 hover:border-garnet hover:bg-garnet/5 dark:hover:bg-garnet/10 text-beaver dark:text-beaver hover:text-garnet">
                    <InstagramIcon href={instagramLink} />
                  </button>
                </div>
              )}
              <button
                className="btn btn-primary w-full bg-garnet hover:bg-garnet/90 text-white rounded-full font-dm-sans text-sm transition-all duration-200 border-0"
                onClick={() => window.open(ctaLink, "_blank")}
              >
                {ctaText}
                <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

// Type definitions
interface Project {
  title: string
  description: string
  tagline?: string
  logo?: string
  screenshots?: string[]
  isComingSoon?: boolean
  sparklineData?: number[]
  ctaText?: string
  ctaLink?: string
  showGrowth?: boolean
  instagramLink?: string
}

// Content constants to avoid duplication
const content = {
  name: "Benjamin Doyle",
  location: "Australia",
  mrr: "$<1k MRR",
  tagline: "AI enthusiast, Indie-Hacker & Software Engineer building products that matter ✨",
  ctaText: "Want to learn, or have me build your next project?",
  ctaTextMobile: "Want to learn to build your own products? Or have me build your next project?",
  emailPlaceholder: "Enter your email",
  emailButtonText: "Email me! ✉️",
}

// Reusable components to eliminate duplication
const Avatar = ({ size = "w-40 h-40" }: { size?: string }) => (
  <div className={`${size} rounded-full overflow-hidden shadow-lg border-4 mx-auto`} style={{borderColor: 'var(--card-background)'}}>
    <Image
      src="/ben_profile.png?height=160&width=160"
      alt="Benjamin"
      width={160}
      height={160}
      className="w-full h-full object-cover"
    />
  </div>
)

const SocialButtons = ({ className = "" }: { className?: string }) => (
  <div className={`flex justify-center gap-3 ${className}`}>
    <button className="btn btn-outline btn-circle border-beaver/20 dark:border-beaver/30 hover:border-garnet hover:bg-garnet/5 dark:hover:bg-garnet/10 text-beaver dark:text-beaver hover:text-garnet">
      <BlueSkyIcon />
    </button>
    <button className="btn btn-outline btn-circle border-beaver/20 dark:border-beaver/30 hover:border-garnet hover:bg-garnet/5 dark:hover:bg-garnet/10 text-beaver dark:text-beaver hover:text-garnet">
      <GithubIcon />
    </button>
    <button className="btn btn-outline btn-circle border-beaver/20 dark:border-beaver/30 hover:border-garnet hover:bg-garnet/5 dark:hover:bg-garnet/10 text-beaver dark:text-beaver hover:text-garnet">
      <LinkedinIcon />
    </button>
  </div>
)

const ProfileBadges = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div className={`flex justify-center gap-${isMobile ? '2' : '3'} ${isMobile ? 'flex-wrap' : ''}`}>
    <span className={`badge rounded-full px-3 py-1 ${isMobile ? 'text-xs' : ''}`} style={{backgroundColor: 'var(--muted)', color: '#ffffff', borderColor: 'var(--muted)'}}>
      <MapPinIcon className="w-3 h-3 mr-1" />
      {content.location}
    </span>
  </div>
)

const EmailSignup = ({ className = "" }: { className?: string }) => {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribe:", email)
    setEmail("")
  }

  return (
    <form onSubmit={handleSubscribe} className={`space-y-3 ${className}`}>
      <input
        type="email"
        placeholder={content.emailPlaceholder}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        className="input input-bordered w-full rounded-full border-beaver/20 dark:border-beaver/30 focus:border-garnet dark:focus:border-garnet font-dm-sans"
        style={{
          backgroundColor: 'var(--card-background)',
          color: 'var(--foreground)'
        }}
        required
      />
      <button
        type="submit"
        className="btn w-full rounded-full py-3 font-dm-sans transition-all duration-200 shadow-lg hover:shadow-xl border-0 text-base font-semibold"
        style={{
          background: 'linear-gradient(to right, var(--accent), var(--accent-alt))',
          color: '#ffffff'
        }}
      >
        {content.emailButtonText}
      </button>
    </form>
  )
}

const ProjectSection = ({ 
  title, 
  projects, 
  isMobile = false,
  onImageClick
}: { 
  title: string
  projects: Project[]
  isMobile?: boolean
  onImageClick: (imageSrc: string) => void
}) => (
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

export default function Portfolio() {
  const [showScrollArrow, setShowScrollArrow] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string>("")
  const cardsContainerRef = useRef<HTMLDivElement>(null)

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setModalOpen(true)
  }

  // Handle scroll to hide/show arrow
  useEffect(() => {
    const handleScroll = () => {
      if (cardsContainerRef.current) {
        const scrollY = cardsContainerRef.current.scrollTop
        setShowScrollArrow(scrollY < 50) // Hide after scrolling 50px
      }
    }

    const container = cardsContainerRef.current
    if (container) {
      // Check if container is actually scrollable
      const isScrollable = container.scrollHeight > container.clientHeight
      setShowScrollArrow(isScrollable) // Only show arrow if there's content to scroll
      
      if (isScrollable) {
        container.addEventListener('scroll', handleScroll, { passive: true })
        return () => container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // Handle wheel events on desktop to allow scrolling cards section from anywhere
  useEffect(() => {
    const handleWheel = (e: Event) => {
      const wheelEvent = e as WheelEvent
      // Only handle on desktop layout
      if (window.innerWidth >= 1024 && cardsContainerRef.current) {
        wheelEvent.preventDefault()
        cardsContainerRef.current.scrollTop += wheelEvent.deltaY
      }
    }

    const desktopContainer = document.querySelector('.hidden.lg\\:flex')
    if (desktopContainer) {
      desktopContainer.addEventListener('wheel', handleWheel, { passive: false })
      return () => desktopContainer.removeEventListener('wheel', handleWheel)
    }
  }, [])

  const sideProjects = [
    {
      title: "ShakkaShuffle",
      description: "Planning Poker, in Quokka style!",
      tagline: "Estimate, collaborate, and hang loose like the happiest animal on Earth.",
      logo: "/shaka-shuffle-logo.svg",
      screenshots: ["/ShakkaShuffle1.png"],
      ctaText: "Try ShakkaShuffle",
      ctaLink: "https://shakkashuffle.com",
      showGrowth: false,
    },
    {
      title: "Guiddr",
      description: "Discover and Share the Best Places in Your City with Your Team",
      tagline:
        "Explore your colleagues recommendations in your city, find the best coffee spots, bars, restaurants, and outdoor activities.",
      logo: "/guidr-logo.svg",
              screenshots: ["/guidr1.png", "/guidr2.png", "/guidr3.png"],
      ctaText: "Explore Guiddr",
      ctaLink: "https://guiddr.com",
      showGrowth: false,
    },
  ]

  const otherProjects = [
    {
      title: "DZDaisy",
      description:
        "Documenting my adventure restoring a '74 Volkswagen Kombi. From the ground up with a dream of a camper van, follow along as I bring this classic VW bus back to life.",
      logo: "/dzdaisy-logo.svg",
      screenshots: ["/dzdaisy1.png", "/dzdaisy2.png"],
      ctaText: "Follow Journey",
      ctaLink: "https://dzdaisy.blog",
      instagramLink: "http://instagram.com/thedzdaisy",
      showGrowth: false,
    },
    {
      title: "Geek Society - Indie Arcade",
      description:
        "A dedicated, free-play cabinet at Brisbane's 1-Up Arcade that rotates Australian indie games, turning everyday foot traffic into live play-tests and giving local studios a permanent stage beyond PAX.",
      logo: "/geeksociety-logo.png",
      screenshots: ["/indie-arcade.jpg"],
      ctaText: "Learn More",
      ctaLink: "https://geeksociety.com.au",
      showGrowth: false,
    },
  ]

  const clientJobs = [
    {
      title: "ShokkEvents",
      description:
        "The ticketing portal powering Queensland's largest hardstyle promoter, and their community, the shows range from small club nights to festival sized events.",
      ctaText: "View Case Study",
      ctaLink: "https://shokkevents.com",
      logo: "/shokkevents.png",
      screenshots: ["/shokkevents1.png"],
      showGrowth: false,
      isComingSoon: true
    },
    {
      title: "All-class cleaning",
      description:
        "Single-page site that pairs a bold mascot brand with a service checklist and before-after gallery, guiding homeowners from problem to \"Contact Us\" in one scroll.",
      ctaText: "View Project",
      ctaLink: "https://allclasscleaning.com.au",
      logo: "/all-class-logo.png",
      screenshots: ["/all-class1.png"],
      showGrowth: false,
      isComingSoon: true
    },
  ]

  return (
    <div className="min-h-screen font-dm-sans transition-colors duration-300" style={{backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen">
        {/* Left Column - Sticky Hero (35%) */}
        <div className="w-[35%] p-8 flex items-center relative">
          {/* Dark Mode Toggle */}
          <div className="absolute top-6 right-6">
            <DarkModeToggle />
          </div>
          
          <div className="w-full max-w-md mx-auto space-y-8">
            <div className="flex justify-center">
              <Avatar />
            </div>

            {/* Name and Info */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-poppins font-bold" style={{color: 'var(--heading)'}}>{content.name}</h1>
              <ProfileBadges />
              <p className="text-lg font-dm-sans leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                {content.tagline}
              </p>
              <p className="text-sm font-dm-sans" style={{color: 'var(--muted)'}}>
                <ChartBarIcon className="w-4 h-4 inline mr-1" />
                {content.ctaText}
              </p>
            </div>

            <EmailSignup />
            <SocialButtons />
          </div>

          {/* Bouncing Scroll Arrow */}
          {showScrollArrow && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce">
              <ChevronDownIcon 
                className="w-6 h-6 opacity-60 transition-opacity duration-300" 
                style={{color: 'var(--muted)'}}
              />
            </div>
          )}
        </div>

        {/* Right Column - All Projects (65%) */}
        <div ref={cardsContainerRef} className="w-[65%] p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto space-y-12">
            <ProjectSection title="My side projects 🚀" projects={sideProjects} onImageClick={openModal} />
            <ProjectSection title="Other projects 🛠️" projects={otherProjects} onImageClick={openModal} />
            <ProjectSection title="Client jobs 💼" projects={clientJobs} onImageClick={openModal} />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Header with Dark Mode Toggle */}
        <div className="p-4 flex justify-end">
          <DarkModeToggle />
        </div>
        
        {/* Mobile Hero */}
        <div className="p-6 space-y-6">
          <div className="text-center space-y-4">
            <Avatar size="w-32 h-32" />
            <h1 className="text-3xl font-poppins font-bold" style={{color: 'var(--heading)'}}>{content.name}</h1>
            <ProfileBadges isMobile />
            <p className="text-base font-dm-sans leading-relaxed" style={{color: 'var(--text-secondary)'}}>
              {content.tagline}
            </p>
            <p className="text-sm text-beaver dark:text-beaver/80 font-dm-sans">
              <ChartBarIcon className="w-4 h-4 inline mr-1" />
              {content.ctaTextMobile}
            </p>
          </div>

          <EmailSignup className="space-y-3" />
          <SocialButtons />
        </div>

        {/* Mobile Cards */}
        <div className="p-6 space-y-8">
          <ProjectSection title="My side projects 🚀" projects={sideProjects} isMobile onImageClick={openModal} />
          <ProjectSection title="Other projects 🛠️" projects={otherProjects} isMobile onImageClick={openModal} />
          <ProjectSection title="Client jobs 💼" projects={clientJobs} isMobile onImageClick={openModal} />
        </div>
      </div>

      {/* Global Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={selectedImage}
        alt="Project screenshot"
      />
    </div>
  )
}
