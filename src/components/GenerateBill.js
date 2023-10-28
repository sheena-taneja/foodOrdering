import React from 'react';
import jwtDecode from "jwt-decode"
import { CookiesProvider, useCookies } from "react-cookie";

function GenerateBill({ items }) {


    const [cookies, setCookie] = useCookies(["user"]);

    const getCurDate = () => {
        return new Date().toISOString().split('T')[0];
    }

    const getPrice = (q, p) => {
        return q * (p / 100);
    }
    const getTotalBill = () => {
        let p = 0
        items.forEach(item => {
            p += getPrice(item.card.info.quantity, item.card.info.price || item.card.info.defaultPrice)
        })
        return p;
    }

    const decodeJWTToken = () => {
        const data = jwtDecode(cookies.user);
        console.log({ data })
        return data;
    }

    return (
        <div>
            <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
                <h1 className="font-bold text-2xl my-4 text-center text-blue-600">Foody Services</h1>
                <hr className="mb-2" />
                <div className="flex justify-between mb-6">
                    <h1 className="text-lg font-bold">Invoice</h1>
                    <div className="text-gray-700">
                        <div>Date: {getCurDate()} </div>
                        <div>Invoice #: INV12345</div>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-lg font-bold mb-4">Bill To:</h2>
                    <div className="text-gray-700 mb-2">{decodeJWTToken().name}</div>
                    <div className="text-gray-700">{decodeJWTToken().email}</div>
                </div>
                <table className="w-full mb-8">
                    <thead>
                        <tr>
                            <th className="text-left font-bold text-gray-700">Description</th>
                            <th className="text-right font-bold text-gray-700">Amount</th>
                        </tr>
                    </thead>
                    <tbody>

                        {items.map((item, index) => {
                            return <>
                                <tr>
                                    <td className="text-left text-gray-700">{item.card.info.name + " X " + item.card.info.quantity}</td>
                                    <td className="text-right text-gray-700">Rs. {getPrice(item.card.info.quantity, item.card.info.price || item.card.info.defaultPrice)}</td>
                                </tr>
                            </>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="text-left font-bold text-gray-700">Total</td>
                            <td className="text-right font-bold text-gray-700">Rs. {getTotalBill()}</td>
                        </tr>
                    </tfoot>
                </table>
                <div className="text-gray-700 mb-2">Thank you for ordering!</div>
                <div className="text-gray-700 text-sm">We are most loved food delivery service.</div>
            </div>
        </div>
    )
}

export default GenerateBill;
