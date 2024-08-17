import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { PaymentElement } from '@stripe/react-stripe-js';
import SetupForm from "./SetupForm";

const stripePromise = loadStripe('pk_test_51PSfJA02frVP0OxbP3mZA3nHznJNTtaZT0ZZfZlo1yXoRkkLiXI6AAg9lg8TEQPfvTvCL6DBogL1oBfDJbN3rv2e00GQHzavDo');




const PaymentMethod = () => {
    const options = {
        mode: 'setup',
        currency: 'usd',
        appearance: {/*...*/ },
    };
    return (
        <Elements stripe={stripePromise} options={options}>

            <SetupForm  />


        </Elements>
    )
}

export default PaymentMethod
