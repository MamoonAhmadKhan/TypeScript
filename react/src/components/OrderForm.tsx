import { useState } from "react";

type Order = {
  name: string;
  quantity: number;
};

interface OrderFormProps {
  submit(order: Order): void;
}

const OrderForm = (props: OrderFormProps) => {
  const [name, setName] = useState<string>("Product Name");
  const [quantity, setQuantity] = useState<number>(0);

  const { submit } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit({ name, quantity });
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <div>
        <label>Product Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </div>

      <div>
        <label>Quantity: </label>
        <input
          type="number"
          value={quantity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuantity(Number(e.target.value))
          }
        />
      </div>

      <button>PlaceOrder</button>
    </form>
  );
};

export default OrderForm;
