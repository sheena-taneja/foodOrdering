import React from 'react';
import jwtDecode from "jwt-decode"
import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import { CookiesProvider, useCookies } from "react-cookie";
import GenerateBill from './GenerateBill';
import GPay from './GPay';

function BillDetails({ items }) {

    const exportPDF = () => {
        let element =<html><body><GenerateBill items={items}/></body></html> 
        const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});
        doc.setFont('Inter-Regular', 'normal');
        doc.html(ReactDOMServer.renderToString(element), {
            callback: function (doc) {
                doc.save('invoice.pdf');
            },x: 30,
            y: 30,
            width: 370, //target width in the PDF document
            windowWidth: 650
        });
    };

    const checkout = () => {
        <GPay></GPay>
    }

    return (
        <div>
            <GenerateBill items={items} />
            <div className='text-right'><button onClick={exportPDF}>Download</button></div>
            <GPay></GPay>
        </div>
    )
}

export default BillDetails;
