/*=============================================
=                   Menu Movil                   =
=============================================*/
const menuToogle = document.querySelector(".menuMovil__boton");
const menuNavMovil = document.querySelector(".menuMovil__nav");

cerrarMenu = () => {
  if (menuToogle.classList.contains("active")) {
    menuToogle.src = "./fonts/bars-solid.svg";
    menuToogle.classList.toggle("active");
    menuNavMovil.classList.toggle("visible");
    menuNavMovil.style.zIndex = "0";
  } else {
    menuToogle.src = "./fonts/xmark-solid.svg";
    menuToogle.classList.toggle("active");
    menuNavMovil.classList.toggle("visible");
    menuNavMovil.style.zIndex = "100";
  }
};

menuToogle.addEventListener("click", () => {
  cerrarMenu();
});

/*============  End of Menu Movil  =============*/

//para que funcione al hacer clic fuera del texto del boton y no tener que volver a crear el boton

document.querySelector(".bienvenida__Btn").addEventListener("click", () => {
  location.hash = "";
  setTimeout(() => {
    location.hash = "#contacto";
  }, 0);
});

/*=============================================
=                   Slider                    =
=============================================*/

const sliderImagenes = document.querySelector(".sliderInicio__Imagenes");
const sliderInicioPrevBtn = document.querySelector(".sliderInicio__prevBtn");
const sliderInicioSigBtn = document.querySelector(".sliderInicio__sigBtn");

let indiceSlider = 1;

/* Subsection
-------------------------------------------------- */

moverSlider = (direccion) => {
  if (direccion === "derecha") {
    if (indiceSlider < 3) {
      sliderImagenes.style.transform = `translateX(-${indiceSlider * 100}%)`;

      indiceSlider++;
    }
  } else {
    if (indiceSlider > 1) {
      sliderImagenes.style.transform = `translateX(-${
        (indiceSlider - 2) * 100
      }%)`;

      indiceSlider--;
    }
  }

  circuloActivo();
  comprobarLimite();
};

/* Circulo Activo
  -------------------------------------------------- */
circuloActivo = () => {
  sliderInicioCirculo.forEach((element, indice) => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }
    if (indice === indiceSlider - 1) {
      element.classList.add("active");
    }
  });
};

/* End of Circulo Activo
    -------------------------------------------------- */

/* Comprobar Limite
    -------------------------------------------------- */

comprobarLimite = () => {
  if (indiceSlider === 3) {
    sliderInicioSigBtn.classList.add("desactivado");
  }
  if (
    indiceSlider < 3 &&
    sliderInicioSigBtn.classList.contains("desactivado")
  ) {
    sliderInicioSigBtn.classList.remove("desactivado");
  }

  if (indiceSlider === 1) {
    sliderInicioPrevBtn.classList.add("desactivado");
  }

  if (
    indiceSlider > 1 &&
    sliderInicioPrevBtn.classList.contains("desactivado")
  ) {
    sliderInicioPrevBtn.classList.remove("desactivado");
  }
};

/* End of Comprobar Limite
    -------------------------------------------------- */

sliderInicioPrevBtn.addEventListener("click", () => {
  moverSlider();
  clearInterval(intervaloSlider);
});

sliderInicioSigBtn.addEventListener("click", () => {
  moverSlider("derecha");
});

/* Slider Circulos
-------------------------------------------------- */

const sliderInicioCirculo = document.querySelectorAll(".sliderInicioCirculo");

moverSliderCirculo = (indice) => {
  sliderImagenes.style.transform = `translateX(-${indice * 100}%)`;
  indiceSlider = indice + 1;
  circuloActivo();
  comprobarLimite();
};

sliderInicioCirculo.forEach((element, indice) => {
  element.addEventListener("click", () => {
    moverSliderCirculo(indice);
  });
});

/* End of Slider Circulos
-------------------------------------------------- */

/* Auto-Slider
-------------------------------------------------- */

let sliderDireccion = "derecha";

const intervaloSlider = setInterval(() => {
  if (indiceSlider === 3) {
    sliderDireccion = "izquierda";
  }

  if (indiceSlider === 1) {
    sliderDireccion = "derecha";
  }

  moverSlider(sliderDireccion);
}, 8000);

/* End of Auto-Slider
-------------------------------------------------- */

/*============  End of Slider  =============*/

/*=============================================
=              Botones Menu Aside             =
=============================================*/

const botonesMenuAside = document.querySelectorAll(".menu__Navegacion__Boton");

const fotosMenuEspecial = document.querySelectorAll(".menu__Foto__Contenedor");

let botonActivo = 0;

filtrarElementosMenuEspecial = (indiceBotonClickeado) => {
  botonesMenuAside.forEach((element, i) => {
    if (element.classList.contains("menuNavegacionActivo")) {
      botonActivo = i;
    }
  });

  /* Subsection
  -------------------------------------------------- */

  ejecutarFiltro = (...indices) => {
    fotosMenuEspecial.forEach((element, i) => {
      element.classList.remove("fotoMenuEspecialOculta");

      if (indices.length === 3) {
        if (i !== indices[0] && i !== indices[1] && i !== indices[2]) {
          element.classList.add("fotoMenuEspecialOculta");
        }
      }
    });

    botonesMenuAside[indiceBotonClickeado].classList.add(
      "menuNavegacionActivo"
    );
    botonesMenuAside[botonActivo].classList.remove("menuNavegacionActivo");
  };

  /* End of Subsection
  -------------------------------------------------- */

  switch (indiceBotonClickeado) {
    case 1:
      ejecutarFiltro(0, 1, 2);
      break;

    case 2:
      ejecutarFiltro(3, 4, 5);
      break;

    case 3:
      ejecutarFiltro(6, 7, 8);
      break;

    default:
      ejecutarFiltro();
      break;
  }
};

botonesMenuAside.forEach((element, i) => {
  element.addEventListener("click", () => {
    filtrarElementosMenuEspecial(i);
  });
});

/*============  End of Botones Menu Aside  =============*/

/*=============================================
=                  Slider Modal               =
=============================================*/

const sliderModalImagenes = document.querySelector(".sliderModal__Imagenes");
const sliderModalPrevBtn = document.querySelector(".sliderModal__prevBtn");
const sliderModalSigBtn = document.querySelector(".sliderModal__sigBtn");
const modalGaleria = document.querySelector(".modalGaleria");

let indiceModalSlider = 1;

/* Subsection
-------------------------------------------------- */

moverSliderModal = (direccion) => {
  if (direccion === "derecha") {
    if (indiceModalSlider < 6) {
      sliderModalImagenes.style.transform = `translateX(-${
        indiceModalSlider * 100
      }%)`;

      indiceModalSlider++;
    }
  } else {
    if (indiceModalSlider > 1) {
      sliderModalImagenes.style.transform = `translateX(-${
        (indiceModalSlider - 2) * 100
      }%)`;

      indiceModalSlider--;
    }
  }

  circuloActivoModal();
  comprobarLimiteModal();
};

/* Circulo Modal Activo
  -------------------------------------------------- */
circuloActivoModal = () => {
  sliderModalCirculo.forEach((element, indice) => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }
    if (indice === indiceModalSlider - 1) {
      element.classList.add("active");
    }
  });
};

/* End of Circulo Modal Activo
    -------------------------------------------------- */

/* Comprobar Limite
    -------------------------------------------------- */

comprobarLimiteModal = () => {
  if (indiceModalSlider === 6) {
    sliderModalSigBtn.classList.add("desactivado");
  }
  if (
    indiceModalSlider < 6 &&
    sliderModalSigBtn.classList.contains("desactivado")
  ) {
    sliderModalSigBtn.classList.remove("desactivado");
  }

  if (indiceModalSlider === 1) {
    sliderModalPrevBtn.classList.add("desactivado");
  }

  if (
    indiceModalSlider > 1 &&
    sliderModalPrevBtn.classList.contains("desactivado")
  ) {
    sliderModalPrevBtn.classList.remove("desactivado");
  }
};

/* End of Comprobar Limite
    -------------------------------------------------- */

sliderModalPrevBtn.addEventListener("click", () => {
  moverSliderModal();
});

sliderModalSigBtn.addEventListener("click", () => {
  moverSliderModal("derecha");
});

/* Slider Modal Circulos
-------------------------------------------------- */

const sliderModalCirculo = document.querySelectorAll(".sliderModalCirculo");

moverSliderModalCirculo = (indice) => {
  sliderModalImagenes.style.transform = `translateX(-${indice * 100}%)`;
  indiceModalSlider = indice + 1;
  circuloActivoModal();
  comprobarLimiteModal();
};

sliderModalCirculo.forEach((element, indice) => {
  element.addEventListener("click", () => {
    moverSliderModalCirculo(indice);
  });
});

/* Abrir o Cerrar Modal
-------------------------------------------------- */

const cerrarModalBtn = document.querySelector(".modalGaleria__Cerrar");

cerrarModalBtn.addEventListener("click", () => {
  modalGaleria.classList.toggle("modalVisible");
  setTimeout(() => {
    modalGaleria.classList.toggle("modalWidth0");
    modalGaleria.classList.toggle("modalWidth100");
  }, 300);

  comprobarTamañoVentanaCerrar = () => {
    if (window.innerWidth <= 645) {
      menuMovil.classList.remove("menuMovilNone");
    } else {
      menu.classList.remove("menuNone");
    }
  };

  window.addEventListener("resize", comprobarTamañoVentanaCerrar);
  comprobarTamañoVentanaCerrar();
  corregirAlturaMenuAside();
});

/* Subsection
-------------------------------------------------- */

const imagenesGaleria = document.querySelectorAll(
  ".galeria__Imagen__Contenedor"
);

const menu = document.querySelector(".menu");
const menuMovil = document.querySelector(".menuMovil");

imagenesGaleria.forEach((element, i) => {
  element.addEventListener("click", () => {
    modalGaleria.classList.toggle("modalVisible");
    modalGaleria.classList.toggle("modalWidth100");
    modalGaleria.classList.toggle("modalWidth0");

    comprobarTamañoVentanaAbrir = () => {
      console.log("here");
      if (window.innerWidth <= 645) {
        menuMovil.classList.add("menuMovilNone");
      } else {
        menu.classList.add("menuNone");
      }
    };

    window.addEventListener("resize", comprobarTamañoVentanaAbrir);

    comprobarTamañoVentanaAbrir();
    moverSliderModalCirculo(i);
    corregirAlturaMenuAside();
  });
});

/* End of Abrir o Cerrar Modal
-------------------------------------------------- */

/*=============================================
=                Corregir Scroll              =
=============================================*/

function corregirDesplazamientoScroll() {
  const menu = document.querySelector(".menu");
  const menuMovil = document.querySelector(".menuMovil");

  let tipoScroll;

  if (window.innerWidth <= 645) {
    tipoScroll = menuMovil;
  } else {
    tipoScroll = menu;
  }

  document.querySelectorAll('a[href^="#"]').forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();

      let menuAjustar = tipoScroll;
      let menuAltura = menuAjustar.offsetHeight;

      // Obtiene el objetivo del enlace con hastag
      let targetId = this.getAttribute("href");
      let targetElement = document.querySelector(targetId);

      // Calcula la posición del elemento objetivo y ajusta con el offset de la altura del menú sticky
      let posicionElemento = targetElement.getBoundingClientRect().top;
      let desplazamiento = posicionElemento + window.scrollY - menuAltura;

      window.scrollTo({
        top: desplazamiento,
        behavior: "smooth",
      });
    });
  });
}

corregirDesplazamientoScroll();
window.addEventListener("resize", corregirDesplazamientoScroll);

/*============  End of Corregir Scroll  =============*/

/*=============================================
=      Modificar Bordes Inferiores Menu       =
=============================================*/

modificarBordesInferioresMenu = () => {
  window.onscroll = function () {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (window.innerWidth > 1000) {
      if (scrollPosition > 600) {
        menu.classList.add("menuScroll");
      } else {
        menu.classList.remove("menuScroll");
      }
    } else {
      menu.classList.remove("menuScroll");
    }
  };
};

window.addEventListener("resize", modificarBordesInferioresMenu);
modificarBordesInferioresMenu();

/*============  End of Modificar Bordes Inferiores Menu  =============*/

/*=============================================
=           Corregir Altura Menu Aside        =
=============================================*/

corregirAlturaMenuAside = () => {
  const menu = document.querySelector(".menu");
  const menuMovil = document.querySelector(".menuMovil");
  const menuAside = document.querySelector(".menu__Navegacion");

  let tipoScroll;

  if (window.innerWidth <= 645) {
    tipoScroll = menuMovil;
  } else {
    tipoScroll = menu;
  }

  let menuAjustar = tipoScroll;
  let menuAltura = menuAjustar.offsetHeight + 10;

  menuAside.style.top = `${menuAltura}px`;
};

corregirAlturaMenuAside();
window.addEventListener("resize", corregirAlturaMenuAside);

/*============  End of Corregir Altura Menu Aside  =============*/

/*=============================================
=      Cerrar Menu Movil con Click Links      =
=============================================*/

const linksMenuMovil = document.querySelectorAll(".linksMovil");

linksMenuMovil.forEach((element) => {
  console.log(element);
  element.addEventListener("click", () => {
    console.log("clic");
    cerrarMenu();
  });
});

/*============  End of Cerrar Menu Movil con Click Links  =============*/
