export interface PaymentIntent {
    bookingId: string;
    amount: number;
    currency: string;
    customerEmail: string;
    customerName: string;
    tourId: string;
    tourTitle: string;
}

export interface PaymentStatus {
    id: string;
    status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'refunded';
    amount: number;
    createdAt: string;
    updatedAt: string;
}
