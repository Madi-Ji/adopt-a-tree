import { Footer as FooterFlowBite } from "flowbite-react"

export default function Footer() {

    return (
        <FooterFlowBite container={true} className='rounded-none'>
            <FooterFlowBite.Copyright
                href="#"
                by="AB Tasty"
                year={new Date().getFullYear()}
            />
            <FooterFlowBite.LinkGroup>
                <FooterFlowBite.Link href="https://www.abtasty.com">
                    ABTasty.com
                </FooterFlowBite.Link>
                <FooterFlowBite.Link href="https://www.flagship.io">
                    Flagship.io
                </FooterFlowBite.Link>
            </FooterFlowBite.LinkGroup>
        </FooterFlowBite>
    )
}