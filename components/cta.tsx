'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion-variants';

export function CTA() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-r from-primary/15 via-accent/10 to-secondary/15 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"
        aria-hidden
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32"
        aria-hidden
        animate={{ scale: [1, 1.06, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="layout-container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6 lg:space-y-8 px-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            Sẵn sàng giúp con em phát triển tài chính?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground text-balance"
          >
            Tham gia hơn 1000 trẻ em đã học các kỹ năng tài chính cơ bản từ Học viện Tài chính Tí hon. Hãy bắt đầu hành trình của con em ngay hôm nay!
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full text-base sm:text-lg h-11 sm:h-12 px-6 sm:px-8 min-h-11 w-full sm:w-auto transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Dùng thử miễn phí <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-8 sm:pt-10 border-t border-border"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">hello@hocvientichinh.vn</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <MessageCircle className="w-5 h-5 text-accent" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Chat với chúng tôi</p>
                  <p className="font-semibold text-foreground">Hỗ trợ 24/7 qua Messenger</p>
                </div>
            </div>
          </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
