import React, { useEffect } from 'react'
import { useGetOrderByEmailQuery } from '../../redux/features/orders/orderApis';
import { useAuth } from '../../context/AuthContext';
function OrdersPage() {

    const { currentUser, loading } = useAuth();

    // React Query fetches data only when currentUser is available
    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser?.email, {
        skip: loading || !currentUser?.email,
    });

    if (isLoading || loading) return <div>Loading....</div>
    if (isError) return <div>Error....</div>

    return (
        <div className='container py-6 mx-auto'>
            <h2>Your Orders:</h2>
            {
                orders.length === 0 ? (<h1>Orders not found !!</h1>) :
                    (
                        <>
                            {
                                orders.map((order, index) => {
                                    return (
                                        <div key={index} className='py-3 mb-2 border-b'>
                                            <p className='w-10 p-1 mb-1 text-white rounded bg-secondary'># {index + 1}</p>
                                            <h2 className=''>OrderId:{order._id}</h2>
                                            <div className='text-gray-300 '>Name:  {order.name}</div>
                                            <div className='text-gray-300 '>Email:  {order.email}</div>
                                            <div className='text-gray-300 '>Phone:  {order.phone}</div>
                                            <div className='text-gray-300 '>TotalPrice: {order.totalPrice}</div>
                                            <h2 className=''>Address:</h2>
                                            <div className='text-gray-300'>{order.address.city} , {order.address.state} ,{order.address.country} - {order.address.zipcode} </div>

                                            <h3>ProductIds: </h3>
                                            <ul>
                                                {
                                                    order.productIds.map((Id,index) => {
                                                        return <li key={index}>{Id}</li>
                                                    }
                                                    )
                                                }
                                            </ul>


                                        </div>
                                    )
                                })
                            }
                        </>
                    )

            }

        </div>
    )
}

export default OrdersPage;
