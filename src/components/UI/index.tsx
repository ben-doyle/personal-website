import { useState } from "react"
import { MapPinIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { GithubIcon, BlueSkyIcon, LinkedinIcon, TwitterIcon, ResumeIcon } from "@/components/SocialIcons"

interface AvatarProps {
  size?: string
}

export const Avatar = ({ size = "w-40 h-40" }: AvatarProps) => (
  <div className={`${size} rounded-full overflow-hidden border-4 mx-auto`} style={{borderColor: 'var(--card-background)'}}>
    <Image
      src="/ben-profile.jpg?height=160&width=160"
      alt="Benjamin"
      width={160}
      height={160}
      className="w-full h-full object-cover"
    />
  </div>
)

interface SocialButtonsProps {
  className?: string
}

export const SocialButtons = ({ className = "" }: SocialButtonsProps) => (
  <div className={`flex justify-center gap-3 ${className}`}>
    <button
      className="btn btn-outline btn-circle hover:scale-105 transition-all duration-200"
      style={{
        borderColor: 'var(--muted)',
        color: 'var(--text-secondary)',
        backgroundColor: 'transparent'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)'
        e.currentTarget.style.backgroundColor = 'var(--accent)'
        e.currentTarget.style.color = '#ffffff'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--muted)'
        e.currentTarget.style.backgroundColor = 'transparent'
        e.currentTarget.style.color = 'var(--text-secondary)'
      }}
    >
      <ResumeIcon />
    </button>
    <button
      className="btn btn-outline btn-circle hover:scale-105 transition-all duration-200"
      style={{
        borderColor: 'var(--muted)',
        color: 'var(--text-secondary)',
        backgroundColor: 'transparent'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)'
        e.currentTarget.style.backgroundColor = 'var(--accent)'
        e.currentTarget.style.color = '#ffffff'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--muted)'
        e.currentTarget.style.backgroundColor = 'transparent'
        e.currentTarget.style.color = 'var(--text-secondary)'
      }}
    >
      <BlueSkyIcon />
    </button>
    <button
      className="btn btn-outline btn-circle hover:scale-105 transition-all duration-200"
      style={{
        borderColor: 'var(--muted)',
        color: 'var(--text-secondary)',
        backgroundColor: 'transparent'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)'
        e.currentTarget.style.backgroundColor = 'var(--accent)'
        e.currentTarget.style.color = '#ffffff'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--muted)'
        e.currentTarget.style.backgroundColor = 'transparent'
        e.currentTarget.style.color = 'var(--text-secondary)'
      }}
    >
      <TwitterIcon />
    </button>
    <button
      className="btn btn-outline btn-circle hover:scale-105 transition-all duration-200"
      style={{
        borderColor: 'var(--muted)',
        color: 'var(--text-secondary)',
        backgroundColor: 'transparent'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)'
        e.currentTarget.style.backgroundColor = 'var(--accent)'
        e.currentTarget.style.color = '#ffffff'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--muted)'
        e.currentTarget.style.backgroundColor = 'transparent'
        e.currentTarget.style.color = 'var(--text-secondary)'
      }}
    >
      <GithubIcon />
    </button>
    <button
      className="btn btn-outline btn-circle hover:scale-105 transition-all duration-200"
      style={{
        borderColor: 'var(--muted)',
        color: 'var(--text-secondary)',
        backgroundColor: 'transparent'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)'
        e.currentTarget.style.backgroundColor = 'var(--accent)'
        e.currentTarget.style.color = '#ffffff'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--muted)'
        e.currentTarget.style.backgroundColor = 'transparent'
        e.currentTarget.style.color = 'var(--text-secondary)'
      }}
    >
      <LinkedinIcon />
    </button>
  </div>
)

interface ProfileBadgesProps {
  isMobile?: boolean
  location: string
}

export const ProfileBadges = ({ isMobile = false, location }: ProfileBadgesProps) => (
  <div className={`flex justify-center gap-${isMobile ? '2' : '3'} ${isMobile ? 'flex-wrap' : ''}`}>
    <span
      className={`badge rounded-full px-3 py-1 ${isMobile ? 'text-xs' : ''}`}
      style={{
        backgroundColor: 'var(--accent)',
        color: '#ffffff',
        borderColor: 'var(--accent)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <MapPinIcon className="w-3 h-3 mr-1" />
      {location}
    </span>
  </div>
)

interface EmailSignupProps {
  className?: string
  emailPlaceholder: string
  emailButtonText: string
}

export const EmailSignup = ({ className = "", emailPlaceholder, emailButtonText }: EmailSignupProps) => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')
    setMessage("")

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage("Thanks! I'll get back to you soon 🚀")
        setEmail("")
      } else {
        setStatus('error')
        setMessage(result.error || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus('error')
      setMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
      // Clear status message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage("")
      }, 5000)
    }
  }

  return (
    <form onSubmit={handleSubscribe} className={`space-y-3 ${className}`}>
      <input
        type="email"
        placeholder={emailPlaceholder}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        className="input w-full rounded-full font-dm-sans transition-all duration-200"
        style={{
          backgroundColor: 'var(--card-background)',
          color: 'var(--foreground)',
          borderColor: 'var(--muted)',
          borderWidth: '1px'
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'var(--accent)'
          e.currentTarget.style.outline = 'none'
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'var(--muted)'
        }}
        required
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className={`btn w-full rounded-full py-3 font-dm-sans transition-all duration-200 shadow-lg hover:shadow-xl border-0 text-base font-semibold ${
          isLoading ? 'opacity-70 cursor-not-allowed' : ''
        }`}
        style={{
          background: 'linear-gradient(to right, var(--accent), var(--accent-alt))',
          color: '#ffffff'
        }}
      >
        {isLoading ? "Sending..." : emailButtonText}
      </button>

      {/* Status Message */}
      {message && (
        <div
          className="text-center text-sm font-dm-sans py-2 px-3 rounded-full transition-all duration-300"
          style={{
            backgroundColor: 'var(--card-background)',
            color: status === 'success'
              ? 'var(--accent)'
              : status === 'error'
              ? '#dc2626'
              : 'var(--foreground)',
            border: `1px solid ${status === 'success'
              ? 'var(--accent)'
              : status === 'error'
              ? '#dc2626'
              : 'var(--border)'}`,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          {message}
        </div>
      )}
    </form>
  )
}

export const BlogLink = ({ className = "" }: { className?: string }) => (
  <div className={`text-center ${className}`}>
    <a
      href="https://blog.imjackofitall.com"
      className="inline-flex items-center gap-2 text-sm font-dm-sans transition-all duration-200 group"
      style={{ color: 'var(--text-secondary)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--accent)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--text-secondary)'
      }}
    >
      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
      Read my blog
      <svg className="w-3 h-3 opacity-60 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
      </svg>
    </a>
  </div>
) 