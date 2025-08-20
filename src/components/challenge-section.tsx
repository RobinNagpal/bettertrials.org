import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, FileText, Users, Clock } from 'lucide-react';

export function ChallengeSection() {
  const challenges = [
    {
      icon: FileText,
      title: 'Contract Setup Complexity',
      description: 'Reviewing budgets and agreements across multiple hospitals can take months, delaying critical research.',
    },
    {
      icon: Users,
      title: 'Patient Recruitment Challenges',
      description: 'Doctors may not always have the right tools to quickly match patients to active trials.',
    },
    {
      icon: Clock,
      title: 'Administrative Burden',
      description: 'Staff often rely on manual processes, emails, or spreadsheets to track trial progress.',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">The Challenge</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Hospitals play the most critical role in clinical trials, acting in the best interest of patients, institutions, and sponsors. However, clinical
            trial work is often slowed down by systemic challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-destructive/10 rounded-lg mr-3">
                    <challenge.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{challenge.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full">
            <AlertTriangle className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-medium">
              {"That's why BetterTrails focuses on giving hospitals better tools to handle trials more efficiently"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
