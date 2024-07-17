const showGeneralErrorForm = (data, submitBtn) => {

    document.getElementById(`${submitBtn.id}`).insertAdjacentHTML('beforebegin', `
    <div class="alert alert-danger small bg-white text-danger py-2 my-4 mx-3 text-center error-message" role="alert">
        ${data.message}
    </div>
    `)

}

export default showGeneralErrorForm