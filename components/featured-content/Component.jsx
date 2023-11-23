import React from 'react';

// these are our specific templates for the component.
import Card from '../../packages/card/Card';
import Heading from '../../packages/headings/Heading';


const mapCardDataFromFunnelbackResults = (data) => {

    const title = data.title;
    const description = data.listMetadata.description[0] || null;
    const url = data.liveUrl || null;
    const imageUrl = data.listMetadata.relatedImageURL[0] || null;
    const imageAlt = null; // need to map this
    const taxonomy = data.listMetadata.taxonomyTopicsText[0] || null;
    const taxonomyUrl = null; // need to map this
    const type = null; // need to map this

    return {
        "title": title,
        "description": description,
        "url": url,
        "imageUrl": imageUrl,
        "imageAlt": imageAlt,
        "taxonomy": taxonomy,
        "taxonomyUrl": taxonomyUrl,
        "type": type
    }
}


/**
 * Featured content component
 *
 * @param {string} title The component title
 * @param {string} cta_text The cta text
 * @param {string} cta_url The cta url
 * @param {object} data JSON data for content
 * ... any other options needed
 * @returns {JSX.Element}
 * @constructor
 */

export default function FeaturedContent({
    title,
    cta_text,
    cta_url,
    data,
}) {
    return (
        <div className="su-w-full su-component-multicolumn">
            
            <Heading title={title} cta_text={cta_text} cta_url={cta_url} />

            {data && data.response && data.response.resultPacket && data.response.resultPacket.results && (

                <div className="su-relative su-flex su-flex-wrap md:su-flex-nowrap su-flex-1 su-gap-[68px] md:su-gap-[72px] lg:su-gap-[102px] su-place-content-between">
                    
                    {data.response.resultPacket.results.map((result, index) => (
                        <Card key={index} data={mapCardDataFromFunnelbackResults(result)}/>
                    ))}
                    
                </div>

            )}
            
        </div>
    );
}
