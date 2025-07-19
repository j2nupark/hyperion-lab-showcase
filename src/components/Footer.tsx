import { Sparkles, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { label: '회사 소개', href: '#about' },
            { label: '팀', href: '#team' },
            { label: '채용', href: '#careers' },
            { label: '블로그', href: '#blog' },
        ],
        services: [
            { label: '웹 개발', href: '#web-dev' },
            { label: '모바일 앱', href: '#mobile' },
            { label: 'AI/ML', href: '#ai-ml' },
            { label: '컨설팅', href: '#consulting' },
        ],
        support: [
            { label: '문의하기', href: '#contact' },
            { label: 'FAQ', href: '#faq' },
            { label: '개인정보처리방침', href: '#privacy' },
            { label: '이용약관', href: '#terms' },
        ],
    };

    const socialLinks = [
        { label: 'LinkedIn', href: '#' },
        { label: 'GitHub', href: '#' },
        { label: 'Instagram', href: '#' },
        { label: 'YouTube', href: '#' },
    ];

    return (
        <footer className="bg-gradient-to-br from-background via-background to-primary/5 border-t border-border/50">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-8 h-8 text-primary animate-glow" />
                            <span className="text-2xl font-bold text-primary">하이원랩스</span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed max-w-md">
                            젊은 에너지와 최신 트렌드를 바탕으로 혁신적인 기술 솔루션을 제공하는 차세대 기술 회사입니다.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4 text-primary" />
                                hello@hionelabs.com
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4 text-primary" />
                                +82-2-1234-5678
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 text-primary" />
                                서울시 강남구
                            </div>
                        </div>

                        <div className="flex gap-2">
                            {socialLinks.map((social) => (
                                <Button
                                    key={social.label}
                                    variant="outline"
                                    size="sm"
                                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                >
                                    {social.label}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">회사</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">서비스</h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">지원</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-primary/5 to-accent-purple/5 rounded-2xl p-8 mb-12 backdrop-blur-sm">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">최신 소식을 받아보세요</h3>
                        <p className="text-muted-foreground mb-6">
                            하이원랩스의 새로운 프로젝트와 기술 트렌드 소식을 이메일로 받아보세요.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="이메일 주소를 입력하세요"
                                className="flex-1 px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            <Button className="bg-primary hover:bg-primary/90 px-6">구독하기</Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} 하이원랩스. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-muted-foreground">
                            <a href="#privacy" className="hover:text-primary transition-colors">
                                개인정보처리방침
                            </a>
                            <a href="#terms" className="hover:text-primary transition-colors">
                                이용약관
                            </a>
                            <a href="#cookies" className="hover:text-primary transition-colors">
                                쿠키 정책
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
