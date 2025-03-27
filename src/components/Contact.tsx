"use client";

import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const now = new Date();
  function formatTime(num: number) {
    return num < 10 ? "0" + num : num;
  }
  const time = ` ${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()} - ${formatTime(now.getHours())}:${formatTime(
    now.getMinutes()
  )}`;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
      time,
    };

    emailjs
      .send(
        "service_afgee3u",
        "template_io91hb7",
        templateParams,
        "asmOSlrqtuWk8eXgD"
      )
      .then((res) => {
        console.log("Email sent:", res);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => console.error("Email sending failed:", err));
  };

  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="mx-10 lg:m-auto grid max-w-5xl gap-12 lg:grid-cols-2 px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            I'm currently available for freelance work and full-time positions.
            If you have a project that you want to get started or think we might
            be a good fit for each other, get in touch!
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-primary" />
              <p>Nottingham, UK</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-primary" />
              <p>luke.goncalves@hotmail.com</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-primary" />
              <p>+44 75 8683 0906</p>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <a
                  href="https://github.com/Smasheroonie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16"
                >
                  <FaGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button asChild>
                <a
                  href="https://www.linkedin.com/in/lukenunogoncalves/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16"
                >
                  <FaLinkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <form id="form" onSubmit={(e) => sendEmail(e)}>
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  minLength={1}
                  maxLength={70}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                  minLength={5}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  required
                  minLength={30}
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full cursor-pointer">
                Send Message
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </section>
  );
}
