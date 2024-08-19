import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { createIntent, setDefaultPM } from '../../apiFunctions/partner';
import { toast } from 'react-toastify';
import PaymentMethodList from './PaymentMethodList';
import { useMutation } from 'react-query';

export default function SetupForm() {


    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState();
    const [loading, setLoading] = useState(false);


    const setDefaultPaymentMethod = useMutation({
        mutationKey: "setDefaultPaymentMethod",
        mutationFn: setDefaultPM,
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (e) => console.log(e),
        onSettled: (d, e) => console.log(d, e),
    });

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


        console.log(res, " resssss")

        const clientSecret = res?.data?.client_secret

        console.log(clientSecret, "client secret")

        const cardRes = await stripe.confirmSetup({
            elements,
            clientSecret,
            confirmParams: {
                return_url: 'https://www.google.com',
            },
            redirect: "if_required"
        });

        console.log(cardRes?.setupIntent?.payment_method, "card")

        if (cardRes.error) {
            handleError(cardRes.error);
        } else {
            setDefaultPaymentMethod.mutate(cardRes?.setupIntent?.payment_method)
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
            <button type='submit' className='text-black bg-primary rounded px-4 py-2 my-2'>Submit</button>
            {errorMessage && <div>{errorMessage}</div>}
            {loading}
            <div>
                <PaymentMethodList />
            </div>

        </form>
    );
}
