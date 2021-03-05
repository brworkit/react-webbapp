const form = {
    email: {
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'Your E-Mail'
        },
        value: '',
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },
    password: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Password'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    formIsValid: false,
    loading: false
}

export default form