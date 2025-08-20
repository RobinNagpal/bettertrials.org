import { Card, CardContent } from '@/components/ui/card';
import { Hospital, Shield, Zap, Users } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Hospital,
      title: 'Hospital Centric',
      description: 'Built for research units and physicians first, understanding the unique needs of healthcare environments.',
    },
    {
      icon: Shield,
      title: 'Compliance Friendly',
      description: 'No patient data leaves hospital systems; everything runs locally with comprehensive safeguards.',
    },
    {
      icon: Zap,
      title: 'Reduce Administrative Burden',
      description: 'Eliminate repetitive tasks like tracking contracts or retyping data, freeing up valuable staff time.',
    },
    {
      icon: Users,
      title: 'Practical Technology',
      description: 'Simple dashboards and screening tools that are fast to adopt with minimal training required.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Choose BetterTrails?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We understand the unique challenges hospitals face and have built our platform specifically to address them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
