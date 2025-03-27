"use client";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="mx-auto px-4 md:px-6 flex max-w-[58rem] flex-col items-center justify-center space-y-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          About Me
        </h2>
        <p className="mt-4 mx-10 text-lg text-muted-foreground">
          I am a community-oriented developer building products for the web,
          mobile and beyond. I focus on creating clean, efficient, and
          accessible applications with contemporary flare.
        </p>
      </div>
    </section>
  );
}
