'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { RegisterForm } from './register-form';
import { headerSlide } from '@/lib/motion-variants';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      initial="hidden"
      animate="visible"
      variants={headerSlide}
    >
      <nav className="layout-container py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
            🐰
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-primary">Học viện Tài chính Tí hon</h1>
            <p className="text-xs text-muted-foreground">Dạy con yêu thương tiền bạc</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#courses" className="text-foreground hover:text-primary transition-colors font-medium">
            Khóa học
          </a>
          <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
            Tính năng
          </a>
          <a href="#business-plan" className="text-foreground hover:text-primary transition-colors font-medium">
            Kế hoạch
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Liên hệ
          </a>
          <Button 
            onClick={() => setShowRegisterForm(true)}
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
          >
            Dùng thử ngay
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-border bg-background/50 backdrop-blur-sm overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="layout-container py-4 flex flex-col gap-3">
              <a href="#courses" className="py-2 text-foreground hover:text-primary transition-colors font-medium">
                Khóa học
              </a>
              <a href="#features" className="py-2 text-foreground hover:text-primary transition-colors font-medium">
                Tính năng
              </a>
              <a href="#business-plan" className="py-2 text-foreground hover:text-primary transition-colors font-medium">
                Kế hoạch
              </a>
              <a href="#contact" className="py-2 text-foreground hover:text-primary transition-colors font-medium">
                Liên hệ
              </a>
              <Button 
                onClick={() => {
                  setShowRegisterForm(true);
                  setIsMenuOpen(false);
                }}
                className="bg-primary hover:bg-primary/90 text-white rounded-full w-full"
              >
                Dùng thử ngay
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <RegisterForm 
        open={showRegisterForm}
        onOpenChange={setShowRegisterForm}
      />
    </motion.header>
  );
}
