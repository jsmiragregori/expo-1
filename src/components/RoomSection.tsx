import React from 'react';
import { motion } from 'motion/react';
import { Room } from '../constants';

interface RoomSectionProps {
  room: Room;
  index: number;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ room, index }) => {
  return (
    <section id={room.id} className="min-h-screen py-24 px-6 lg:px-24 flex flex-col justify-center border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-accent mb-4 block">Sala 0{index + 1}</span>
          <h2 className="font-display text-6xl lg:text-8xl uppercase mb-6 tracking-tighter">
            {room.title}
          </h2>
          <p className="max-w-xl text-lg text-white/60 font-light leading-relaxed">
            {room.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {room.photos.map((photo, pIndex) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: pIndex * 0.1 }}
              className="group cursor-crosshair"
            >
              <div className="aspect-[4/5] overflow-hidden bg-zinc-900 mb-4 relative">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-sm font-mono tracking-wider">{photo.year}</p>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1">{photo.title}</h3>
              <p className="text-white/40 text-sm italic">{photo.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
