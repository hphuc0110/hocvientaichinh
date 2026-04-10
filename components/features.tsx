'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, BookOpen, Brain, Users, TrendingUp, Lock } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion-variants';

const features = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Nội dung hấp dẫn',
    description: 'Các khóa học thiết kế đặc biệt cho trẻ em với linh vật dễ thương và câu chuyện thú vị.',
    color: 'text-accent',
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI hỗ trợ học tập',
    description: 'Trợ lý AI thông minh trả lời mọi câu hỏi của con em, giải đáp thắc mắc 24/7.',
    color: 'text-primary',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Theo dõi tiến độ',
    description: 'Phụ huynh có thể theo dõi quá trình học tập và tiến bộ của con em một cách chi tiết.',
    color: 'text-secondary',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Khóa học đa dạng',
    description: 'Từ cơ bản về tiền bạc đến quản lý ngân sách, tiết kiệm thông minh và đầu tư ban đầu.',
    color: 'text-accent',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Cộng đồng học tập',
    description: 'Trẻ em có thể giao lưu, trao đổi kinh nghiệm và chơi các game tài chính vui vẻ.',
    color: 'text-primary',
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'An toàn & Bảo mật',
    description: 'Môi trường học tập an toàn với kiểm soát nội dung chặt chẽ và bảo vệ dữ liệu trẻ em.',
    color: 'text-secondary',
  },
];

export function Features() {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-background to-secondary/5">
      <div className="layout-container">
        <motion.div
          className="text-center mb-10 sm:mb-12 space-y-3 sm:space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            Tính năng nổi bật
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground px-1">
            Tại sao chọn Học viện Tài chính Tí hon?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-balance px-1">
            Chúng tôi kết hợp công nghệ AI, thiết kế sinh động và nội dung giáo dục chất lượng để tạo ra trải nghiệm học tập tuyệt vời cho trẻ em.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={staggerItem}>
            <Card
              className="group h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 hover:-translate-y-0.5"
            >
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
