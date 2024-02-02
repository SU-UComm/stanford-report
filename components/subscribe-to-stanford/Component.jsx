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
          `<span class="su-block">Please enter a valid email address.</span>`
      );

      return;
    }

    setSubscriptionError(() => "");

    e.target.submit();
  };

  return (
    <Container>
      <form
        className="su-flex su-flex-col su-gap-[10px] su-items-left"
        action={actionLink.url}
        onSubmit={submitSubscription}
      >
        <p className="su-m-0 su-font-bold su-text-[18px] su-leading-[21.6px]">
          {title}
        </p>

        <p className="su-m-0 su-font-normal su-text-[16px] su-leading-[20px]">
          {summary}
        </p>

        <input
          type="email"
          name="subsciption-email"
          placeholder="Email address"
          className="su-rounded-[3px] su-p-[12px] su-text-[16px] su-leading-[20px]A su-text-black placeholder:su-text-black su-font-normal su-border-black-20 su-border-[1px] su-border-solid su-border-b-black-70 su-border-b-[2px] su-border-b-solid"
          onKeyUp={emailInputEvent}
        />

        <button
          type="submit"
          className="su-mr-auto su-text-white su-bg-digital-red su-text-[16px] su-font-normal su-px-[22px] su-pt-[9px] su-pb-[11px] hover:su-bg-black su-transition"
        >
          Sign up
        </button>

        <XssSafeContent content={subscriptionError} />
      </form>
    </Container>
  );
}
