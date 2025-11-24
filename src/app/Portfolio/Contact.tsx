"use client";
import { Mail, Twitter, Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="text-center py-16 mt-24 contact-me">
      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        LET&apos;S BUILD TOGETHER
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-10 contact-paragraph"
      >
        Let&apos;s discuss how we can create something amazing together 👇.
      </motion.p>

      {/* Icons Row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex justify-center gap-10 flex-wrap"
      >
        {/* Twitter */}
        <Link
          href="https://twitter.com/Dev__mm"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Twitter className="w-8 h-8 mb-2" />
          <span className="text-sm font-medium">Twitter</span>
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/Wajeeu2002"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Github className="w-8 h-8 mb-2" />
          <span className="text-sm font-medium">GitHub</span>
        </Link>

        {/* Email */}
        <Link href="mailto:ibrahimwajeeu8@gmail.com" className="social-link">
          <Mail className="w-8 h-8 mb-2" />
          <span className="text-sm font-medium">Email</span>
        </Link>
      </motion.div>
    </section>
  );
}
