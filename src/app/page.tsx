"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChartBarIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import DarkModeToggle from "@/components/DarkModeToggle/DarkModeToggle"
import { ImageModal } from "@/components/ImageModal/ImageModal"
import { ProjectSection } from "@/components/ProjectSection/ProjectSection"
import { Avatar, SocialButtons, ProfileBadges, EmailSignup, BlogLink } from "@/components/UI"

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
      screenshots: ["/ShakkaShuffle1.png", "/ShakkaShuffle2.png", "/ShakkaShuffle3.png", "/ShakkaShuffle4.png"],
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
      ctaLink: "https://dzdaisy.com",
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
      ctaLink: "https://geeksociety.com.au/2017/11/08/introducing-the-indie-arcade/",
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
      title: "All-class cleaning & yard maintenance",
      description:
        "I have designed the brand, logo, and website for a local cleaning company. The website is a single-page site that pairs a bold mascot brand with a service checklist and before-after gallery, guiding homeowners from problem to \"Contact Us\" in one scroll.",
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
              <ProfileBadges location={content.location} />
              <p className="text-lg font-dm-sans leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                {content.tagline}
              </p>
              <p className="text-sm font-dm-sans" style={{color: 'var(--muted)'}}>
                <ChartBarIcon className="w-4 h-4 inline mr-1" />
                {content.ctaText}
              </p>
            </div>

            <EmailSignup emailPlaceholder={content.emailPlaceholder} emailButtonText={content.emailButtonText} />
            <BlogLink />
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
            <ProfileBadges isMobile location={content.location} />
            <p className="text-base font-dm-sans leading-relaxed" style={{color: 'var(--text-secondary)'}}>
              {content.tagline}
            </p>
            <p className="text-sm font-dm-sans" style={{color: 'var(--muted)'}}>
              <ChartBarIcon className="w-4 h-4 inline mr-1" />
              {content.ctaTextMobile}
            </p>
          </div>
          <EmailSignup className="space-y-3" emailPlaceholder={content.emailPlaceholder} emailButtonText={content.emailButtonText} />
          <BlogLink />
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
