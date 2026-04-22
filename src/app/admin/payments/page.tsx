'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export default function PaymentsPage() {
    const [payments, setPayments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPayments() {
            try {
                // We can reuse the stats API or create a dedicated one. 
                // For now, let's assume we fetch from a payments endpoint (to be created if needed, 
                // but for MVP we can read the file directly in a new route)
                const res = await fetch('/api/admin/payments');
                if (res.ok) {
                    const data = await res.json();
                    setPayments(data);
                }
            } catch (error) {
                toast.error('Failed to load payments');
            } finally {
                setLoading(false);
            }
        }
        fetchPayments();
    }, []);

    if (loading) return <div>Loading payments...</div>;

    return (
        <div>
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-semibold leading-6 text-gray-900">Payments</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A history of all successful transactions.
                    </p>
                </div>
            </div>

            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Transaction ID
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Customer
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Amount
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Status
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {payments.map((payment) => (
                                        <tr key={payment.id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {payment.id.slice(0, 10)}...
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div>{payment.customerName}</div>
                                                <div className="text-xs">{payment.customerEmail}</div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900 font-medium">
                                                ₹{payment.amount.toLocaleString('en-IN')}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-green-600 font-medium capitalize">
                                                {payment.status}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {new Date(payment.paidAt).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
