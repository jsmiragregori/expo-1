export interface Photo {
  id: string;
  url: string;
  title: string;
  description: string;
  year: string;
}

export interface Room {
  id: string;
  title: string;
  description: string;
  photos: Photo[];
}

export const GALLERY_DATA: Room[] = [
  {
    id: "urban-solitude",
    title: "Soledad Urbana",
    description: "Un estudio de los momentos de quietud dentro del pulso caótico de las metrópolis modernas.",
    photos: [
      {
        id: "us-1",
        url: "https://picsum.photos/seed/city1/1200/1600",
        title: "El Cruce",
        description: "Una figura solitaria se detiene en la intersección de la luz y la sombra.",
        year: "2024"
      },
      {
        id: "us-2",
        url: "https://picsum.photos/seed/city2/1200/1600",
        title: "Gigantes de Acero",
        description: "La verticalidad del progreso vista desde el pavimento.",
        year: "2023"
      },
      {
        id: "us-3",
        url: "https://picsum.photos/seed/city3/1200/1600",
        title: "Lluvia de Neón",
        description: "Reflejos de un mundo digital sobre un lienzo de asfalto mojado.",
        year: "2024"
      }
    ]
  },
  {
    id: "ethereal-nature",
    title: "Naturaleza Etérea",
    description: "Paisajes que desdibujan la línea entre la realidad y el mundo de los sueños.",
    photos: [
      {
        id: "en-1",
        url: "https://picsum.photos/seed/nature1/1200/1600",
        title: "Niebla sobre Cumbres",
        description: "Las montañas respirando en las primeras horas del amanecer.",
        year: "2023"
      },
      {
        id: "en-2",
        url: "https://picsum.photos/seed/nature2/1200/1600",
        title: "Bosque Silencioso",
        description: "Donde la luz se filtra a través de susurros ancestrales.",
        year: "2024"
      }
    ]
  },
  {
    id: "human-narrative",
    title: "Narrativa Humana",
    description: "Retratos que capturan las historias no contadas grabadas en cada mirada.",
    photos: [
      {
        id: "hn-1",
        url: "https://picsum.photos/seed/people1/1200/1600",
        title: "El Artesano",
        description: "Manos que hablan de décadas dedicadas a perfeccionar un oficio.",
        year: "2022"
      },
      {
        id: "hn-2",
        url: "https://picsum.photos/seed/people2/1200/1600",
        title: "Mirada del Mañana",
        description: "Una joven soñadora mirando más allá del horizonte de lo conocido.",
        year: "2024"
      }
    ]
  }
];
