document.addEventListener("DOMContentLoaded", () => {
  const clickableElements = document.querySelectorAll(".clickable");
  const menus = {
    menu1: document.getElementById("menu1"),
    menu2: document.getElementById("menu2"),
    menu3: document.getElementById("menu3"),
    menu4: document.getElementById("menu4"),
    menu5: document.getElementById("menu5"),
    menu6: document.getElementById("menu6"),
    menu7: document.getElementById("menu7"),
    menu8: document.getElementById("menu8"),
    menu9: document.getElementById("menu9"),
    menu10: document.getElementById("menu10"),
    menu11: document.getElementById("menu11"),
    menu12: document.getElementById("menu12"),
    menu13: document.getElementById("menu13"),
    menu14: document.getElementById("menu14"),
    menu15: document.getElementById("menu15"),
  };

  clickableElements.forEach((el, index) => {
    el.addEventListener("click", (event) => {
      // Ocultar todos los menús
      Object.values(menus).forEach(menu => menu.setAttribute("visible", false));

      const menu = menus[`menu${index + 1}`];
      if (menu) {
        menu.setAttribute("visible", true);

        // Obtener la posición y rotación del elemento clickeado
        const planePos = el.object3D.position;
        const planeRotation = el.object3D.rotation;

        // Colocar el menú frente al plano clickeado
        const offsetZ = 0.5; // Ajustar para colocar el menú a una distancia del plano
        const menuPos = {
          x: planePos.x + Math.sin(planeRotation.y) * offsetZ,
          y: planePos.y + 0.5, // Ajustar para colocar el menú un poco más arriba
          z: planePos.z + Math.cos(planeRotation.y) * offsetZ
        };

        // Ajustar la posición del menú
        menu.setAttribute("position", menuPos);

        // Ajustar la rotación del menú para que esté paralelo al plano
        menu.setAttribute("rotation", { x: 0, y: planeRotation.y * (180 / Math.PI), z: 0 });
      }
    });
  });

  for (let i = 1; i <= 15; i++) {
    const closeButton = document.getElementById(`closeButton${i}`);
    closeButton.addEventListener("click", () => {
      const menu = document.getElementById(`menu${i}`);
      if (menu) {
        menu.setAttribute("visible", false);
      }
    });
  }
});
