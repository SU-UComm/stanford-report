import React from "react";
import MissionLogo from "./MissionLogo";
import MajorNav from "./MajorNav";
import MinorNav from "./MinorNav";
import ContactNav from "./ContactNav";
import ExternalNav from "./ExternalNav";
/**
 * Footer - Top bar
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function TopBar({ site, navigation, audience }) {
  const { major, minor, contacts, external, contactsStudent, contactsStaff } =
    navigation;

  let externalData = [];
  switch (audience) {
    case "faculty":
      externalData = external.staff;
      break;
    case "student":
      externalData = external.student;
      break;
    default:
      externalData = external.anonymous;
  }

  return (
    <div className="dark:su-bg-black-true dark:su-text-white su-flex lg:su-items-center lg:su-justify-center su-bg-white">
      <section className="pre-footer su-pl-20 su-pr-20 md:su-pl-50 md:su-pr-50 su-max-w-[1412px]">
        <MissionLogo url={site.url} mission={site.mission} />
        <MajorNav navigation={major} />

        <hr
          aria-hidden="true"
          className="pre-footer-line su-border-none su-mx-auto su-mb-30 lg:su-mb-38 su-bg-black-10 dark:su-bg-black"
        />

        <div className="pre-footer-bottom-section su-flex su-flex-col lg:su-flex-row su-flex-wrap lg:su-flex-nowrap lg:su-gap-x-20">
          <MinorNav navigation={minor} />
          {audience === "external" && <ContactNav navigation={contacts} />}
          {audience === "student" && (
            <ContactNav navigation={contactsStudent} />
          )}
          {audience === "faculty" && <ContactNav navigation={contactsStaff} />}
        </div>

        <ExternalNav navigation={externalData} audience={audience} />
      </section>
    </div>
  );
}
