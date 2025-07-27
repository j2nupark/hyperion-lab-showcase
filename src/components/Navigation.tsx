import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';

const Navigation = () => {
    const { t } = useTranslation();
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
        { label: t('navigation.home'), href: '#home' },
        { label: t('navigation.about'), href: '#about' },
        { label: t('navigation.portfolio'), href: '#portfolio' },
        { label: t('navigation.contact'), href: '#contact' },
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
                        <img 
                            src="/lovable-uploads/5b2efe5a-73b0-499d-bcf4-1d9224f45a86.png" 
                            alt="HiwonLabs Logo" 
                            className="h-8 w-auto object-contain drop-shadow-lg"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
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
                        <LanguageSelector />
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button
                            onClick={() => scrollToSection('#contact')}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-primary transition-all duration-300 shadow-lg"
                            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                        >
                            {t('navigation.projectInquiry')}
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
                                {t('navigation.projectInquiry')}
                            </Button>
                            <div className="mt-4 pt-4 border-t border-white/20">
                                <LanguageSelector />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
