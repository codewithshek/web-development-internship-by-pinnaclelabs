import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-amber-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ContactInfo
            icon={<MapPin className="w-6 h-6" />}
            title="Address"
            detail="123 Food Street, Bangalore, India"
          />
          <ContactInfo
            icon={<Phone className="w-6 h-6" />}
            title="Phone"
            detail="+91 98765 43210"
          />
          <ContactInfo
            icon={<Mail className="w-6 h-6" />}
            title="Email"
            detail="info@rrrrestaurant.com"
          />
          <ContactInfo
            icon={<Clock className="w-6 h-6" />}
            title="Hours"
            detail="Mon-Sun: 11:00 AM - 11:00 PM"
          />
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{detail}</p>
    </div>
  );
}