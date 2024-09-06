import { Check, ShoppingCart, X } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Logo from '@/Resources/O.png'
export default function SalesModal(props) {
  const {
    Order_item,
    billingStatus,
    customer,
    orderNumber,
    orderStatus,
    orderTotal,
    payedAmount,
    paymentMethod,
    salesRepresentative,
  } = props.data;

  const componentRef = useRef(); // Create a reference to the component

  function getProductName(id) {
    const product = props.item.find((myItem) => {
      return myItem._id === id;
    });
    return product?.title;
  }

  async function handleRequest() {
    console.log('Request Sent');
    try {
      await props.request('GeneralSales', props.setLoading, props.data, 'GeneralSales');
     handlePrint()
      props.removeModal(false);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
      });
  return (
    <div className="w-full h-[94.8vh] bg-black absolute top-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
      <div className="w-[47vw] h-[70vh] bg-white relative left-[20vw] top-[20vh] opacity-100 rounded-lg shadow-lg p-6" ref={componentRef}>
        <ShoppingCart />
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>

        <div className="space-y-3">
          <div className="flex gap-5">
            <span className="font-medium text-gray-600">Order Number:</span>
            <span className="text-gray-900">{orderNumber}</span>
          </div>

          <div className="flex gap-5">
            <span className="font-medium text-gray-600">Customer:</span>
            <span className="text-gray-900">{customer}</span>
          </div>

          <div className="flex gap-5">
            <span className="font-medium text-gray-600">Order Status:</span>
            <span className="text-gray-900">{orderStatus}</span>
          </div>

          <div className="flex gap-5">
            <span className="font-medium text-gray-600">Billing Status:</span>
            <span className="text-gray-900">{billingStatus}</span>
          </div>

          <div className="flex gap-5">
            <span className="font-medium text-gray-600">Payment Method:</span>
            <span className="text-gray-900 capitalize">{paymentMethod}</span>
          </div>

          <div className="flex gap-5">
            <span className="font-medium text-gray-600">Order Total:</span>
            <span className="text-gray-900">${orderTotal}</span>
          </div>

          <div className="flex gap-5">
            <span className="font-medium text-gray-600">Payed Amount:</span>
            <span className="text-gray-900">${payedAmount}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Items Bought</h3>
        <div className="space-y-2 max-h-[15vh] overflow-y-auto">
          {Order_item.map((item, index) => (
            <div key={index} className="flex flex-col p-4 bg-gray-50 rounded-md shadow-sm">
              <div className="flex gap-5 mb-2">
                <span className="text-gray-600 font-medium">Item {index + 1}:</span>
                <span className="text-gray-900">{getProductName(item.Item)}</span>
              </div>
              <div className="flex gap-5 mb-2">
                <span className="text-gray-600 font-medium">Quantity:</span>
                <span className="text-gray-900">{item.quantity}</span>
              </div>
              <div className="flex gap-5">
                <span className="text-gray-600 font-medium">Unit Price:</span>
                <span className="text-gray-900">${item.unitPrice}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-10 flex-row mt-[3vh]">
          <button className="p-1 bg-blue-600 rounded-md flex items-center space-x-2 px-3 w-[5vw]" onClick={handleRequest}>
            <Check className="text-white w-4 h-4" />
            <span className="text-white">Accept</span>
          </button>
          <button
            className="p-1 bg-red-600 rounded-md flex items-center space-x-2 px-3 w-[5vw]"
            onClick={(e) => {
              e.preventDefault();
              props.removeModal(false);
            }}
          >
            <X className="text-white w-4 h-4" />
            <span className="text-white">Cancel</span>
          </button>
        </div>
      </div>
    </div>

  );
}




{/* <div>
      <div className="logo">
        <Image src={Logo} alt="Logo"  className="w-[10vw] h-[8vh]" />
      </div>
      <div className="shop-info text-right">
        <p className="text-base mb-1">Phone#: 0911240914</p>
        <p className="text-base mb-1">Fax#: +0000-000-00-00</p>
        <p className="text-base mb-1">Oumer Awol</p>
        <p className="text-base mb-1">TIN: 0000000000</p>
        <p className="text-base mb-1">Addis Ababa, Ethiopia</p>
        <hr className="mt-2" />
      </div>

      <section className="bill-to flex justify-between mb-5">
        <div className="customer-info">
          <h2 className="text-lg mb-2">Bill To:</h2>
          <p><strong>Name:</strong> ABDI HARAR</p>
          <p><strong>Address:</strong> HARAR, HARAR</p>
          <p><strong>Phone#:</strong></p>
        </div>
        <div className="invoice-info">
          <h2 className="text-lg mb-2">Customer Invoice</h2>
          <p><strong>Date:</strong> 02 Sep, 2024</p>
          <p><strong>Invoice#:</strong> 2329</p>
        </div>
      </section>

      <section className="product-details">
        <table className="w-full border-collapse mb-5">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">S.N</th>
              <th className="border border-gray-300 p-2">Order#</th>
              <th className="border border-gray-300 p-2">Product Code</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Quantity</th>
              <th className="border border-gray-300 p-2">Unit Price</th>
              <th className="border border-gray-300 p-2">Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">2329</td>
              <td className="border border-gray-300 p-2">KARTON-Wechi</td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">200.00</td>
              <td className="border border-gray-300 p-2">200.00</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">2</td>
              <td className="border border-gray-300 p-2">2329</td>
              <td className="border border-gray-300 p-2">REAR-ZN215</td>
              <td className="border border-gray-300 p-2"></td>
              <td className="border border-gray-300 p-2">2</td>
              <td className="border border-gray-300 p-2">2,700.00</td>
              <td className="border border-gray-300 p-2">5,400.00</td>
            </tr>
          </tbody>
          <tfoot className="font-bold bg-gray-100">
            <tr>
              <td colSpan="6" className="border border-gray-300 p-2 text-right">Gross Total</td>
              <td className="border border-gray-300 p-2">5,600.00</td>
            </tr>
            <tr>
              <td colSpan="6" className="border border-gray-300 p-2 text-right">Amount Due</td>
              <td className="border border-gray-300 p-2">1,644,624.00</td>
            </tr>
            <tr>
              <td colSpan="6" className="border border-gray-300 p-2 text-right">Amount Paid</td>
              <td className="border border-gray-300 p-2">0.00</td>
            </tr>
          </tfoot>
        </table>
      </section>

      <section className="payment-details mt-5">
        <p><strong>Amount Paid in words:</strong> ZERO ETB ONLY</p>
        <p><strong>Prepared by:</strong> Abdellah</p>
        <p><strong>Signature </strong>_________________</p>
        <p><strong>Date </strong>__________________</p>
      </section>

      <footer className="text-center mt-5 text-gray-500">
        <p>Distribution: Original: For Payer | 2nd: For Accountant | 3rd: Pad</p>
      </footer>
    </div> */}