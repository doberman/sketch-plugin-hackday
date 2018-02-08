/**
 *
 * @param {MSDocument} doc - Reference to the open document
 * @description Finds and returns all pages in the document
 * @returns {Array} A flatten array with all the pages
 */
const getAllPages = (doc) => {
  return doc.pages();
}

/**
 *
 * @param {MSLayer} layer - Parent layer to search
 * @param {Bool} [includeContainers= true] includeContainers - If it should include groups/containers or only objects
 * @description Finds and returns all objects in a layer
 * @returns {Array} A flatten array with all the layers
 */
const getAllLayersIn = (layer, includeContainers = true) => {
  let layers = [];
  switch(layer.class()) {
    case MSDocument:
        const pages = getAllPages(layer);
        pages.forEach(page => {
          layers = layers.concat(getAllLayersIn(page, includeContainers));
        });
      break;
    default:
      if (layer.layers) {
        layer.layers().forEach(sublayer => {
          layers = layers.concat(getAllLayersIn(sublayer, includeContainers));
        });
        if (includeContainers) {
          layers.push(layer);
        }
      } else {
        layers.push(layer);
      }
      break;
  }
  return layers;
}

/**
 *
 * @param {MSLayer} layer - Parent layer to search
 * @description Checks if the object is visible by searching upwards to the closest parent with a visibility property
 * @returns {Bool} True if the object is not visible
 */
const isHidden = (layer) => {
  if (layer.layers) {
    return layer.isVisible();
  } else {
    return isHidden(layer.parentGroup());
  }
}
