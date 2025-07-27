import { Sparkles, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { label: t('footer.links.companyAbout'), href: '#about' },
            { label: t('footer.links.team'), href: '#team' },
            { label: t('footer.links.careers'), href: '#careers' },
            { label: t('footer.links.blog'), href: '#blog' },
        ],
        services: [
            { label: t('footer.links.webDev'), href: '#web-dev' },
            { label: t('footer.links.mobile'), href: '#mobile' },
            { label: t('footer.links.aiml'), href: '#ai-ml' },
            { label: t('footer.links.consulting'), href: '#consulting' },
        ],
        support: [
            { label: t('footer.links.contactUs'), href: '#contact' },
            { label: t('footer.links.faq'), href: '#faq' },
            { label: t('footer.links.privacy'), href: '#privacy' },
            { label: t('footer.links.terms'), href: '#terms' },
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
                            <span className="text-2xl font-bold text-primary">HiwonLabs</span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed max-w-md">
                            {t('footer.description')}
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4 text-primary" />
                                {t('footer.contact.email')}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4 text-primary" />
                                {t('footer.contact.phone')}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 text-primary" />
                                {t('footer.contact.address')}
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
                        <h3 className="font-semibold text-foreground">{t('footer.links.company')}</h3>
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
                        <h3 className="font-semibold text-foreground">{t('footer.links.services')}</h3>
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
                        <h3 className="font-semibold text-foreground">{t('footer.links.support')}</h3>
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
                <div className="bg-muted/20 rounded-2xl p-8 mb-12 backdrop-blur-sm">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">{t('footer.newsletter.title')}</h3>
                        <p className="text-muted-foreground mb-6">
                            {t('footer.newsletter.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder={t('footer.newsletter.placeholder')}
                                className="flex-1 px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            <Button className="bg-primary hover:bg-primary/90 px-6">{t('footer.newsletter.subscribe')}</Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">{t('footer.bottom.copyright', { year: currentYear })}</p>
                        <div className="flex gap-6 text-sm text-muted-foreground">
                            <a href="#privacy" className="hover:text-primary transition-colors">
                                {t('footer.bottom.privacyPolicy')}
                            </a>
                            <a href="#terms" className="hover:text-primary transition-colors">
                                {t('footer.bottom.termsOfService')}
                            </a>
                            <a href="#cookies" className="hover:text-primary transition-colors">
                                {t('footer.bottom.cookiePolicy')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
