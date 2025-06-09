export const GithubIcon = () => (
  <a 
    href="https://github.com/ben-doyle" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center p-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-opacity-80 cursor-pointer min-w-[44px] min-h-[44px]"
    style={{
      backgroundColor: 'var(--card-background)',
      border: '1px solid var(--border)',
      color: 'var(--text-secondary)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--accent)'
      e.currentTarget.style.backgroundColor = 'var(--accent)'
      e.currentTarget.style.color = '#ffffff'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--border)'
      e.currentTarget.style.backgroundColor = 'var(--card-background)'
      e.currentTarget.style.color = 'var(--text-secondary)'
    }}
    aria-label="Visit GitHub profile"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  </a>
)

export const BlueSkyIcon = () => (
  <a 
    href="https://bsky.app/profile/imjackofitall.bsky.social" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center p-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-opacity-80 cursor-pointer min-w-[44px] min-h-[44px]"
    style={{
      backgroundColor: 'var(--card-background)',
      border: '1px solid var(--border)',
      color: 'var(--text-secondary)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--accent)'
      e.currentTarget.style.backgroundColor = 'var(--accent)'
      e.currentTarget.style.color = '#ffffff'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--border)'
      e.currentTarget.style.backgroundColor = 'var(--card-background)'
      e.currentTarget.style.color = 'var(--text-secondary)'
    }}
    aria-label="Visit BlueSky profile"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 568 501">
      <path d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.209C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-119.86 122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.631-7.733-.017-2.875-1.169.506-3.631 7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.889-129.52 80.986-149.07-65.72 11.185-139.6-7.295-159.875-79.748C9.945 203.66 0 75.293 0 57.947 0-28.906 76.134-1.611 123.121 33.664Z"/>
    </svg>
  </a>
)

export const LinkedinIcon = () => (
  <a 
    href="https://www.linkedin.com/in/benjamin-doyle-aus/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center p-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-opacity-80 cursor-pointer min-w-[44px] min-h-[44px]"
    style={{
      backgroundColor: 'var(--card-background)',
      border: '1px solid var(--border)',
      color: 'var(--text-secondary)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--accent)'
      e.currentTarget.style.backgroundColor = 'var(--accent)'
      e.currentTarget.style.color = '#ffffff'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--border)'
      e.currentTarget.style.backgroundColor = 'var(--card-background)'
      e.currentTarget.style.color = 'var(--text-secondary)'
    }}
    aria-label="Visit LinkedIn profile"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </a>
)

export const InstagramIcon = ({ href }: { href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center p-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-opacity-80 cursor-pointer min-w-[44px] min-h-[44px]"
    style={{
      backgroundColor: 'var(--card-background)',
      border: '1px solid var(--border)',
      color: 'var(--text-secondary)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--accent)'
      e.currentTarget.style.backgroundColor = 'var(--accent)'
      e.currentTarget.style.color = '#ffffff'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--border)'
      e.currentTarget.style.backgroundColor = 'var(--card-background)'
      e.currentTarget.style.color = 'var(--text-secondary)'
    }}
    aria-label="Visit Instagram profile"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>
)

export const TwitterIcon = () => (
  <a 
    href="https://x.com/imjackofitall" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center p-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-opacity-80 cursor-pointer min-w-[44px] min-h-[44px]"
    style={{
      backgroundColor: 'var(--card-background)',
      border: '1px solid var(--border)',
      color: 'var(--text-secondary)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--accent)'
      e.currentTarget.style.backgroundColor = 'var(--accent)'
      e.currentTarget.style.color = '#ffffff'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--border)'
      e.currentTarget.style.backgroundColor = 'var(--card-background)'
      e.currentTarget.style.color = 'var(--text-secondary)'
    }}
    aria-label="Visit Twitter/X profile"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  </a>
)

export const ResumeIcon = () => (
  <a 
    href="https://resume.imjackofitall.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center p-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-opacity-80 cursor-pointer min-w-[44px] min-h-[44px]"
    style={{
      backgroundColor: 'var(--card-background)',
      border: '1px solid var(--border)',
      color: 'var(--text-secondary)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--accent)'
      e.currentTarget.style.backgroundColor = 'var(--accent)'
      e.currentTarget.style.color = '#ffffff'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--border)'
      e.currentTarget.style.backgroundColor = 'var(--card-background)'
      e.currentTarget.style.color = 'var(--text-secondary)'
    }}
    aria-label="View Resume"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 45.057 45.057">
      <path d="M19.558,25.389c-0.067,0.176-0.155,0.328-0.264,0.455c-0.108,0.129-0.24,0.229-0.396,0.301
        c-0.156,0.072-0.347,0.107-0.57,0.107c-0.313,0-0.572-0.068-0.78-0.203c-0.208-0.137-0.374-0.316-0.498-0.541
        c-0.124-0.223-0.214-0.477-0.27-0.756c-0.057-0.279-0.084-0.564-0.084-0.852c0-0.289,0.027-0.572,0.084-0.853
        c0.056-0.281,0.146-0.533,0.27-0.756c0.124-0.225,0.29-0.404,0.498-0.541c0.208-0.137,0.468-0.203,0.78-0.203
        c0.271,0,0.494,0.051,0.666,0.154c0.172,0.105,0.31,0.225,0.414,0.361c0.104,0.137,0.176,0.273,0.216,0.414
        c0.04,0.139,0.068,0.25,0.084,0.33h2.568c-0.112-1.08-0.49-1.914-1.135-2.502c-0.644-0.588-1.558-0.887-2.741-0.895
        c-0.664,0-1.263,0.107-1.794,0.324c-0.532,0.215-0.988,0.52-1.368,0.912c-0.38,0.392-0.672,0.863-0.876,1.416
        c-0.204,0.551-0.307,1.165-0.307,1.836c0,0.631,0.097,1.223,0.288,1.77c0.192,0.549,0.475,1.021,0.847,1.422
        s0.825,0.717,1.361,0.949c0.536,0.23,1.152,0.348,1.849,0.348c0.624,0,1.18-0.105,1.668-0.312
        c0.487-0.209,0.897-0.482,1.229-0.822s0.584-0.723,0.756-1.146c0.172-0.422,0.259-0.852,0.259-1.283h-2.593
        C19.68,25.023,19.627,25.214,19.558,25.389z"/>
      <polygon points="26.62,24.812 26.596,24.812 25.192,19.616 22.528,19.616 25.084,28.184 28.036,28.184 30.713,19.616 28,19.616"/>
      <path d="M33.431,0H5.179v45.057h34.699V6.251L33.431,0z M36.878,42.056H8.179V3h23.706v4.76h4.992L36.878,42.056L36.878,42.056z"/>
    </svg>
  </a>
)
