import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Rocket, Users, Target } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();
    
    const values = [
        {
            icon: Lightbulb,
            title: t('about.values.innovation'),
            description: t('about.values.innovationDesc'),
            color: 'text-primary',
        },
        {
            icon: Rocket,
            title: t('about.values.growth'),
            description: t('about.values.growthDesc'),
            color: 'text-muted-foreground',
        },
        {
            icon: Users,
            title: t('about.values.collaboration'),
            description: t('about.values.collaborationDesc'),
            color: 'text-muted-foreground',
        },
        {
            icon: Target,
            title: t('about.values.achievement'),
            description: t('about.values.achievementDesc'),
            color: 'text-muted-foreground',
        },
    ];

    const technologies = [
        'React',
        'TypeScript',
        'Node.js',
        'Python',
        'AI/ML',
        'Cloud Computing',
        'Mobile Development',
        'Web3',
        'IoT',
    ];

    return (
        <section id="about" className="py-20 bg-gradient-subtle">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-primary">HiwonLabs</span>{t('about.title')}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t('about.subtitle')}
                    </p>
                </div>

                {/* Company Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {values.map((value, index) => (
                        <Card
                            key={value.title}
                            className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm animate-slide-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CardContent className="p-6 text-center">
                                <div
                                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/50 mb-4 group-hover:scale-110 transition-transform ${value.color}`}
                                >
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Technology Stack */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-8">{t('about.techStack')}</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {technologies.map((tech, index) => (
                            <Badge
                                key={tech}
                                variant="secondary"
                                className="px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground animate-fade-in"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="mt-16 text-center">
                    <Card className="max-w-4xl mx-auto border-0 bg-muted/20 backdrop-blur-sm">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-4 text-primary">{t('about.mission')}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                "{t('about.missionText')}"
                                <br />
                                {t('about.missionDesc')}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default About;
