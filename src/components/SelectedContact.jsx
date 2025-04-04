
import { useState } from "react"
import { useEffect } from "react"

export default function SelectedContact({ selectedContactId }){
    const [contact] = useState(null)
    const [setContact] = useState(null)

      useEffect(() => {
        const contactInfo = useState(contact);
        contactInfo.setContact

        async function fetchDetails() {
            try {
              const response = await fetch(
                `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`
              );
              const result = await response.json();
              fetchDetails(result);
            } catch (error) {
              console.error(error);
            }
          }
          fetchDetails();
  }, []);
  
    return (
        console.log("test")
    )
}