import React from 'react'
import { useGetOrderByEmailQuery } from '../../redux/features/orders/orderApis';
import { useAuth } from '../../context/AuthContext';
function OrdersPage() {
     
    const { } = useGetOrderByEmailQuery()
    return (
        <div>

        </div>
    )
}

export default OrdersPage
