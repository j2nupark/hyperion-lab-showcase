import { useTranslation } from 'react-i18next';
const Hero = () => {
    const { t, i18n } = useTranslation();
    console.log('Hero component - Current language:', i18n.language);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-muted/20 animate-float"></div>
                <div
                    className="absolute top-40 right-32 w-12 h-12 rounded-full bg-muted/30 animate-float"
                    style={{
                        animationDelay: '2s',
                    }}
                ></div>
                <div
                    className="absolute bottom-40 left-32 w-20 h-20 rounded-full bg-muted/20 animate-float"
                    style={{
                        animationDelay: '4s',
                    }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <div className="animate-fade-in">

                    {/* Main Heading */}
                    <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        {t('hero.title')}
                        <br />
                        <span className="text-primary font-bold">{t('hero.titleHighlight')}</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                        {t('hero.subtitle')}
                        <br className="hidden md:block" />
                        <span className="text-primary font-semibold">{t('hero.subtitleHighlight')}</span>{t('hero.subtitleEnd')}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center p-6 rounded-2xl glass-effect transition-smooth hover:scale-105">
                            <div className="text-3xl font-bold text-primary mb-2">10+</div>
                            <div className="text-muted-foreground">{t('hero.stats.projects')}</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl glass-effect transition-smooth hover:scale-105">
                            <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                            <div className="text-muted-foreground">{t('hero.stats.technology')}</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl glass-effect transition-smooth hover:scale-105">
                            <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                            <div className="text-muted-foreground">{t('hero.stats.support')}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
