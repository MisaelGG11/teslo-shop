"use client";

import { IoAddCircleOutline, IoRemoveCircleOutline, IoTrashOutline } from "react-icons/io5";

interface Props {
  quantity: number;

  onQuantityChange: (newQuantity: number) => void;

  onRemove?: () => void;
}

export const QuantitySelector = ({ quantity, onQuantityChange, onRemove }: Props) => {

  const handleQuantityChange = (value: number) => {
    if (quantity + value < 1) return;

    onQuantityChange(quantity + value);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex">
        <button
          className="-mr-4 bg-gray-100 rounded-full"
          onClick={() => handleQuantityChange(-1)}
        >
          <IoRemoveCircleOutline
            size={30}
            className={quantity === 1 ? "text-gray-300" : ""}
          />
        </button>

        <span className="w-20 px-5 py-1 bg-gray-200 text-center rounded -z-1">
          {quantity}
        </span>

        <button
          className="-ml-4 bg-gray-100 rounded-full"
          onClick={() => handleQuantityChange(+1)}
          disabled={quantity <= 0 || quantity >= 5}
        >
          <IoAddCircleOutline
            size={30}
            className={quantity === 5 ? "text-gray-300" : ""}
          />
        </button>
      </div>
      {onRemove && (
        <button
          className="hover:bg-gray-300 rounded-full transition-all duration-300 p-2"
          onClick={onRemove}
        >
          <IoTrashOutline size={20} />
        </button>
      )}
    </div>
  );
};
