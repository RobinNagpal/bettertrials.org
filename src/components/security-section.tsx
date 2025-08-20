import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, FileCheck, Eye } from 'lucide-react';

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'No Patient Data Stored',
      description: 'All patient checks are done locally on hospital systems. We never store or access sensitive patient information.',
    },
    {
      icon: FileCheck,
      title: 'Audit Trails & Transparency',
      description: 'Every action is logged for accountability, providing complete visibility into all platform activities.',
    },
    {
      icon: Shield,
      title: 'HIPAA & PHIPA Conscious',
      description: 'Designed with US and Canadian privacy regulations in mind, ensuring full compliance with healthcare standards.',
    },
  ];

  return (
    <section id="security" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Security & Compliance</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            We know trust is everything in healthcare. {"That's"} why our platform is built around the highest security standards.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full">
            <Eye className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-medium">Our guiding principle: hospitals stay in full control of their data and processes</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
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
