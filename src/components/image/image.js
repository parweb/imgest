import './image.css'

const image = ({id, name, description, type, data}) => (`
  <div id="image-${id}" class="image pending" data-id="${id}">
    <div class="image-name ellipsis">${name}</div>
    <div class="image-description">${description}</div>
    <div class="image-element" data-type="${type}" data-src="${data}"></div>

    <div class="image-buttons">
      <button data-id="${id}" class="remove mdl-button mdl-button--fab mdl-button--mini-fab">
        <i class="material-icons mdl-color-text--white">delete</i>
      </button>

      <button data-id="${id}" class="edit mdl-button mdl-button--fab mdl-button--mini-fab">
        <i class="material-icons mdl-color-text--white">mode_edit</i>
      </button>
    </div>
  </div>
`)

export default image
