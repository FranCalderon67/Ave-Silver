const productos = [
  {
    id: 1,
    categoria: "colgantes",
    nombre: "Amuleto Marino",
    imagen: "https://i.ibb.co/C2mxRZL/amuleto-marino.png",
  },

  {
    id: 2,
    categoria: "colgantes",
    nombre: "Amuleto Amatista + Aro flor",
    imagen: "https://i.ibb.co/T0s7rKZ/amuleto-amatista.png",
  },

  {
    id: 3,
    categoria: "colgantes",
    nombre: "Amuleto cuarzo rosa",
    imagen: "https://i.ibb.co/vcCjPv1/amuleto-cuarzo-rosa.png",
  },

  {
    id: 4,
    categoria: "colgantes",
    nombre: "Amuleto cuarzo cristal",
    imagen: "https://i.ibb.co/BZjwWP2/amuleto-cuarzo-cristal.png",
  },
  {
    id: 5,
    categoria: "colgantes",
    nombre: "Amuleto Lotus",
    imagen: "https://i.ibb.co/KhPs7vZ/amuleto-lotus.png",
  },

  {
    id: 6,
    categoria: "colgantes",
    nombre: "Amuleto mano granate",
    imagen: "https://i.ibb.co/YpQ1B8g/amuleto-mano-granate.png",
  },

  {
    id: 7,
    categoria: "colgantes",
    nombre: "Amuleto chispa + Amuleto mano + Amuleto corazón",
    imagen: "https://i.ibb.co/4ppRGd1/amuleto-chispa.png",
  },

  {
    id: 8,
    categoria: "colgantes",
    nombre: "Amuleto Ambar",
    imagen: "https://i.ibb.co/H2PYswz/amuleto-ambar.png",
  },

  {
    id: 9,
    categoria: "colgantes",
    nombre: "Colgante Alive",
    imagen: "https://i.ibb.co/0Jg39wj/colgante-alive.png",
  },

  {
    id: 10,
    categoria: "colgantes",
    nombre: "Amuleto topacio azul",
    imagen: "https://i.ibb.co/C6GJLKZ/amuleto-topacio-azul.png",
  },

  {
    id: 11,
    categoria: "anillos",
    nombre: "Anillo Mundo",
    imagen: "https://i.ibb.co/m6DQ6nj/anillo-mundo.png",
  },

  {
    id: 12,
    categoria: "anillos",
    nombre: "Anillo Ambar",
    imagen: "https://i.ibb.co/MVgtLby/anillo-ambar.png",
  },

  {
    id: 13,
    categoria: "anillos",
    nombre: "Anillo Orbita",
    imagen: "https://i.ibb.co/Tk4wthT/anillo-orbita.png",
  },

  {
    id: 14,
    categoria: "anillos",
    nombre: "Anillo Topacio",
    imagen: "https://i.ibb.co/Ryc8zrt/anillo-topacio.png",
  },

  {
    id: 15,
    categoria: "anillos",
    nombre: "Anillo sueño",
    imagen: "https://i.ibb.co/8MMY4Q4/anillo-sue-o.png",
  },

  {
    id: 16,
    categoria: "anillos",
    nombre: "Anillo cristal amatista",
    imagen: "https://i.ibb.co/WfC1J1K/anillo-cristal-amatista.png",
  },

  {
    id: 17,
    categoria: "anillos",
    nombre: "Brazalete + anillo line",
    imagen: "https://i.ibb.co/BsQhGZL/brazalete-anillo-line.png",
  },

  {
    id: 18,
    categoria: "anillos",
    nombre: "Anillo Tornado",
    imagen: "https://i.ibb.co/DkxLH9T/anillo-tornado.png",
  },

  {
    id: 19,
    categoria: "anillos",
    nombre: "Anillo Texturado",
    imagen: "https://i.ibb.co/GQJ0m7W/anillo-texturado.png",
  },

  {
    id: 20,
    categoria: "anillos",
    nombre: "Set Anillos",
    imagen: "https://i.ibb.co/4tDgV4m/set-anillos.png",
  },

  {
    id: 21,
    categoria: "anillos",
    nombre: "Anillo Raw",
    imagen: "https://i.ibb.co/DL4Gxry/anillo-raw.png",
  },

  {
    id: 22,
    categoria: "anillos",
    nombre: "Anillo gota Labradorita",
    imagen: "https://i.ibb.co/1vxy9rW/anillo-gota-labradorita.png",
  },

  {
    id: 23,
    categoria: "anillos",
    nombre: "Set Anillos",
    imagen: "https://i.ibb.co/8DMH1R1/set-anillos-2.png",
  },

  {
    id: 24,
    categoria: "anillos",
    nombre: "Anillo Square",
    imagen: "https://i.ibb.co/Pt7cqYL/anillo-square.png",
  },

  {
    id: 25,
    categoria: "brazaletes",
    nombre: "Brazalete + anillo line",
    imagen: "https://i.ibb.co/BsQhGZL/brazalete-anillo-line.png",
  },

  {
    id: 26,
    categoria: "aros",
    nombre: "Aro Line",
    imagen: "https://i.ibb.co/vXqfs5y/aro-line-solo.png",
  },

  {
    id: 27,
    categoria: "aros",
    nombre: "Amuleto Amatista + Aro flor",
    imagen: "https://i.ibb.co/T0s7rKZ/amuleto-amatista.png",
  },

  {
    id: 28,
    categoria: "aros",
    nombre: "Septum triangle, simple, Luna y line",
    imagen: "https://i.ibb.co/PQjJLF9/septum-triangle.png",
  },

  {
    id: 29,
    categoria: "aros",
    nombre: "Aros Geo + Ear cuff plane",
    imagen: "https://i.ibb.co/VST6BpG/aros-geo.png",
  },
  {
    id: 30,
    categoria: "aros",
    nombre: "Aros line, ear cuff torné, ear cuff simple",
    imagen: "https://i.ibb.co/6nn0w0Y/aros-line.png",
  },

  {
    id: 31,
    categoria: "prendedores",
    nombre: "Prendedor flor",
    imagen: "https://i.ibb.co/7VdynVz/prendedor-flor.png",
  },

  {
    id: 32,
    categoria: "tiaras",
    nombre: "Tiara Moon",
    imagen: "https://i.ibb.co/WPy4wrY/tiara-moon.png",
  }

];

const filtrarProductos = ( { category } ) => {
  const EXPORTAR_PRODUCTOS = new Promise((res, rej) => {
    setTimeout(() => {
      const LIST = !category ? productos : productos.filter( pieza => {
        return pieza.categoria === category
      });
      res(LIST)
    }, 2500);
  });

  return EXPORTAR_PRODUCTOS
} 

export { filtrarProductos };