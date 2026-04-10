'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';

interface RegisterFormProps {
  courseName?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegisterForm({ courseName, open, onOpenChange }: RegisterFormProps) {
  const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbzRk97lRr-ZUMsi4Xqz9d3No4XxkUrL2FDee1P73DMZW6RVzClquMO_JAPgvkWiHLc7wQ/exec';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError('');

    try {
      const payload = {
        hoTen: formData.name,
        soDienThoai: formData.phone,
        email: formData.email,
        khoaHoc: courseName ?? '',
        nguon: 'website',
      };

      const encodedBody = new URLSearchParams(payload).toString();
      let submitOk = false;
      let submitErrorMessage = 'Không thể gửi đăng ký, vui lòng thử lại.';

      try {
        // Send as x-www-form-urlencoded to avoid browser preflight with Apps Script.
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: encodedBody,
        });

        if (response.ok) {
          const result = await response.json();
          submitOk = Boolean(result?.ok);
          if (!submitOk && result?.error) {
            submitErrorMessage = String(result.error);
          }
        } else {
          submitErrorMessage = `Gửi thất bại (HTTP ${response.status})`;
        }
      } catch {
        // Fallback for strict CORS environments. Opaque response cannot be read.
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: encodedBody,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
        });
        submitOk = true;
      }

      if (!submitOk) {
        throw new Error(submitErrorMessage);
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Đã có lỗi xảy ra, vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setSubmitError('');
    setFormData({ name: '', phone: '', email: '' });
    onOpenChange(false);
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-md text-center">
          <div className="py-8 space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                <Check className="w-8 h-8 text-accent" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Đăng ký thành công!</h2>
              <p className="text-muted-foreground">
                Cảm ơn bạn đã đăng ký {courseName && <>khóa học <span className="font-semibold text-foreground">"{courseName}"</span></>}
              </p>
            </div>
            <div className="bg-secondary/10 rounded-lg p-4 text-left space-y-2">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Tên:</span> {formData.name}
              </p>
              <p className="text-sm text-foreground">
                <span className="font-semibold">Số điện thoại:</span> {formData.phone}
              </p>
              <p className="text-sm text-foreground">
                <span className="font-semibold">Email:</span> {formData.email}
              </p>
            </div>
            <p className="text-sm text-muted-foreground pt-2">
              Chúng tôi sẽ liên hệ với bạn sớm nhất để xác nhận đăng ký và hướng dẫn bắt đầu khóa học.
            </p>
            <Button 
              onClick={handleClose}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Đóng
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Đăng ký khóa học</DialogTitle>
          {courseName && (
            <DialogDescription>
              Khóa học: <span className="font-semibold text-foreground">"{courseName}"</span>
            </DialogDescription>
          )}
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-semibold">
              Tên của bạn <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Nhập tên đầy đủ"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-10"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base font-semibold">
              Số điện thoại <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Nhập số điện thoại"
              value={formData.phone}
              onChange={handleChange}
              required
              className="h-10"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-semibold">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Nhập địa chỉ email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-10"
              disabled={isLoading}
            />
          </div>

          <p className="text-xs text-muted-foreground">
            Thông tin của bạn sẽ được sử dụng để liên hệ và gửi thông tin về khóa học.
          </p>

          {submitError && (
            <p className="text-sm text-destructive">{submitError}</p>
          )}

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg text-white h-11"
            disabled={isLoading}
          >
            {isLoading ? 'Đang xử lý...' : 'Đăng ký ngay'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
