const productos = [
  {
    id: 1,
    categoria: "colgantes",
    nombre: "Marine Necklace",
    imagen: "https://i.ibb.co/88TSJvh/IMG-8920.jpg",
  },

  {
    id: 2,
    categoria: "colgantes",
    nombre: "Amethyst Necklace",
    imagen: "https://i.ibb.co/C1KKyrj/IMG-8355.jpg",
  },

  {
    id: 3,
    categoria: "colgantes",
    nombre: "Pink Quartz Necklace",
    imagen: "https://i.ibb.co/vcCjPv1/amuleto-cuarzo-rosa.png",
  },

  {
    id: 4,
    categoria: "colgantes",
    nombre: "Crystal Quartz Necklace",
    imagen: "https://i.ibb.co/BZjwWP2/amuleto-cuarzo-cristal.png",
  },
  {
    id: 5,
    categoria: "colgantes",
    nombre: "Lotus Necklace",
    imagen: "https://i.ibb.co/KhPs7vZ/amuleto-lotus.png",
  },

  {
    id: 6,
    categoria: "colgantes",
    nombre: "Garnet Hand Charm",
    imagen: "https://i.ibb.co/YpQ1B8g/amuleto-mano-granate.png",
  },

  {
    id: 7,
    categoria: "colgantes",
    nombre: "Hand + Heart Necklace",
    imagen: "https://i.ibb.co/4ppRGd1/amuleto-chispa.png",
  },

  {
    id: 8,
    categoria: "colgantes",
    nombre: "Amber Necklace",
    imagen: "https://i.ibb.co/H2PYswz/amuleto-ambar.png",
  },

  {
    id: 9,
    categoria: "colgantes",
    nombre: "Alive Necklace",
    imagen: "https://i.ibb.co/0Jg39wj/colgante-alive.png",
  },

  {
    id: 10,
    categoria: "colgantes",
    nombre: "Blue Topaz Necklace",
    imagen: "https://i.ibb.co/C6GJLKZ/amuleto-topacio-azul.png",
  },

  {
    id: 11,
    categoria: "anillos",
    nombre: "World Ring",
    imagen: "https://i.ibb.co/m6DQ6nj/anillo-mundo.png",
  },

  {
    id: 12,
    categoria: "anillos",
    nombre: "Amber Ring",
    imagen: "https://i.ibb.co/MVgtLby/anillo-ambar.png",
  },

  {
    id: 13,
    categoria: "anillos",
    nombre: "Orbit Ring",
    imagen: "https://i.ibb.co/Tk4wthT/anillo-orbita.png",
  },

  {
    id: 14,
    categoria: "anillos",
    nombre: "Topaz Ring",
    imagen: "https://i.ibb.co/Ryc8zrt/anillo-topacio.png",
  },

  {
    id: 15,
    categoria: "anillos",
    nombre: "Dreams Ring",
    imagen: "https://i.ibb.co/8MMY4Q4/anillo-sue-o.png",
  },

  {
    id: 16,
    categoria: "anillos",
    nombre: "Amethyst Crystal Ring",
    imagen: "https://i.ibb.co/WfC1J1K/anillo-cristal-amatista.png",
  },

  {
    id: 17,
    categoria: ["anillos", 'brazaletes'],
    nombre: "Line-Bracelet + Line Ring",
    imagen: "https://i.ibb.co/BsQhGZL/brazalete-anillo-line.png",
  },


  {
    id: 19,
    categoria: "anillos",
    nombre: "Textured Ring",
    imagen: "https://i.ibb.co/GQJ0m7W/anillo-texturado.png",
  },



  {
    id: 21,
    categoria: "anillos",
    nombre: "Raw Ring",
    imagen: "https://i.ibb.co/DL4Gxry/anillo-raw.png",
  },

  {
    id: 22,
    categoria: "anillos",
    nombre: "Labradorite Drop Ring",
    imagen: "https://i.ibb.co/1vxy9rW/anillo-gota-labradorita.png",
  },



  {
    id: 24,
    categoria: "anillos",
    nombre: "Square Ring",
    imagen: "https://i.ibb.co/Pt7cqYL/anillo-square.png",
  },


  {
    id: 26,
    categoria: "aros",
    nombre: "Septum Triangle, Simple, Moon y Line",
    imagen: "https://i.ibb.co/PQjJLF9/septum-triangle.png",
  },

  {
    id: 27,
    categoria: "aros",
    nombre: "Geo Earring + Garnet Midi Ring",
    imagen: "https://i.ibb.co/zQzth1f/IMG-8912.jpg",
  },



  {
    id: 28,
    categoria: "aros",
    nombre: "Earring Line, Ear Cuff Torné, Ear Cuff Simple",
    imagen: "https://i.ibb.co/6nn0w0Y/aros-line.png",
  },

  {
    id: 29,
    categoria: "prendedores",
    nombre: "Flower Brooche",
    imagen: "https://i.ibb.co/7VdynVz/prendedor-flor.png",
  },

  {
    id: 30,
    categoria: "tiaras",
    nombre: "Tiara Moon",
    imagen: "https://i.ibb.co/WPy4wrY/tiara-moon.png",
  },

  {
    id: 31,
    categoria: "aros",
    nombre: "Flower Earring",
    imagen: "https://i.ibb.co/jzM71c6/IMG-8841.jpg"
  }


];

const filtrarProductos = ({ category }) => {
  const EXPORTAR_PRODUCTOS = new Promise((res, rej) => {
    setTimeout(() => {
      const LIST = !category
        ? productos
        : productos.filter((pieza) => {
          return pieza.categoria.includes(category);
        });
      res(LIST);
    }, 2500);
  });

  return EXPORTAR_PRODUCTOS;
};

export { filtrarProductos };
