import React from 'react';
import SectionHeader from './services/SectionHeader';
import BenefitsCard from './services/BenefitsCard';
import HowItWorksCard from './services/HowItWorksCard';
import { Card, CardContent } from './ui/card';
import { AirVent } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="bg-beach-sand/30 py-10 md:py-14 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          badge="My Services"
          badgeColor="peach"
          title="Myofunctional Therapy"
          subtitle="Changing habits, one insightful session at a time."
        />

        {/* Added new card explaining what myofunctional therapy is */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="card-gradient border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-beach-blue/20 text-beach-blue shrink-0">
                  <AirVent className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-semibold mb-2">What Is Myofunctional Therapy?</h3>
                  <p className="text-beach-text/90">
                    Myofunctional therapy is a specialized exercise program for the muscles of your face, mouth, tongue, and throat. It helps correct improper muscle habits, improve breathing, and support healthy swallowing, chewing, and speech. Think of it as physical therapy for your mouth and face.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <BenefitsCard />
          <HowItWorksCard />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
