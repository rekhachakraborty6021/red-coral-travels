'use client';

import { useEffect, useState } from 'react';
import {
    CurrencyRupeeIcon,
    UsersIcon,
    CalendarIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

interface DashboardStats {
    totalBookings: number;
    pendingBookings: number;
    confirmedBookings: number;
    totalRevenue: number;
    totalEnquiries: number;
    recentBookings: any[];
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStats() {
            try {
                const res = await fetch('/api/admin/stats');
                if (res.ok) {
                    const data = await res.json();
                    setStats(data);
                }
            } catch (error) {
                console.error('Failed to fetch stats', error);
            } finally {
                setLoading(false);
            }
        }
        fetchStats();
    }, []);

    if (loading) {
        return <div>Loading dashboard...</div>;
    }

    const statCards = [
        {
            name: 'Total Revenue',
            value: `₹${stats?.totalRevenue.toLocaleString('en-IN') || '0'}`,
            icon: CurrencyRupeeIcon,
            change: '+4.75%',
            changeType: 'positive',
        },
        {
            name: 'Total Bookings',
            value: stats?.totalBookings || '0',
            icon: CalendarIcon,
            change: '+54.02%',
            changeType: 'positive',
        },
        {
            name: 'Pending Bookings',
            value: stats?.pendingBookings || '0',
            icon: UsersIcon,
            change: '-1.39%',
            changeType: 'negative',
        },
        {
            name: 'Total Enquiries',
            value: stats?.totalEnquiries || '0',
            icon: ChatBubbleLeftRightIcon,
            change: '+10.18%',
            changeType: 'positive',
        },
    ];

    return (
        <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900">
                Last 30 days
            </h3>

            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {statCards.map((item) => (
                    <div
                        key={item.name}
                        className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
                    >
                        <dt>
                            <div className="absolute rounded-md bg-blue-500 p-3">
                                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <p className="ml-16 truncate text-sm font-medium text-gray-500">
                                {item.name}
                            </p>
                        </dt>
                        <dd className="ml-16 flex items-baseline pb-1 sm:pb-7">
                            <p className="text-2xl font-semibold text-gray-900">
                                {item.value}
                            </p>
                        </dd>
                    </div>
                ))}
            </dl>

            <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                    Recent Activity
                </h3>
                <div className="mt-4 overflow-hidden bg-white shadow sm:rounded-md">
                    <ul role="list" className="divide-y divide-gray-200">
                        {stats?.recentBookings.length === 0 ? (
                            <li className="px-4 py-4 sm:px-6 text-gray-500 text-center">
                                No recent bookings
                            </li>
                        ) : (
                            stats?.recentBookings.map((booking: any) => (
                                <li key={booking.id}>
                                    <div className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <p className="truncate text-sm font-medium text-blue-600">
                                                {booking.customerName}
                                            </p>
                                            <div className="ml-2 flex flex-shrink-0">
                                                <p className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 
                          ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                                        booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-red-100 text-red-800'}`}>
                                                    {booking.status}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between">
                                            <div className="sm:flex">
                                                <p className="flex items-center text-sm text-gray-500">
                                                    {booking.tourTitle}
                                                </p>
                                            </div>
                                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                                <p>
                                                    Booked on {new Date(booking.createdAt).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
