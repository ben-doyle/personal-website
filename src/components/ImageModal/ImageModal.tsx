import Image from "next/image"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  alt: string
}

export const ImageModal = ({ 
  isOpen, 
  onClose, 
  imageSrc, 
  alt 
}: ImageModalProps) => {
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