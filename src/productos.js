const productos = [
  {
    id: 1,
    categoria: "colgantes",
    nombre: "Amuleto Marino-Marine Talisman",
    imagen: "https://i.ibb.co/C2mxRZL/amuleto-marino.png",
  },

  {
    id: 2,
    categoria: ["colgantes", 'aros'],
    nombre: "Amuleto Amatista + Aro Flor-Amethyst Talisman + Flower Earring",
    imagen: "https://i.ibb.co/T0s7rKZ/amuleto-amatista.png",
  },

  {
    id: 3,
    categoria: "colgantes",
    nombre: "Amuleto Cuarzo Rosa-Pink Quartz Talisman ",
    imagen: "https://i.ibb.co/vcCjPv1/amuleto-cuarzo-rosa.png",
  },

  {
    id: 4,
    categoria: "colgantes",
    nombre: "Amuleto Cuarzo Cristal-Crystal Quartz Talisman",
    imagen: "https://i.ibb.co/BZjwWP2/amuleto-cuarzo-cristal.png",
  },
  {
    id: 5,
    categoria: "colgantes",
    nombre: "Amuleto Lotus-Lotus Talisman",
    imagen: "https://i.ibb.co/KhPs7vZ/amuleto-lotus.png",
  },

  {
    id: 6,
    categoria: "colgantes",
    nombre: "Amuleto Mano Granate-Garnet Hand Talisman",
    imagen: "https://i.ibb.co/YpQ1B8g/amuleto-mano-granate.png",
  },

  {
    id: 7,
    categoria: "colgantes",
    nombre: "Amuleto Chispa, Mano, Corazón-Sparkle, Hand, Heart Talisman",
    imagen: "https://i.ibb.co/4ppRGd1/amuleto-chispa.png",
  },

  {
    id: 8,
    categoria: "colgantes",
    nombre: "Amuleto Ambar-Amber Talisman",
    imagen: "https://i.ibb.co/H2PYswz/amuleto-ambar.png",
  },

  {
    id: 9,
    categoria: "colgantes",
    nombre: "Colgante Alive-Alive Necklace",
    imagen: "https://i.ibb.co/0Jg39wj/colgante-alive.png",
  },

  {
    id: 10,
    categoria: "colgantes",
    nombre: "Amuleto Topacio Azul-Blue Topaz Talisman",
    imagen: "https://i.ibb.co/C6GJLKZ/amuleto-topacio-azul.png",
  },

  {
    id: 11,
    categoria: "anillos",
    nombre: "Anillo Mundo-World Ring",
    imagen: "https://i.ibb.co/m6DQ6nj/anillo-mundo.png",
  },

  {
    id: 12,
    categoria: "anillos",
    nombre: "Anillo Ambar-Amber Ring",
    imagen: "https://i.ibb.co/MVgtLby/anillo-ambar.png",
  },

  {
    id: 13,
    categoria: "anillos",
    nombre: "Anillo Orbita-Orbit Ring",
    imagen: "https://i.ibb.co/Tk4wthT/anillo-orbita.png",
  },

  {
    id: 14,
    categoria: "anillos",
    nombre: "Anillo Topacio-Topaz Ring",
    imagen: "https://i.ibb.co/Ryc8zrt/anillo-topacio.png",
  },

  {
    id: 15,
    categoria: "anillos",
    nombre: "Anillo Sueño-Dreams Ring",
    imagen: "https://i.ibb.co/8MMY4Q4/anillo-sue-o.png",
  },

  {
    id: 16,
    categoria: "anillos",
    nombre: "Anillo Cistal Amatista-Amethyst Crystal Ring",
    imagen: "https://i.ibb.co/WfC1J1K/anillo-cristal-amatista.png",
  },

  {
    id: 17,
    categoria: ["anillos", 'brazaletes'],
    nombre: "Brazalete + Anillo Line-Bracelet + Line Ring",
    imagen: "https://i.ibb.co/BsQhGZL/brazalete-anillo-line.png",
  },

  {
    id: 18,
    categoria: "anillos",
    nombre: "Anillo Tornado-Tornado Ring",
    imagen: "https://i.ibb.co/DkxLH9T/anillo-tornado.png",
  },

  {
    id: 19,
    categoria: "anillos",
    nombre: "Anillo Texturado-Textured Ring",
    imagen: "https://i.ibb.co/GQJ0m7W/anillo-texturado.png",
  },

  {
    id: 20,
    categoria: "anillos",
    nombre: "Set Anillos-Rings Set",
    imagen: "https://i.ibb.co/4tDgV4m/set-anillos.png",
  },

  {
    id: 21,
    categoria: "anillos",
    nombre: "Anillo Raw-Raw Ring",
    imagen: "https://i.ibb.co/DL4Gxry/anillo-raw.png",
  },

  {
    id: 22,
    categoria: "anillos",
    nombre: "Anillo Gota -Labradorite Drop Ring",
    imagen: "https://i.ibb.co/1vxy9rW/anillo-gota-labradorita.png",
  },

  {
    id: 23,
    categoria: "anillos",
    nombre: "Set Anillos-Rings Set",
    imagen: "https://i.ibb.co/8DMH1R1/set-anillos-2.png",
  },

  {
    id: 24,
    categoria: "anillos",
    nombre: "Anillo Square-Square Ring",
    imagen: "https://i.ibb.co/Pt7cqYL/anillo-square.png",
  },

  {
    id: 25,
    categoria: "aros",
    nombre: "Aro Line-Line Earring",
    imagen: "https://i.ibb.co/vXqfs5y/aro-line-solo.png",
  },

  {
    id: 26,
    categoria: "aros",
    nombre: "Septum Triangle, Simple, Luna y Line",
    imagen: "https://i.ibb.co/PQjJLF9/septum-triangle.png",
  },

  {
    id: 27,
    categoria: "aros",
    nombre: "Aros Geo + Ear Cuff Plane-Geo Earring + Ear Cuff Plane",
    imagen: "https://i.ibb.co/VST6BpG/aros-geo.png",
  },
  {
    id: 28,
    categoria: "aros",
    nombre: "Aros Line, Ear Cuff Torné, Ear Cuff Simple",
    imagen: "https://i.ibb.co/6nn0w0Y/aros-line.png",
  },

  {
    id: 29,
    categoria: "prendedores",
    nombre: "Prendedor Flor-Flower Ping",
    imagen: "https://i.ibb.co/7VdynVz/prendedor-flor.png",
  },

  {
    id: 30,
    categoria: "tiaras",
    nombre: "Tiara Moon",
    imagen: "https://i.ibb.co/WPy4wrY/tiara-moon.png",
  },
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
