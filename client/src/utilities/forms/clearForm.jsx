const clearForm = (form, removeData = 0) => {
    document.querySelectorAll(`#${form.id} .error-message`).forEach( el => el.remove())
    document.querySelectorAll(`#${form.id} input, #${form.id} textarea, #${form.id} select`)
    .forEach(el => el.classList.remove('is-invalid'))

    if(removeData) {
        document.querySelectorAll(`#${form.id} input, #${form.id} textarea`)
        .forEach(el => el.value = '')
    }
}

export default clearForm