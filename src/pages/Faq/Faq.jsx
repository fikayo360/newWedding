import { Faqs } from "../faqs/faqs"
import { useState } from "react"
import './Faq.css'

export const Faq = () => {
    return (
        <div id="faq">
            <div id="faqB">
                <h1>FAQS ?</h1>
            </div>
            
            <div id="faqWrap">
            <h2 id='faqH'>still got questions </h2>
            <div id='faqContainer'>
                <Faqs h='Who are the photographers?'
                 p='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Tenetur natus ipsam nisi quo magnam facere, perspiciatis in hic ea accusamus libero
                  totam provident tempore nihil vitae non laudantium atque! Iure.'
                 />

                <Faqs h='How quickly will I receive my project?'
                 p='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Tenetur natus ipsam nisi quo magnam facere, perspiciatis in hic ea accusamus libero
                  totam provident tempore nihil vitae non laudantium atque! Iure.'
                 />

                <Faqs h='How much work will I get?'
                 p='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Tenetur natus ipsam nisi quo magnam facere, perspiciatis in hic ea accusamus libero
                  totam provident tempore nihil vitae non laudantium atque! Iure.'
                 />

                <Faqs h='What if I dont like the photos?'
                 p='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Tenetur natus ipsam nisi quo magnam facere, perspiciatis in hic ea accusamus libero
                  totam provident tempore nihil vitae non laudantium atque! Iure.'
                 />
                 
                <Faqs h='Can I get a refund?'
                 p='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Tenetur natus ipsam nisi quo magnam facere, perspiciatis in hic ea accusamus libero
                  totam provident tempore nihil vitae non laudantium atque! Iure.'
                 />
            </div>
        </div>
        </div>
    )
}

