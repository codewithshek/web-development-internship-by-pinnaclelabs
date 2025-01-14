import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Leaf } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Restaurant interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">15+</p>
                  <p className="text-primary font-medium">Years of Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Crafting Culinary Excellence Since 2009
              </h2>
              <p className="text-gray-400 leading-relaxed">
                At CULINA, we blend traditional Indian flavors with modern culinary techniques to create an unforgettable dining experience. Our commitment to quality and innovation has made us a destination for food enthusiasts and casual diners alike.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Feature
                icon={<Award className="w-6 h-6 text-accent" />}
                title="Award Winning"
                description="Recognized for culinary excellence"
              />
              <Feature
                icon={<Users className="w-6 h-6 text-accent" />}
                title="Expert Chefs"
                description="Crafting memorable flavors"
              />
              <Feature
                icon={<Clock className="w-6 h-6 text-accent" />}
                title="Fresh Daily"
                description="Quality ingredients sourced daily"
              />
              <Feature
                icon={<Leaf className="w-6 h-6 text-accent" />}
                title="Organic Focus"
                description="Supporting local farmers"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-primary/50 p-6 rounded-xl">
      <div className="flex items-center gap-4 mb-2">
        {icon}
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}