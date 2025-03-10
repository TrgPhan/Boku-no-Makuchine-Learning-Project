'use client';
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <Card className="w-full max-w-2xl shadow-lg">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Liên hệ với chúng tôi</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Họ và tên</label>
                            <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Nhập họ và tên" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Nhập email" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tin nhắn</label>
                            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Nhập tin nhắn của bạn" required />
                        </div>
                        <Button type="submit" className="w-full">Gửi tin nhắn</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Contact;