import React from 'react';
import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { RoomSection } from './components/RoomSection';
import { Author } from './components/Author';
import { Navigation } from './components/Navigation';
import { GALLERY_DATA } from './constants';

export default function App() {
  return (
    <div className="relative bg-bg selection:bg-accent selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        
        <div id="rooms" className="relative z-10">
          {GALLERY_DATA.map((room, index) => (
            <RoomSection key={room.id} room={room} index={index} />
          ))}
        </div>

        <Author />

        <section id="contact" className="py-32 px-6 text-center border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <span className="font-mono text-xs text-accent uppercase tracking-widest mb-4 block">Consultas</span>
            <h2 className="font-display text-5xl lg:text-7xl uppercase mb-8">Conectemos</h2>
            <p className="text-white/50 mb-12 text-lg">
              Para colaboraciones, visitas privadas o diálogo artístico.
            </p>
            <a 
              href="mailto:hello@lumina-gallery.art" 
              className="inline-block px-12 py-5 border border-white/20 font-display uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 rounded-full"
            >
              Enviar un Mensaje
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 px-6 lg:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 font-mono text-[10px] uppercase tracking-widest">
        <div>© 2026 Lumina Gallery</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Vimeo</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
        </div>
        <div>Diseñado para el Alma</div>
      </footer>
    </div>
  );
}
