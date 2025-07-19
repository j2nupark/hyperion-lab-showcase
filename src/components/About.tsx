import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Rocket, Users, Target } from 'lucide-react';

const About = () => {
    const values = [
        {
            icon: Lightbulb,
            title: '혁신',
            description: '최신 기술과 창의적 아이디어로 새로운 가치를 창출합니다',
            color: 'text-primary',
        },
        {
            icon: Rocket,
            title: '성장',
            description: '빠르게 변화하는 시장에서 지속적인 성장을 추구합니다',
            color: 'text-accent-purple',
        },
        {
            icon: Users,
            title: '협업',
            description: '팀워크와 소통을 바탕으로 최고의 결과를 만들어냅니다',
            color: 'text-accent-blue',
        },
        {
            icon: Target,
            title: '목표 달성',
            description: '명확한 목표 설정과 체계적인 실행으로 성공을 이룹니다',
            color: 'text-accent-green',
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-primary">하이원랩스</span>를 소개합니다
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        젊은 에너지와 최신 트렌드를 바탕으로 혁신적인 기술 솔루션을 제공하며, 고객의 성공과 함께
                        성장하는 기술 파트너입니다.
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
                    <h3 className="text-2xl font-bold mb-8">핵심 기술 스택</h3>
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
                    <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-br from-primary/5 to-accent-purple/5 backdrop-blur-sm">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-4 text-primary">우리의 미션</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                "기술의 힘으로 더 나은 세상을 만들어가며, 고객의 꿈을 현실로 바꾸는 것"
                                <br />
                                젊은 열정과 창의적 사고로 혁신적인 솔루션을 제공하여 디지털 시대의 새로운 가치를
                                창출합니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default About;
