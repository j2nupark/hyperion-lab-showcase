import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        {
            icon: Mail,
            title: '이메일',
            value: 'hello@hionelabs.com',
            description: '24시간 내 답변드립니다',
        },
        {
            icon: Phone,
            title: '전화',
            value: '+82-2-1234-5678',
            description: '평일 9:00 - 18:00',
        },
        {
            icon: MapPin,
            title: '위치',
            value: '서울시 강남구',
            description: '미팅 및 상담 가능',
        },
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-subtle">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-primary">함께 시작해요</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        새로운 프로젝트나 협업에 대한 아이디어가 있으시나요? 언제든지 연락주세요. 함께 혁신적인 솔루션을
                        만들어갑시다.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8 animate-slide-in">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <Card
                                        key={info.title}
                                        className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm"
                                    >
                                        <CardContent className="p-6 flex items-start gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <info.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                                                <p className="text-primary font-medium mb-1">{info.value}</p>
                                                <p className="text-sm text-muted-foreground">{info.description}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <Card className="border-0 bg-muted/20 backdrop-blur-sm">
                            <CardContent className="p-6">
                                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                    <MessageCircle className="w-5 h-5 text-primary" />
                                    소셜 미디어
                                </h4>
                                <p className="text-muted-foreground mb-4">
                                    소셜 미디어에서도 HiwonLabs의 최신 소식을 만나보세요.
                                </p>
                                <div className="flex gap-3">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="hover:bg-primary hover:text-primary-foreground"
                                    >
                                        LinkedIn
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="hover:bg-primary hover:text-primary-foreground"
                                    >
                                        GitHub
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="hover:bg-primary hover:text-primary-foreground"
                                    >
                                        Instagram
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card
                        className="border-0 bg-white/50 backdrop-blur-sm animate-fade-in"
                        style={{ animationDelay: '0.2s' }}
                    >
                        <CardHeader>
                            <CardTitle className="text-2xl">프로젝트 문의하기</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">이름 *</Label>
                                    <Input
                                        id="name"
                                        placeholder="홍길동"
                                        className="border-border/50 focus:border-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">이메일 *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="hello@example.com"
                                        className="border-border/50 focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company">회사명</Label>
                                <Input
                                    id="company"
                                    placeholder="(주)HiwonLabs"
                                    className="border-border/50 focus:border-primary"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">문의 제목 *</Label>
                                <Input
                                    id="subject"
                                    placeholder="웹사이트 개발 관련 문의"
                                    className="border-border/50 focus:border-primary"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">메시지 *</Label>
                                <Textarea
                                    id="message"
                                    placeholder="프로젝트에 대해 자세히 설명해주세요..."
                                    rows={5}
                                    className="border-border/50 focus:border-primary resize-none"
                                />
                            </div>

                            <Button
                                size="lg"
                                className="w-full group bg-primary hover:bg-primary/90 glow-primary transition-all duration-300"
                            >
                                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                메시지 보내기
                            </Button>

                            <p className="text-sm text-muted-foreground text-center">
                                * 필수 입력 항목입니다. 개인정보는 문의 답변 목적으로만 사용됩니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* FAQ Section */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center mb-8">자주 묻는 질문</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                q: '프로젝트 시작 전 상담은 무료인가요?',
                                a: '네, 프로젝트 범위와 요구사항에 대한 초기 상담은 무료로 제공됩니다.',
                            },
                            {
                                q: '개발 기간은 어느 정도 소요되나요?',
                                a: '프로젝트 규모에 따라 다르지만, 일반적으로 2-12주 정도 소요됩니다.',
                            },
                            {
                                q: '유지보수 서비스도 제공하나요?',
                                a: '네, 프로젝트 완료 후에도 지속적인 유지보수 서비스를 제공합니다.',
                            },
                            {
                                q: '어떤 기술 스택을 주로 사용하나요?',
                                a: 'React, TypeScript, Node.js 등 최신 기술을 활용하여 개발합니다.',
                            },
                        ].map((faq, index) => (
                            <Card key={index} className="border-0 bg-white/30 backdrop-blur-sm">
                                <CardContent className="p-6">
                                    <h4 className="font-semibold mb-2 text-primary">{faq.q}</h4>
                                    <p className="text-muted-foreground text-sm">{faq.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
