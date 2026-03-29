import { useState } from "react";
import type { Product } from "../types";

interface Props {
  products: Product[];
  addProduct: Function;
  updateQuantity: Function;
  deleteProduct: Function;
}

export default function Products({
  products,
  addProduct,
  updateQuantity,
  deleteProduct,
}: Props) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-100 via-white to-gray-200 p-10 font-sans text-gray-800 overflow-hidden">

      {/* Background */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-green-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#999_1px,transparent_1px),linear-gradient(to_bottom,#999_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            📦 Product Management
          </h1>
          <p className="text-gray-500 text-sm">
            จัดการสินค้าในคลัง
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            เพิ่มสินค้าใหม่
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            <input
              placeholder="ชื่อสินค้า"
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={e => setName(e.target.value)}
            />

            <input
              type="number"
              placeholder="ราคา"
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={e => setPrice(+e.target.value)}
            />

            <input
              type="number"
              placeholder="จำนวน"
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={e => setQuantity(+e.target.value)}
            />

            <button
              className="bg-blue-600 text-white rounded hover:bg-blue-500 transition font-semibold"
              onClick={() => addProduct(name, price, quantity)}
            >
              + เพิ่ม
            </button>

          </div>
        </div>

        {/* Table */}
        <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg border overflow-hidden">

          <div className="grid grid-cols-5 p-4 bg-gray-200 font-semibold text-gray-700">
            <div>ชื่อสินค้า</div>
            <div>ราคา</div>
            <div>จำนวน</div>
            <div>สถานะ</div>
            <div className="text-right">จัดการ</div>
          </div>

          {products.map(p => (
            <div
              key={p.id}
              className="grid grid-cols-5 p-4 border-t items-center hover:bg-gray-50 transition"
            >
              <div>{p.name}</div>
              <div>฿{p.price.toLocaleString()}</div>
              <div>{p.quantity}</div>

              <div>
                {p.quantity === 0 ? (
                  <span className="text-red-500 font-medium">หมด</span>
                ) : (
                  <span className="text-green-600 font-medium">พร้อมขาย</span>
                )}
              </div>

              <div className="flex justify-end gap-2">

                <button
                  className="bg-green-500 text-white px-3 rounded hover:bg-green-400 transition"
                  onClick={() => updateQuantity(p.id, 1)}
                >
                  +
                </button>

                <button
                  className="bg-yellow-400 text-white px-3 rounded hover:bg-yellow-300 transition"
                  onClick={() => {
                    if (p.quantity > 0)
                      updateQuantity(p.id, -1);
                  }}
                >
                  -
                </button>

                <button
                  className="bg-red-500 text-white px-3 rounded hover:bg-red-400 transition"
                  onClick={() => deleteProduct(p.id)}
                >
                  ลบ
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="text-gray-400 text-xs">
          ระบบจัดการสินค้าคงคลัง (Inventory System)
        </div>

      </div>
    </div>
  );
}