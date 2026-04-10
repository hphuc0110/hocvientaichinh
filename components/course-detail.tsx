'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Clock, Users, Star } from 'lucide-react';
import { RegisterForm } from './register-form';

interface CourseContent {
  week: number;
  title: string;
  topics: string[];
}

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  age: string;
  image: string;
  color: string;
  content: CourseContent[];
}

interface CourseDetailProps {
  course: Course | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CourseDetail({ course, open, onOpenChange }: CourseDetailProps) {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  if (!course) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">{course.title}</DialogTitle>
              <DialogDescription className="text-base">{course.description}</DialogDescription>
            </div>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">{course.level}</Badge>
            <Badge variant="outline">{course.age}</Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
            {/* Course Info */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Thời lượng</p>
                  <p className="font-semibold">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Học sinh</p>
                  <p className="font-semibold">{course.students}+</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Đánh giá</p>
                  <p className="font-semibold">{course.rating}/5</p>
                </div>
              </div>
            </div>

            {/* Course Content */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Nội dung khóa học</h3>
              <div className="space-y-4">
                {course.content.map((week) => (
                  <div key={week.week} className="border rounded-lg p-4 hover:border-primary/50 transition-colors">
                    <h4 className="font-bold text-lg text-primary mb-3">
                      Tuần {week.week}: {week.title}
                    </h4>
                    <ul className="space-y-2">
                      {week.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* What You'll Learn */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Bạn sẽ học được gì</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Kiến thức tài chính cơ bản phù hợp với lứa tuổi</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Kỹ năng quản lý tiền thực tế</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Thói quen tài chính tốt từ khi còn nhỏ</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Sự tự tin trong việc quản lý tiền của bản thân</span>
                </li>
              </ul>
            </div>
        </div>

        <div className="border-t pt-4">
          <Button 
            onClick={() => setShowRegisterForm(true)}
            className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg text-white h-11"
          >
            Đăng ký khóa học
          </Button>
        </div>
      </DialogContent>

      <RegisterForm 
        courseName={course.title}
        open={showRegisterForm}
        onOpenChange={setShowRegisterForm}
      />
    </Dialog>
  );
}
