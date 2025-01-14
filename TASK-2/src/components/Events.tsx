import React from 'react';
import { Calendar, Users, Music, ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Events() {
  return (
    <section id="events" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join us for special culinary experiences and memorable moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <EventCard
            icon={<Calendar className="w-8 h-8" />}
            title="Weekend Brunch"
            date="Every Saturday & Sunday"
            description="Indulge in our special brunch menu featuring live stations and unlimited mimosas"
            time="11 AM - 3 PM"
          />
          <EventCard
            icon={<ChefHat className="w-8 h-8" />}
            title="Chef's Table"
            date="Every Friday"
            description="An intimate dining experience with our executive chef's special tasting menu"
            time="7 PM - 10 PM"
          />
          <EventCard
            icon={<Music className="w-8 h-8" />}
            title="Jazz Nights"
            date="Thursday & Friday"
            description="Live jazz performances while you dine under the stars"
            time="8 PM Onwards"
          />
          <EventCard
            icon={<Users className="w-8 h-8" />}
            title="Cooking Classes"
            date="First Sunday Monthly"
            description="Learn the secrets of Indian cuisine from our master chefs"
            time="4 PM - 6 PM"
          />
        </div>
      </div>
    </section>
  );
}

function EventCard({ icon, title, date, description, time }: {
  icon: React.ReactNode;
  title: string;
  date: string;
  description: string;
  time: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-secondary p-8 rounded-2xl hover:shadow-xl transition-all group"
    >
      <div className="text-accent mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-accent text-sm mb-4">{date}</p>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <p className="text-white text-sm font-medium">{time}</p>
    </motion.div>
  );
}