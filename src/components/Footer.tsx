"use client";

export default function Footer() {
  return (
    <footer className="p-6 md:py-0">
      <div className="flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm md:text-left">
          © {new Date().getFullYear()} Luke Gon&#231;alves. All rights reserved.
        </p>
        <p className="text-center text-sm md:text-left">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
