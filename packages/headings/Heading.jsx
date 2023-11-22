import React from 'react'

export default function Heading({ 
  title, 
  cta_text, 
  cta_url,
}) {
  return (
    <div className="su-component-line-heading su-flex su-flex-wrap su-items-center md:su-items-end su-gap-[5px] su-gap-x-[13px] md:su-gap-[13px]">
      <h2 className="su-text-[28px] su-font-serif su-text-black dark:su-text-white md:su-text-[35px] lg:su-text-[48px] su-w-full md:su-w-auto su-mb-0">
          {title}
      </h2>
      <hr aria-hidden="true" className="md:su-mb-[11px] lg:su-mb-[15px] su-flex-grow su-border-none su-bg-gradient-light-red-h su-h-[4px]" />
      { cta_url && 
        <a href={cta_url} className="su-flex su-no-underline su-items-center md:su-items-end md:su-mb-[8px] lg:su-mb-[12px] su-text-black dark:su-text-white su-flex-nowrap su-gap-[20px] md:su-gap-[13px] su-align-baseline su-text-[19px]">
          <span className="su-flex su-gap-[2px] su-items-center">
              <span>{cta_text} <span className="sr-only">{title}</span></span>
              <svg className="su-fill-transparent su-stroke-current" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                  <path d="M6.75 4.25L12 9.5L6.75 14.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </span>
        </a>
      }
    </div>
  );
}
