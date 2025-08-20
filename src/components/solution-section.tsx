import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, LayoutDashboardIcon as Dashboard, Search, FileCheck } from 'lucide-react';

export function SolutionSection() {
  const solutions = [
    {
      icon: Dashboard,
      title: 'Faster Contract Onboarding',
      features: [
        'Centralized Dashboard: Hospital-wide platform for tracking all incoming trial requests',
        'Transparency Across Teams: Real-time updates reducing communication delays',
        'Smart Notifications: Automatic reminders ensuring nothing gets stuck',
        'No Patient Data Needed: Manages contracts and workflow, not sensitive clinical data',
      ],
      result: 'Reduce trial contract approval timelines from months to weeks',
    },
    {
      icon: Search,
      title: 'Smarter Patient Recruitment',
      features: [
        'Pre-Screening Support: Run eligibility checks locally before appointments',
        'Recruitment Visibility: See where patients are being excluded and why',
        'Clear Insights: Identify barriers like specific lab tests causing exclusions',
        'Local Processing: All screening happens on hospital systems',
      ],
      result: 'Doctors identify eligible patients more easily with clear recruitment insights',
    },
    {
      icon: FileCheck,
      title: 'Simplified Data Entry',
      features: [
        'Automated Transfer: Move selected fields from hospital systems to CRO forms',
        'Error Reduction: Eliminate manual typing and transcription mistakes',
        'Time Savings: Reduce repetitive data entry work for valuable staff',
        'No Integration Required: Works without direct system integration',
      ],
      result: 'Hospitals avoid repetitive data entry while ensuring accuracy',
    },
  ];

  return (
    <section id="solution" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Solution</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We focus on the biggest reasons for delays in clinical trials and provide hospitals and research teams with practical tools to speed things up.
          </p>
        </div>

        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-foreground">{solution.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="lg:pl-8">
                    <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                      <h4 className="font-semibold text-foreground mb-2">Result:</h4>
                      <p className="text-muted-foreground">{solution.result}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
