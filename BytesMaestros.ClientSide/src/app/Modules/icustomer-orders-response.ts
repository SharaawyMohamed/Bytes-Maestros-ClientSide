export interface OrderItem {
  id: string;
  orderTypeId: string;
  productName: string;
  totalPrice: number;
  quantity: number;
}

export interface CustomerOrder {
  id: string;
  orderTypeId: number;
  totalAmount: number;
  deliveryTime: string;
  status: string;
  orderItems: OrderItem[];
}

export interface CustomerOrders {
  customerName: string;
  customerEmail: string;
  customerAddress: string;
  bestDelivaryTime: Date;
  customerOrders: CustomerOrder[];
}

export interface CustomerOrdersResponse {
  statusCode: number;
  message: string;
  data: CustomerOrders;
  word: string | null;
  errors: string[];
}
