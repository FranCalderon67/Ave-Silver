const piedras = [
  {
    id: 1,
    nombre: "PIEDRA DE LUNA",
    descripcion:
      "Fuertemente conectada con la luna y la intuición. Nos recuerda que como la luna, todo crece y mengua y forma parte de un ciclo de cambios. Calma las emociones intensas. Equilibra las emociones masculinas y femeninas.",
    imagen: "https://i.ibb.co/mhDH3Lt/b36ce98e0da6a04676bbf5eb01db80c7.png",
  },

  {
    id: 2,
    nombre: "AGUAMARINA",
    descripcion:
      "Brinda coraje, rompe viejos patrones derrotistas. Calma la mente, afila el intelecto y aclara la confusión. Resulta util para cerrar procesos a todos los niveles. Aclara la comunicación bloqueada.",
    imagen: "https://i.ibb.co/HqYrKNd/6268a6fe217a7343f6a399528743d041.png",
  },

  {
    id: 3,
    nombre: "LABRADORITA",
    descripcion: "Protectora, eleva la conciencia y conecta con las energías universales. Disipa miedos e inseguridades. Fortalece la confianza.",
    imagen: "https://i.ibb.co/Nmk5Tv3/20acf0234cd3b9ab8300f4bf2cbdb852.png",
  },

  {
    id: 4,
    nombre: "GRANATE",
    descripcion:
      "Energizante y regeneradora. Aporta la serenidad y pasión cuando es apropiado. Inspira amor y el compromiso. Util en momento de crisis, ayuda la superación de situaciones adversas. Abre el corazon y otorga confianza en uno mismo.",
    imagen: "https://i.ibb.co/HhrHMDM/cd6a1913b52a0510ba42456eca7b9406.png",
  },

  {
    id: 5,
    nombre: "AMBAR",
    descripcion: "Posee intensas conexiones con la tierra, sanadora y limpiadora del entorno. Motiva, vinculando el objeto de deseo con el impulso para conseguirlo.",
    imagen: "https://i.ibb.co/3WR1H89/5528de1eeda6f1f567beb82b9c083766.png",
  },
  {
    id: 6,
    nombre: "AMATISTA",
    descripcion:
      "Poderosa y protectora de levada vibración espiritual. Tranquilizante natural. Potencia la meditación. Ayuda a superar adicciones. Ayuda a mantener foco. Ayuda en casos de insomnio. Potencia la memoria y la motivación. Disipa furia, miedo y ansiedad. Trasmuta energías negativas en positivas",
    imagen: "https://i.ibb.co/6nGgdYr/e8ebf1695e7c4cfcad25c308b276465c.png",
  },
  {
    id: 7,
    nombre: "TURMALINA",
    descripcion: "Purifica y transforma la energía densa en una vibración más ligera. Ayuda a la comprensión de uno mismo y de los demás, fomentando la tolerancia.",
    imagen: "https://i.ibb.co/gDWKjvz/6485d4cd901b0754b30d2ca925066e88.png",
  },
  {
    id: 8,
    nombre: "CUARZO",
    descripcion:
      "Sanador y amplificador de energía más poderoso del planeta. Trabaja como limpiador del alma, conectando las dimensiones físicas con la mente. Sintoniza tu propósito espiritual. Favorece la concentración y activa la memoria. Promueve el amor universal.",
    imagen: "https://i.ibb.co/4SF7Hkp/896915892b413802ef0a5ea66693ea27.png",
  },

  {
    id: 9,
    nombre: "TOPACIO",
    descripcion:
      "Dirige la energía a donde más se necesita. Alvia, cura, estimula, recarga, devuelve la motivación y alinea. Pone luz en el camino, resalta objetivos y te pone en contacto con los recursos internos. Cristal de amor y buena suerte. Útil para los que se dedican al arte, te ayuda a descubrir tus propias riquezas.",
    imagen: "https://i.ibb.co/0CRxpt3/2ac508181eab9204e2a715da4bd4acf6.png",
  },
  {
    id: 10,
    nombre: "PIEDRA DEL SOL",
    descripcion:
      "Potencia la intuición, el buen humor. Aporta luz y energía vital permitiendo que tu yo brille. Ayuda a soltar enganches a nivel mental o emocional, cortar vínculos. Te ayuda a poner límites a decir no. Fortalece la independencia y la vitalidad. Antidepresiva. Favorece el autoestima.",
    imagen: "https://i.ibb.co/pQB7hxK/09ebd9faec9918cca75362bcf50d408b.png",
  },

  {
    id: 11,
    nombre: "MALAQUITA",
    descripcion:
      "Muy poderosa, se usa con mucha precaución y pulida, puesto que amplifica tanto energías positivas como negativas. Protege contra las radiaciones de cualquier tipo. Te ayuda a realizar cambios, asumir riesgos y transforma. Te ayuda a expresar sentimientos bloqueados. Intensifica los estados de ánimo.",
    imagen: "https://i.ibb.co/YhTLwM7/431f315ee8a713899ef715558a9bda87.png",
  },

  {
    id: 12,
    nombre: "PREHNITA",
    descripcion: "Amor universal, cura al sanador. Contacta con el yo superior. Muestra el camino del crecimiento espiritual. Alivia fobias, pesadillas y miedos profundos.",
    imagen: "https://i.ibb.co/Jq0VPzy/4c42db558eae102c3c7d9f84fe14bbc8.png",
  },

  {
    id: 13,
    nombre: "CRISOCOLA",
    descripcion:
      "Calma, limpia y re energiza todos los chacras. Expulsa las emociones negativas como la culpa e invierte la programación emocional destructiva. Cura la pena e incrementa la capacidad de amar. Trae equilibrio interno.",
    imagen: "https://i.ibb.co/ChjrR7B/b0d182145dbd7ce62af4ec9bf69c6b39.png",
  },

  {
    id: 14,
    nombre: "AMAZONITA",
    descripcion:
      "Poderosa filtradora. Protege contra la contaminación electromagnética. Relajante. Alivia el sistema nervioso. Ayuda a comprender distintos puntos de vista. Alivia traumas emocionales. Disipa la energía negativa y el enfado.",
    imagen: "https://i.ibb.co/5khVYb2/b186e1f8ce025db401900d9dbb562ef0.png",
  },

  {
    id: 15,
    nombre: "LAPIS LAZULI",
    descripcion:
      "Abre el tercer ojo. Estimula la iluminación y potencia el trabajo con los sueños. Libera el stress y trae paz profunda. Enseña el poder de la palabra. Armoniza en todos los niveles. Te anima a hacerte cargo de tu vida y a la creatividad. Te ayuda afrontar la verdad.",
    imagen: "https://i.ibb.co/h7jBXdW/ba2370474516ce6d943a4d7737238af7.png",
  },
  {
    id: 16,
    nombre: "OJO DE TIGRE",
    descripcion:
      "Crea un estado elevado vibracional. Protectora. Muestra el uso correcto del poder. Ayuda a conseguir nuestros objetivos. Aclara nuestra intensión. Excelente para la persona que no toca tierra o no se compromete. Remedia problemas de autocrítica y bloqueos de creatividad.",
    imagen: "https://i.ibb.co/wMpsVGf/434bcb1a2c3f051d738e34500e148039.png",
  },
];

const exportarPiedras = new Promise((res, rej) => {
  setTimeout(() => {
    res(piedras);
  }, 3500);
});

export { exportarPiedras };
