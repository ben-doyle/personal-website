import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-base-100">
      <div className="max-w-4xl mx-auto">
        <div className="hero min-h-96 bg-base-200 rounded-box">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello daisyUI!</h1>
              <p className="py-6">
                Your daisyUI is now properly configured with Tailwind CSS 4 and Next.js 15!
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <button className="btn btn-primary">Primary Button</button>
                <button className="btn btn-secondary">Secondary Button</button>
                <button className="btn btn-accent">Accent Button</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>This is a daisyUI card component demonstrating that styling is working correctly.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Action</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Another Card</h2>
              <p>Multiple cards showing responsive grid layout with daisyUI components.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Third Card</h2>
              <p>All these components are styled with daisyUI's beautiful design system.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Explore</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Success! daisyUI is working properly with your Next.js project.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
