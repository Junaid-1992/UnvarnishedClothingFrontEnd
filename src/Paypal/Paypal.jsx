import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useEffect, useState } from "react";
import { baseurl } from "../baseUrl";

const Paypal =({productname,price,handlepaymentcallback,isFormComplete})=>{

    

    
    const initialOptions = {
        clientId: " ",
        currency: "USD",
        intent: "capture",
      };
   

      function createOrder() {
        return fetch(`${baseurl}/create-paypal-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: [
                    {
                        name: `${productname}`,
                        price: `${price}`, // Price as a string
                        quantity: "1"   // Quantity as a string
                    },
                    // Add more items as needed
                ]
            }),
        })
        .then((response) => response.json())
        .then((order) => order.id); // Return the PayPal order ID to the PayPal Buttons component
    }

    // Function to capture a PayPal order
    function onApprove(data) {
        return fetch(`${baseurl}/capture-paypal-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID, // Send the order ID to the server for capturing the payment
            }),
        })
        .then((response) => response.json())
        .then((orderData) => {
            const name = orderData.payer.name.given_name;
            handlepaymentcallback(orderData)
            // Extract the payer's name
            // alert(`Transaction completed by ${name}`); // Display a success message
        });
    }
      

    return (
        <>
        
         <PayPalScriptProvider   options={initialOptions}>
         <PayPalButtons
                disabled={!isFormComplete}
                createOrder={createOrder} 
                onApprove={onApprove}  
            />
</PayPalScriptProvider>
        
        </>


    )



}


export default Paypal