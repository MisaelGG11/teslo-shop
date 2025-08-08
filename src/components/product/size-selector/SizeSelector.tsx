import type { Size } from "@/interfaces";

interface Props {
  selectedSize: Size;
  availableSizes: Size[];
  onSizeChange?: (size: Size) => void;
}

export const SizeSelector = ({ selectedSize, availableSizes, onSizeChange }: Props) => {
  return (
    <div className="my-4">
      <h3 className="text-sm font-medium mb-2">Tallas disponibles:</h3>
      {
        availableSizes.map((size) => (
          <button
            key={size}
            className={`text-xs font-semibold mr-1.5 px-3 py-1 border rounded-full ${selectedSize === size ? 'bg-slate-800 text-white' : 'bg-gray-200 text-gray-700'}`}
            // onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))
      }
    </div>
  );
}