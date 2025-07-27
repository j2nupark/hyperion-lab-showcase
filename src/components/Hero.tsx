import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
const Hero = () => {
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
                    {/* Logo/Brand */}
                    <div className="inline-flex items-center gap-2 mb-8 p-4 rounded-2xl glass-effect">
                        <h1 className="text-3xl font-bold text-primary">HiwonLabs</h1>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        젊은 에너지로
                        <br />
                        <span className="text-primary font-bold">미래를 창조</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                        최신 트렌드와 혁신적인 기술로 차별화된 솔루션을 제공하는
                        <br className="hidden md:block" />
                        <span className="text-primary font-semibold">차세대 기술 회사</span>입니다
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center p-6 rounded-2xl glass-effect transition-smooth hover:scale-105">
                            <div className="text-3xl font-bold text-primary mb-2">10+</div>
                            <div className="text-muted-foreground">프로젝트 경험</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl glass-effect transition-smooth hover:scale-105">
                            <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                            <div className="text-muted-foreground">최신 기술 적용</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl glass-effect transition-smooth hover:scale-105">
                            <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                            <div className="text-muted-foreground">고객 지원</div>
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
