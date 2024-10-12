import { useState } from "react";
import { postCheckoutReservation } from "../services/checkoutService";

function useCheckout() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const submitCheckout = async (user, reservation) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            await postCheckoutReservation(user, reservation);
            setSuccess(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { submitCheckout, loading, error, success };
}

export default useCheckout;
