import {useCallback, useEffect, useState} from "react";
import instance from "../../ConstantValue";

export default function useSignUp() {
    const [emailRequested, setEmailRequested] = useState(false)
    const [signupError, setSignupError] = useState(false)

    const callSignup = (email, password, name) => {
        instance.post('/account/registration',
            {
                'name': name,
                'email': email,
                'password1': password,
                'password2': password,
            })
            .then(function (response) {
                setEmailRequested(true)
                setSignupError(null)
            })
            .catch(function (error) {
                setEmailRequested(false)
                setSignupError(error.response.data)
            })
    }

    return [{
        emailRequested: emailRequested,
        signupError: signupError
    }, callSignup]
}