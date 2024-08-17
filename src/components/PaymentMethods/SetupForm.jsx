import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { createIntent } from '../../apiFunctions/partner';
import { toast } from 'react-toastify';
import PaymentMethodList from './PaymentMethodList';

export default function SetupForm() {
    

    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState();
    const [loading, setLoading] = useState(false);

    const handleError = (error) => {
        setLoading(false);
        setErrorMessage(error.message);
        toast.error(error.message)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe) {
            return;
        }

        setLoading(true);

        const { error: submitError } = await elements.submit();

        if (submitError) {
            handleError(submitError);
            return;
        }

        const res = await createIntent()

    
        console.log(res," resssss")

        const  clientSecret = res?.data?.client_secret

        console.log(clientSecret, "client secret")

        const { error } = await stripe.confirmSetup({
            elements,
            clientSecret,
            confirmParams: {
                return_url: 'https://www.google.com',
            },
            redirect: "if_required"
        });

        if (error) {
            handleError(error);
        } else {
            toast.success("Payment Method Successfully Added!")
        }
    };

    return (
        <form className="bg-white rounded shadow-xl px-4 py-4" onSubmit={handleSubmit}>
            <h1 className="text-xl font-[500] py-4">
                Add Payment Mehods
            </h1>
            <hr className="pb-4 h-2" />
            <PaymentElement />
            <button type='submit' className='text-white bg-primary rounded px-4 py-2 my-2'>Submit</button>
            {errorMessage && <div>{errorMessage}</div>}
            {loading}
            <div>
                <PaymentMethodList />
            </div>

        </form>
    );
}
