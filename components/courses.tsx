'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { CourseDetail } from './course-detail';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion-variants';

const allCourses = [
  {
    id: 1,
    title: 'Tiền là gì? - Những điều cơ bản',
    description: 'Giới thiệu về khái niệm tiền, các loại tiền, và tại sao tiền lại quan trọng trong cuộc sống.',
    level: 'Cơ bản',
    duration: '4 tuần',
    students: 250,
    rating: 4.9,
    age: '6-8 tuổi',
    image: '💰',
    color: 'from-primary/20 to-primary/5',
    content: [
      {
        week: 1,
        title: 'Tiền là gì?',
        topics: [
          'Khái niệm cơ bản về tiền',
          'Lịch sử tiền tệ từ xưa đến nay',
          'Các loại tiền (tiền giấy, tiền xu, tiền kỹ thuật số)',
          'Bài tập: Nhận biết các đồng tiền khác nhau'
        ]
      },
      {
        week: 2,
        title: 'Tại sao tiền quan trọng',
        topics: [
          'Tiền dùng để làm gì',
          'Tiền và nhu cầu của chúng ta',
          'Tiền và mong muốn của chúng ta',
          'Thảo luận: Tiền có thể mua được gì'
        ]
      },
      {
        week: 3,
        title: 'Giá trị tiền',
        topics: [
          'Một đồng tiền có giá trị bao nhiêu',
          'So sánh giá trị các vật dụng',
          'Hiểu biết về chi phí',
          'Game: Tìm đồ vật có giá trị tương đương'
        ]
      },
      {
        week: 4,
        title: 'Tiền trong cuộc sống hàng ngày',
        topics: [
          'Mua sắm và thanh toán',
          'Phụ huynh chi tiêu tiền như thế nào',
          'Ứng dụng tiền trong gia đình',
          'Dự án cuối khóa: Theo dõi chi tiêu 1 tuần'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Tiết kiệm thông minh',
    description: 'Học cách quản lý tiền tiêu vặt, đặt mục tiêu tiết kiệm, và tập thói quen tài chính tốt.',
    level: 'Cơ bản',
    duration: '5 tuần',
    students: 180,
    rating: 4.8,
    age: '6-11 tuổi',
    image: '🏦',
    color: 'from-accent/20 to-accent/5',
    content: [
      {
        week: 1,
        title: 'Tiết kiệm là gì',
        topics: [
          'Khái niệm tiết kiệm',
          'Tại sao cần tiết kiệm',
          'Tiết kiệm ngắn hạn và dài hạn',
          'Bài tập: Lý do tiết kiệm của bạn'
        ]
      },
      {
        week: 2,
        title: 'Đặt mục tiêu tiết kiệm',
        topics: [
          'Mục tiêu tài chính là gì',
          'Đặt mục tiêu tiết kiệm cụ thể',
          'Mục tiêu thực tế vs mục tiêu không thực tế',
          'Game: Đặt mục tiêu tiết kiệm của bạn'
        ]
      },
      {
        week: 3,
        title: 'Cách tiết kiệm hiệu quả',
        topics: [
          'Lập kế hoạch tiết kiệm',
          'Quản lý tiền tiêu vặt',
          'Hạn chế chi tiêu không cần thiết',
          'Tạo thói quen tiết kiệm hàng ngày'
        ]
      },
      {
        week: 4,
        title: 'Công cụ tiết kiệm',
        topics: [
          'Hộp tiết kiệm và ví',
          'Ứng dụng theo dõi tiền',
          'Tài khoản ngân hàng cho trẻ em',
          'Bảng theo dõi tiết kiệm'
        ]
      },
      {
        week: 5,
        title: 'Dự án tiết kiệm',
        topics: [
          'Thực hành tiết kiệm 4 tuần',
          'Ghi chép tiết kiệm của bạn',
          'Chia sẻ thành công tiết kiệm',
          'Nhận khoá hoàn thành và reward'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Quản lý ngân sách cho trẻ',
    description: 'Hướng dẫn lập ngân sách cá nhân, theo dõi chi tiêu, và phân bổ tiền một cách hợp lý.',
    level: 'Trung bình',
    duration: '6 tuần',
    students: 120,
    rating: 4.7,
    age: '8-11 tuổi',
    image: '📊',
    color: 'from-secondary/20 to-secondary/5',
    content: [
      {
        week: 1,
        title: 'Ngân sách là gì',
        topics: [
          'Định nghĩa ngân sách',
          'Tại sao cần lập ngân sách',
          'Ngân sách cho cá nhân',
          'Ví dụ ngân sách gia đình'
        ]
      },
      {
        week: 2,
        title: 'Thu nhập và chi tiêu',
        topics: [
          'Nguồn tiền của bạn (tiền tiêu vặt, quà)',
          'Các khoản chi tiêu (đồ ăn, đồ chơi, hoạt động)',
          'Thu nhập cố định vs biến động',
          'Bài tập: Danh sách chi tiêu của bạn'
        ]
      },
      {
        week: 3,
        title: 'Lập ngân sách đơn giản',
        topics: [
          'Công thức 50-30-20 cho trẻ em',
          'Phân bổ tiền cho nhu cầu, muốn, tiết kiệm',
          'Tạo ngân sách tháng',
          'Game: Lập ngân sách của bạn'
        ]
      },
      {
        week: 4,
        title: 'Theo dõi chi tiêu',
        topics: [
          'Ghi chép chi tiêu hàng ngày',
          'Sử dụng bảng tính đơn giản',
          'Các ứng dụng quản lý tiền',
          'Phân tích chi tiêu của bạn'
        ]
      },
      {
        week: 5,
        title: 'Điều chỉnh ngân sách',
        topics: [
          'So sánh kế hoạch với thực tế',
          'Nhận biết chi tiêu quá mức',
          'Tìm cách cắt giảm chi phí',
          'Tăng ngân sách tiết kiệm'
        ]
      },
      {
        week: 6,
        title: 'Thực hành quản lý ngân sách',
        topics: [
          'Lập và theo dõi ngân sách 1 tháng',
          'Ghi chép chi tiêu chi tiết',
          'Phân tích kết quả',
          'Lên kế hoạch cải tiến cho tháng tới'
        ]
      }
    ]
  },
];

export function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<typeof allCourses[0] | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleOpenCourse = (course: typeof allCourses[0]) => {
    setSelectedCourse(course);
    setIsDetailOpen(true);
  };

  return (
    <>
      <section id="courses" className="section-padding bg-gradient-to-b from-secondary/5 to-background">
        <div className="layout-container">
          <motion.div
            className="text-center mb-10 sm:mb-12 space-y-3 sm:space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              Khóa học
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground px-1">
              Các khóa học chất lượng cao
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-balance px-1">
              Hơn 50 khóa học từ cơ bản đến nâng cao, được thiết kế đặc biệt cho từng độ tuổi.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
          >
            {allCourses.map((course) => (
              <motion.div key={course.id} variants={staggerItem}>
              <Card
                className="overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer h-full hover:-translate-y-1"
                onClick={() => handleOpenCourse(course)}
              >
                {/* Image section */}
                <div className={`bg-gradient-to-br ${course.color} h-32 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}>
                  {course.image}
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-foreground text-lg group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs">{course.level}</Badge>
                    <Badge variant="outline" className="text-xs">{course.age}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-muted-foreground mb-4">
                    {course.description}
                  </CardDescription>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>⏱️ {course.duration}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    👥 {course.students} học sinh đã tham gia
                  </p>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-auto">
                    Xem chi tiết <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CourseDetail 
        course={selectedCourse} 
        open={isDetailOpen} 
        onOpenChange={setIsDetailOpen}
      />
    </>
  );
}
