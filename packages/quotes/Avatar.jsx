import React from "react";

/**
 * Displays an image with a decorative border
 *
 * @param {JSX.element} image
 * The avatar image
 *
 * @param {string} avatarSize
 * The size of the avatar to display
 *
 * @return {JSX.element}
 */
export function Avatar({ image, avatarSize = "small" }) {
  const avatarWrapperClasses = new Map();
  avatarWrapperClasses.set(
    "small",
    "su-min-w-[56px] su-w-[56px] su-h-[56px] su-p-[3px]"
  );
  avatarWrapperClasses.set(
    "medium",
    "su-min-w-[165px] su-w-[165px] su-h-[165px] su-p-[7px]"
  );
  avatarWrapperClasses.set(
    "large",
    "su-min-w-[218px] su-w-[218px] su-h-[218px] su-p-[9px]"
  );

  const avatarImageClasses = new Map();
  avatarImageClasses.set(
    "small",
    "su-w-[50px] su-h-[50px] su-top-[3px] su-left-[3px]"
  );
  avatarImageClasses.set(
    "medium",
    "su-w-[150px] su-h-[150px] su-top-[7px] su-left-[8px]"
  );
  avatarImageClasses.set(
    "large",
    "su-w-[200px] su-h-[200px] su-top-[9px] su-left-[9px]"
  );

  return image ? (
    <div
      data-test={`size-${avatarSize}`}
      className={[
        "su-component-avatar su-relative su-block su-rounded-full su-bg-gradient-light-red-h su-overflow-hidden",
        avatarWrapperClasses.get(avatarSize),
      ].join(" ")}
    >
      <img
        className={[
          "su-absolute su-rounded-full su-object-cover su-object-center",
          avatarImageClasses.get(avatarSize),
        ].join(" ")}
        src={image}
        alt=""
      />
    </div>
  ) : (
    ""
  );
}
