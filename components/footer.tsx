'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion-variants';

const courseLinks = [
  { label: 'Tiền là gì?', href: '#courses' },
  { label: 'Tiết kiệm thông minh', href: '#courses' },
  { label: 'Quản lý ngân sách', href: '#courses' },
  { label: 'Công việc & Kiếm tiền', href: '#courses' },
  { label: 'Đầu tư ban đầu', href: '#courses' },
];

const companyLinks = [
  { label: 'Liên hệ', href: '#contact' },
];

const legalLinks = [
  { label: 'Điều khoản dịch vụ', href: '#' },
  { label: 'Chính sách riêng tư', href: '#' },
  { label: 'Chính sách cookie', href: '#' },
  { label: 'Bảo mật', href: '#' },
];

const social = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'X / Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-zinc-100/90 text-foreground dark:bg-zinc-950/40 dark:border-border">
      <div className="layout-container py-10 sm:py-12">
        <motion.div
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
        >
          {/* Thương hiệu */}
          <motion.div variants={staggerItem} className="space-y-4 sm:max-w-sm lg:max-w-none">
            <div className="flex items-start gap-3">
              <div
                className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-xl shadow-sm"
                aria-hidden
              >
                <span className="leading-none drop-shadow-sm">🐰</span>
              </div>
              <div>
                <p className="font-bold leading-snug text-foreground">
                  Học viện Tài chính Tí hon
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Giáo dục tài chính chất lượng cho thế hệ trẻ Việt Nam.
            </p>
            <nav aria-label="Mạng xã hội" className="flex flex-wrap gap-2 pt-1">
              {social.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-white/80 hover:text-primary dark:hover:bg-zinc-800/80"
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.nav variants={staggerItem} aria-labelledby="footer-courses-heading" className="space-y-4">
            <h2 id="footer-courses-heading" className="text-sm font-bold tracking-wide text-foreground">
              Khóa học
            </h2>
            <ul className="space-y-2.5 text-sm">
              {courseLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-zinc-600 transition-colors hover:text-primary dark:text-zinc-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav variants={staggerItem} aria-labelledby="footer-company-heading" className="space-y-4">
            <h2 id="footer-company-heading" className="text-sm font-bold tracking-wide text-foreground">
              Công ty
            </h2>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-zinc-600 transition-colors hover:text-primary dark:text-zinc-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav variants={staggerItem} aria-labelledby="footer-legal-heading" className="space-y-4">
            <h2 id="footer-legal-heading" className="text-sm font-bold tracking-wide text-foreground">
              Pháp lý
            </h2>
            <ul className="space-y-2.5 text-sm">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-zinc-600 transition-colors hover:text-primary dark:text-zinc-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>

        <motion.div
          className="mt-10 border-t border-zinc-200/90 pt-8 dark:border-zinc-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-600 sm:flex-row sm:text-left dark:text-zinc-400">
            <p>© 2026 Học viện Tài chính Tí hon. Tất cả quyền được bảo lưu.</p>
            <p className="text-balance sm:text-right">
              Được xây dựng bởi <span className="text-accent">❤️</span> cho nền giáo dục Việt Nam
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
