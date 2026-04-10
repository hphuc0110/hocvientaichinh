'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { scaleIn, staggerContainer, staggerItem } from '@/lib/motion-variants';

const HERO_IMG_WIDTH = 1024;
const HERO_IMG_HEIGHT = 558;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative section-padding bg-gradient-to-br from-background via-background to-secondary/10 overflow-hidden">
      {/* Nền trang trí nhẹ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-16 bottom-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="layout-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem} className="inline-block">
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold animate-in fade-in zoom-in-95 duration-500">
                ✨ Giáo dục tài chính mới cho trẻ em
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance text-foreground leading-tight tracking-tight"
            >
              Học viện <span className="text-primary">Tài chính Tí hon</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground text-balance leading-relaxed max-w-md"
            >
              Nền tảng giáo dục trực tuyến chuyên cung cấp khóa học tài chính cá nhân cho trẻ em từ 6 đến 11 tuổi. Sử dụng linh vật dễ thương, câu chuyện hấp dẫn và AI thông minh để dạy con hiểu giá trị tiền bạc.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col gap-4 sm:flex-row sm:gap-8 sm:justify-between pt-6 sm:pt-8 border-t border-border"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary">1000+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Học sinh đã tham gia</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent">50+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Khóa học chất lượng</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-secondary">4.9⭐</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Đánh giá từ phụ huynh</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Ảnh minh họa — kích thước gốc 1024×558, co giãn theo chiều ngang màn hình, không méo */}
          <motion.div
            className="relative w-full flex justify-center md:justify-end"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ delay: 0.15 }}
          >
            <motion.div
              className="relative w-full max-w-[1024px]"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -6, 0] }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
              }
            >
              <Image
                src="/hero-section.png"
                alt="Trẻ em học tài chính: tiết kiệm, sách Tài chính cho bé và hoạt động vui tại học viện"
                width={HERO_IMG_WIDTH}
                height={HERO_IMG_HEIGHT}
                sizes="(max-width: 768px) 100vw, min(1024px, 50vw)"
                priority
                className="h-auto w-full rounded-2xl object-contain shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
