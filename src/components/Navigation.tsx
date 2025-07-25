import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: '홈', href: '#home' },
        { label: '회사소개', href: '#about' },
        { label: '포트폴리오', href: '#portfolio' },
        { label: '연락처', href: '#contact' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-background/40 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer group"
                        onClick={() => scrollToSection('#home')}
                    >
                        <span className="text-2xl font-bold text-primary drop-shadow-lg">HiwonLabs</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.href)}
                                className="text-foreground hover:text-primary transition-colors duration-200 font-semibold relative group text-shadow-lg"
                                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full drop-shadow-sm"></span>
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button
                            onClick={() => scrollToSection('#contact')}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-primary transition-all duration-300 shadow-lg"
                            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                        >
                            프로젝트 문의
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-background/50 backdrop-blur-xl border-b border-white/20 shadow-lg animate-fade-in">
                        <div className="px-6 py-4 space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 font-semibold py-2"
                                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <Button
                                onClick={() => scrollToSection('#contact')}
                                className="w-full mt-4 bg-primary hover:bg-primary/90 font-semibold shadow-lg"
                                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                            >
                                프로젝트 문의
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
