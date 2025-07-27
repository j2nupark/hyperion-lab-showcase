import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();
    
    const contactInfo = [
        {
            icon: Mail,
            title: t('contact.info.email'),
            value: t('contact.info.emailValue'),
            description: t('contact.info.emailDesc'),
        },
        {
            icon: Phone,
            title: t('contact.info.phone'),
            value: t('contact.info.phoneValue'),
            description: t('contact.info.phoneDesc'),
        },
        {
            icon: MapPin,
            title: t('contact.info.location'),
            value: t('contact.info.locationValue'),
            description: t('contact.info.locationDesc'),
        },
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-subtle">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-primary">{t('contact.title')}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8 animate-slide-in">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">{t('contact.contactInfo')}</h3>
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
                                    {t('contact.socialMedia')}
                                </h4>
                                <p className="text-muted-foreground mb-4">
                                    {t('contact.socialDesc')}
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
                            <CardTitle className="text-2xl">{t('contact.form.title')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">{t('contact.form.name')} *</Label>
                                    <Input
                                        id="name"
                                        placeholder={t('contact.form.placeholders.name')}
                                        className="border-border/50 focus:border-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">{t('contact.form.email')} *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder={t('contact.form.placeholders.email')}
                                        className="border-border/50 focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company">{t('contact.form.company')}</Label>
                                <Input
                                    id="company"
                                    placeholder={t('contact.form.placeholders.company')}
                                    className="border-border/50 focus:border-primary"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">{t('contact.form.subject')} *</Label>
                                <Input
                                    id="subject"
                                    placeholder={t('contact.form.placeholders.subject')}
                                    className="border-border/50 focus:border-primary"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">{t('contact.form.message')} *</Label>
                                <Textarea
                                    id="message"
                                    placeholder={t('contact.form.placeholders.message')}
                                    rows={5}
                                    className="border-border/50 focus:border-primary resize-none"
                                />
                            </div>

                            <Button
                                size="lg"
                                className="w-full group bg-primary hover:bg-primary/90 glow-primary transition-all duration-300"
                            >
                                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                {t('contact.form.send')}
                            </Button>

                            <p className="text-sm text-muted-foreground text-center">
                                {t('contact.form.privacy')}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* FAQ Section */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center mb-8">{t('contact.faq.title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {(t('contact.faq.questions', { returnObjects: true }) as Array<{q: string, a: string}>).map((faq, index) => (
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
