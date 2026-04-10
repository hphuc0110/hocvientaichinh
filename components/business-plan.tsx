'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, BarChart3, Zap } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion-variants';

export function BusinessPlan() {
  return (
    <section id="business-plan" className="section-padding bg-background">
      <div className="layout-container">
        <motion.div
          className="text-center mb-10 sm:mb-12 space-y-3 sm:space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
            Kế hoạch kinh doanh
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground px-1">
            Ba trụ cột thành công
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-balance px-1">
            Kế hoạch kinh doanh toàn diện với ba điểm chính để đảm bảo sự phát triển bền vững.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
        >
          {/* Trụ cột 1: Sản phẩm & USP */}
          <motion.div variants={staggerItem}>
          <Card className="group h-full hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary/50 hover:-translate-y-0.5">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-primary text-xl sm:text-2xl">Sản phẩm & Điểm độc đáo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Tạo ra các khóa học với nội dung phù hợp với tâm lý trẻ em, sử dụng:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <strong>Linh vật dễ thương</strong> - Hợp Hợp chú thỏ xuyên suốt khóa học
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <strong>Câu chuyện hấp dẫn</strong> - Kiến thức trở nên dễ hiểu qua các tình huống thực tế
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <strong>AI hỗ trợ real-time</strong> - Trả lời câu hỏi, tạo trải nghiệm học tập cá nhân
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <strong>Game và hoạt động tương tác</strong> - Học thông qua chơi
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          </motion.div>

          {/* Trụ cột 2: Thị trường & Chiến lược */}
          <motion.div variants={staggerItem}>
          <Card className="group h-full hover:shadow-xl transition-all duration-300 border-2 border-accent/20 hover:border-accent/50 hover:-translate-y-0.5">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-accent text-xl sm:text-2xl">Thị trường & Chiến lược</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Nghiên cứu thị trường kỹ lưỡng để phát triển chiến lược hiệu quả:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <strong>Phân tích đối tượng</strong> - Trẻ em (6-11 tuổi) và phụ huynh
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <strong>Chiến lược tiếp thị</strong> - Tiếp cận phụ huynh qua mạng xã hội và các nền tảng giáo dục
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <strong>Kênh bán hàng</strong> - Trực tuyến, ứng dụng di động, hợp tác với trường học
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <strong>Định giá</strong> - Mô hình freemium với các gói nâng cao
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          </motion.div>

          {/* Trụ cột 3: Chi phí & Nguồn lực */}
          <motion.div variants={staggerItem}>
          <Card className="group h-full hover:shadow-xl transition-all duration-300 border-2 border-secondary/20 hover:border-secondary/50 hover:-translate-y-0.5">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-secondary text-xl sm:text-2xl">Chi phí & Nguồn lực</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Lập kế hoạch chi phí tối ưu để đảm bảo khả thi:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <strong>Nền tảng miễn phí</strong> - Nextjs, Vercel, Open-source tools
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <strong>AI & API</strong> - Tận dụng các API AI miễn phí và chi phí thấp
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <strong>Nhân lực</strong> - Đội ngũ nhỏ bắt đầu, mở rộng khi có doanh thu
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <strong>Marketing</strong> - Tập trung vào viral loops và word-of-mouth
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mt-10 sm:mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-5 sm:p-8 border border-primary/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Lộ trình phát triển</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
            <div className="space-y-2">
              <p className="text-sm font-bold text-primary bg-primary/20 w-fit px-3 py-1 rounded-full">Tháng 1-2</p>
              <p className="font-semibold text-foreground">Khám phá & Thiết kế</p>
              <p className="text-sm text-muted-foreground">Nghiên cứu thị trường, xây dựng prototype</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-bold text-accent bg-accent/20 w-fit px-3 py-1 rounded-full">Tháng 3-4</p>
              <p className="font-semibold text-foreground">Alpha Version</p>
              <p className="text-sm text-muted-foreground">Phát hành phiên bản alpha, test với nhóm nhỏ</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-bold text-secondary bg-secondary/20 w-fit px-3 py-1 rounded-full">Tháng 5-6</p>
              <p className="font-semibold text-foreground">Beta Launch</p>
              <p className="text-sm text-muted-foreground">Phát hành công khai, quảng bá đầu tiên</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-bold text-primary bg-primary/20 w-fit px-3 py-1 rounded-full">Tháng 7+</p>
              <p className="font-semibold text-foreground">Mở rộng & Phát triển</p>
              <p className="text-sm text-muted-foreground">Thêm khóa học, mở rộng thị trường</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
