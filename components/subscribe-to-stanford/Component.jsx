import React, { useState } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

// TODO: The h2 "Subscribe to Stanford Report" might be better as a label for the email input field instead

export default function SubscribeToStanfordReport({ contentConfiguration }) {
  const { actionLink, title, summary } = contentConfiguration;

  // state management
  const [email, setEmail] = useState("");
  const [subscriptionError, setSubscriptionError] = useState("");

  // email input
  const emailInputEvent = ({ target }) => {
    const { value } = target;

    setEmail(() => value);
  };

  // on submit
  const submitSubscription = (e) => {
    e.preventDefault();

    if (!email || !email.match(/\w+@\w+\.\w+/)) {
      setSubscriptionError(
        () =>
          `<span id="subscription-error" class="su-block su-text-16 su-font-normal su-text-digital-red-light">Please enter a valid email address.</span>`
      );

      return;
    }

    setSubscriptionError(() => "");

    e.target.submit();
  };

  return (
    <form
      className="su-flex su-flex-col su-gap-10 su-items-left"
      action={actionLink}
      onSubmit={submitSubscription}
      method="POST"
    >
      <h2 className="su-m-0 su-font-bold su-text-18 su-leading-display dark:su-text-white su-font-sans">
        {title}
      </h2>

      <p className="su-m-0 su-text-16 su-leading-[125%] dark:su-text-white">
        {summary}
      </p>

      <input
        type="email"
        name="subscription-email"
        placeholder="Email address"
        title="Subscription Email"
        aria-label="Subscription Email"
        aria-describedby={subscriptionError ? "subscription-error" : undefined}
        className="su-rounded su-p-12 su-text-16 su-leading-[125%] su-text-black placeholder:su-text-black su-font-normal su-border su-border-b-2 su-border-black-20 su-border-b-black-70 dark:su-border-black-60 dark:su-border-b-black-30 hocus:su-border-digital-blue-vivid hocus:su-border-b-digital-blue dark:hocus:su-border-digital-blue-light/80 dark:hocus:su-border-b-digital-blue-light focus:su-ring-4 focus:su-ring-digital-blue-vivid/20 dark:focus:su-ring-digital-blue-vivid/60 dark:su-bg-black-90 dark:su-text-white dark:placeholder:su-text-white"
        onKeyUp={emailInputEvent}
      />

      <button
        type="submit"
        className="su-mr-auto su-text-white su-bg-digital-red su-text-16 su-font-normal su-px-22 su-pt-9 su-pb-11 hocus:su-bg-black dark:hocus:su-ring-1 dark:hocus:su-ring-white hocus:su-underline su-transition"
      >
        Sign up
      </button>

      <XssSafeContent content={subscriptionError} />
    </form>
  );
}
