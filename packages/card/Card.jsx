import React from 'react'


/**
 * Card package
 *
 * @param {string} title The components title
 * @param {string} description The components description
 * @param {string} url The components url
 * @param {string} imageUrl The components image Url
 * @param {string} imageAlt The components image Alt
 * @param {string} taxonomy The components taxonomy value
 * @param {string} taxonomyUrl The components taxonomy url
 * @param {string} type The components type
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function Card(input) {
  const {
    title, 
    description, 
    url, 
    imageUrl, 
    imageAlt, 
    taxonomy, 
    taxonomyUrl, 
    type,
   } = input.data;

  return (
    <div className="md:su-basis-1/3 su-flex-grow">
        <article className="su-component-card su-relative su-w-full">

          { imageUrl && 
            <div className="su-relative su-block su-aspect-[50/33] su-mb-[19px]">
              <img className="su-absolute su-object-cover su-object-center su-w-full su-h-full" src={imageUrl} alt={imageAlt} />
            </div>
          }

          { taxonomy && 
            <p className="su-relative su-z-10 su-text-[16px] lg:su-text-[18px] su-leading-[20.8px] lg:su-leading-[23.4px] su-mb-[13px] su-font-semibold">
              <a href={taxonomyUrl} className="focus:su-outline-0 focus:su-ring su-text-digital-red su-no-underline hover:su-text-digital-red dark:su-text-dark-mode-red hover:dark:su-text-dark-mode-red">
                {taxonomy}
              </a>
            </p>
          }


          <div className="su-flex su-flex-wrap su-gap-[9px]">

              <h2 className="su-w-full su-text-[21px] lg:su-text-[24px] su-leading-[25.2px] lg:su-leading-[28.8px] su-font-serif su-my-0">
                <a href={url} className="focus:su-outline-0 focus:before:su-ring hover:su-text-digital-red su-transition su-text-black dark:su-text-white dark:hover:su-text-dark-mode-red before:su-absolute before:su-w-full before:su-h-full before:su-block before:su-top-0 before:su-left-0">
                  {title}
                </a>
              </h2>

              { type && 
                <p className="su-flex su-font-semibold su-text-black-70 dark:su-text-black-60 su-my-0 su-gap-[6px] su-flex-nowrap su-items-center su-text-[16px] su-leading-[20.8px]">
                    
                    { type.toLowerCase() === "article" && 
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                          <path d="M6.05769 2.54436C5.57812 2.54436 5.19231 2.92651 5.19231 3.40151V14.2586C5.19231 14.5587 5.14183 14.8479 5.04447 15.1158H15.8654C16.345 15.1158 16.7308 14.7337 16.7308 14.2586V3.40151C16.7308 2.92651 16.345 2.54436 15.8654 2.54436H6.05769ZM2.59615 16.8301C1.16106 16.8301 0 15.6801 0 14.2586V3.68722C0 3.21222 0.385817 2.83008 0.865385 2.83008C1.34495 2.83008 1.73077 3.21222 1.73077 3.68722V14.2586C1.73077 14.7337 2.11659 15.1158 2.59615 15.1158C3.07572 15.1158 3.46154 14.7337 3.46154 14.2586V3.40151C3.46154 1.98008 4.6226 0.830078 6.05769 0.830078H15.8654C17.3005 0.830078 18.4615 1.98008 18.4615 3.40151V14.2586C18.4615 15.6801 17.3005 16.8301 15.8654 16.8301H2.59615ZM6.34615 4.54436C6.34615 4.06936 6.73197 3.68722 7.21154 3.68722H10.6731C11.1526 3.68722 11.5385 4.06936 11.5385 4.54436V7.40151C11.5385 7.87651 11.1526 8.25865 10.6731 8.25865H7.21154C6.73197 8.25865 6.34615 7.87651 6.34615 7.40151V4.54436ZM13.5577 3.68722H14.7115C15.1911 3.68722 15.5769 4.06936 15.5769 4.54436C15.5769 5.01936 15.1911 5.40151 14.7115 5.40151H13.5577C13.0781 5.40151 12.6923 5.01936 12.6923 4.54436C12.6923 4.06936 13.0781 3.68722 13.5577 3.68722ZM13.5577 6.54436H14.7115C15.1911 6.54436 15.5769 6.92651 15.5769 7.40151C15.5769 7.87651 15.1911 8.25865 14.7115 8.25865H13.5577C13.0781 8.25865 12.6923 7.87651 12.6923 7.40151C12.6923 6.92651 13.0781 6.54436 13.5577 6.54436ZM7.21154 9.40151H14.7115C15.1911 9.40151 15.5769 9.78365 15.5769 10.2586C15.5769 10.7337 15.1911 11.1158 14.7115 11.1158H7.21154C6.73197 11.1158 6.34615 10.7337 6.34615 10.2586C6.34615 9.78365 6.73197 9.40151 7.21154 9.40151ZM7.21154 12.2586H14.7115C15.1911 12.2586 15.5769 12.6408 15.5769 13.1158C15.5769 13.5908 15.1911 13.9729 14.7115 13.9729H7.21154C6.73197 13.9729 6.34615 13.5908 6.34615 13.1158C6.34615 12.6408 6.73197 12.2586 7.21154 12.2586Z" />
                      </svg>
                    }

                    <span>{type}</span>
                </p>
              }

              <p className="su-hidden su-mb-0 lg:su-block su-text-[19px] su-leading-[23.75px]">
                {description}
              </p>

          </div>

        </article>
    </div>
  );
}
