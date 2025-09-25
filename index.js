// Configuración del tour Marzipano
document.addEventListener('DOMContentLoaded', function() {
  // Elemento contenedor del panorama
  var panoElement = document.getElementById('pano');

  // Opciones del visor
  var viewerOpts = {
    webgl: true,
    controls: {
      mouseView: true,
      keyboard: true,
      touchView: true,
      // Habilitar botón de realidad virtual
      vrButton: true
    }
  };

  // Crear el visor
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Cargar los datos del tour (de data.js)
  var data = window.TOUR_DATA; // Asegúrate de que data.js define TOUR_DATA

  // Configurar la escena
  var scene = viewer.createScene({
    source: Marzipano.ImageUrlSource.fromString(
      data.tilesUrl + '/{z}/{f}/{x}/{y}.jpg',
      { tileSize: data.tileSize }
    ),
    geometry: new Marzipano.EquirectGeometry([{ width: data.width }])
  });

  // Configurar la vista
  var view = viewer.createView(scene, {
    yaw: data.initialYaw || 0,
    pitch: data.initialPitch || 0,
    fov: data.initialFov || Math.PI / 3
  });

  // Mostrar la vista
  view.render();
});
