import React, { useState } from "react";
import { XssSafeContent } from "@squiz/xaccel-xss-safe-content";

// import specific templates for the component
import { Container } from "../../packages/grids/Container";
import { LinkedHeading } from "../../packages/headings/Heading";

/**
 * Base component
 *
 * @param {string} title The component title
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

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
          `<span class="su-block su-text-16 su-font-normal su-text-digital-red">Please enter a valid email address.</span>`
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
      <h2 className="su-m-0 su-font-bold su-text-18 su-leading-[2.16rem] dark:su-text-white su-font-sans">
        {title}
      </h2>

      <p className="su-m-0 su-font-normal su-text-16 su-leading-[1.25] dark:su-text-white">
        {summary}
      </p>

      <input
        type="email"
        name="subsciption-email"
        placeholder="Email address"
        title="Subscription Email"
        aria-label="Subscription Email"
        className="su-rounded su-p-12 su-text-16 su-leading-[1.25] su-text-black placeholder:su-text-black su-font-normal su-border-black-20 su-border su-border-b-black-70 su-border-b-2  dark:su-bg-black-90 dark:su-text-white dark:placeholder:su-text-white"
        onKeyUp={emailInputEvent}
      />

      <button
        type="submit"
        className="su-mr-auto su-text-white su-bg-digital-red su-text-16 su-font-normal su-px-22 su-pt-9 su-pb-11 hover:su-bg-black su-transition"
      >
        Sign up
      </button>

      <XssSafeContent content={subscriptionError} />
    </form>
  );
}
