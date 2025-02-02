document.addEventListener('DOMContentLoaded', () => {
    const addContactForm = document.querySelector('.new-contact-form')
    addContactForm.addEventListener('submit', event => {
        event.preventDefault()
        const {
            name,
            email,
            phone,
            company,
            notes,
            twitter,
        } = addContactForm.elements
       
        const contact = {
            id: Date.now(), 
            name: name.value,
            email: email.value,
            phone: phone.value,
            company: company.value, 
            notes: notes.value,
            twitter: twitter.value, //storing as values
        }

        console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
    })
})