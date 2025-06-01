'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '../../../../components/ToastProvider';

function ContactPage() {
  const router = useRouter()
  const { createToast } = useToast()

  function handleSubmit(event) {
    event.preventDefault()
    //
    router.push('/exercises/02-flash-messages')
    createToast("Message received. We'll get back you shortly!", "success")
  }


  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
