import clearForm from "../utilities/forms/clearForm.jsx"
import showErrorsForm from "../utilities/forms/showErrorsForm.jsx"
import showGeneralErrorForm from "../utilities/forms/showGeneralErrorForm.jsx"

export const requestPost = async (path, body, form, submitBtn) => {

    clearForm(form)
    const request = await fetch(path, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    const status = request.status
    const response = await request.json()
    const data = response

    if(status == 422) {
        showErrorsForm(data, form)
    } else if (status == 400) {
        showGeneralErrorForm(data, submitBtn)
    } else if (status == 200) {
        return data
    } else {
        console.error(data)
    }
}