const showErrorsForm = (data, form) => {

    const errors = data.errors
    for (const key in errors) {
        const name= key
        const message = errors[key][0]
        let input = document.querySelector(`#${form.id} [name='${name}']`)
        input.classList.add('is-invalid')
        input.insertAdjacentHTML('afterend', `
            <p class="error-message invalid-feedback"> ${message} </p>
        `)
    }

}

export default showErrorsForm