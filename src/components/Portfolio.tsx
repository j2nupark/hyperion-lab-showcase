import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye, Code2 } from 'lucide-react';

const Portfolio = () => {
    // 러버블 예제 프로젝트들 (실제 러버블 예제 링크들로 구성)
    const projects = [
        {
            title: 'AI 챗봇 플랫폼',
            description: '인공지능 기반의 고객 서비스 챗봇 솔루션',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
            tags: ['AI', 'React', 'TypeScript', 'OpenAI'],
            demoUrl: 'https://lovable.dev/projects/demo-chatbot',
            codeUrl: '#',
            category: 'AI/ML',
        },
        {
            title: '전자상거래 대시보드',
            description: '실시간 데이터 분석이 가능한 관리자 대시보드',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
            tags: ['Dashboard', 'Analytics', 'React', 'Charts'],
            demoUrl: 'https://lovable.dev/projects/demo-dashboard',
            codeUrl: '#',
            category: 'Web App',
        },
        {
            title: '소셜 미디어 앱',
            description: '모던한 UI/UX의 소셜 네트워킹 플랫폼',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
            tags: ['Social', 'Mobile-First', 'React', 'PWA'],
            demoUrl: 'https://lovable.dev/projects/demo-social',
            codeUrl: '#',
            category: 'Mobile',
        },
        {
            title: '피트니스 트래커',
            description: '건강 관리와 운동 기록을 위한 웹 애플리케이션',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
            tags: ['Health', 'Tracking', 'Data Viz', 'React'],
            demoUrl: 'https://lovable.dev/projects/demo-fitness',
            codeUrl: '#',
            category: 'Health',
        },
        {
            title: '온라인 교육 플랫폼',
            description: '인터랙티브한 학습 경험을 제공하는 교육 플랫폼',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop',
            tags: ['Education', 'Interactive', 'Video', 'React'],
            demoUrl: 'https://lovable.dev/projects/demo-education',
            codeUrl: '#',
            category: 'Education',
        },
        {
            title: '암호화폐 트래킹',
            description: '실시간 암호화폐 시세와 포트폴리오 관리 도구',
            image: 'https://images.unsplash.com/photo-1642104704074-907c0698abc9?w=500&h=300&fit=crop',
            tags: ['Crypto', 'Real-time', 'Finance', 'WebSocket'],
            demoUrl: 'https://lovable.dev/projects/demo-crypto',
            codeUrl: '#',
            category: 'FinTech',
        },
    ];

    const categories = ['All', 'AI/ML', 'Web App', 'Mobile', 'Health', 'Education', 'FinTech'];

    return (
        <section id="portfolio" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-primary">포트폴리오</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        다양한 분야에서 축적한 경험과 기술력을 바탕으로 완성한 프로젝트들을 소개합니다.
                        <br />
                        <span className="text-sm text-muted-foreground/80 italic">
                            * 아래 프로젝트들은 Lovable 플랫폼의 예제 프로젝트들로 구성되어 있습니다.
                        </span>
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category, index) => (
                        <Button
                            key={category}
                            variant={index === 0 ? 'default' : 'outline'}
                            size="sm"
                            className="transition-all duration-300 hover:scale-105"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={project.title}
                            className="group overflow-hidden border-0 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                        <Button
                                            size="sm"
                                            className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                                            asChild
                                        >
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                                <Eye className="w-4 h-4 mr-1" />
                                                Demo
                                            </a>
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                                        >
                                            <Code2 className="w-4 h-4 mr-1" />
                                            Code
                                        </Button>
                                    </div>
                                </div>
                                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                                    {project.category}
                                </Badge>
                            </div>

                            <CardHeader className="pb-3">
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="text-muted-foreground leading-relaxed">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <Button className="w-full group/btn" asChild>
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                        프로젝트 보기
                                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <Card className="max-w-2xl mx-auto border-0 bg-gradient-to-br from-primary/5 to-accent-purple/5 backdrop-blur-sm">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-4">더 많은 프로젝트가 궁금하신가요?</h3>
                            <p className="text-muted-foreground mb-6">
                                HiwonLabs의 다양한 프로젝트 경험과 기술력을 직접 확인해보세요.
                            </p>
                            <Button size="lg" className="group">
                                전체 포트폴리오 보기
                                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
