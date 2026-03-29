import type { Product } from "../types";

interface Props {
  products: Product[];
}

export default function Dashboard({ products }: Props) {
  const totalItems = products.length;

  const totalValue = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  const outOfStock = products.filter(
    (p) => p.quantity === 0
  ).length;

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
            📊 Inventory Dashboard
          </h1>
          <p className="text-gray-500 text-sm">
            ระบบสรุปข้อมูลสินค้าคงคลัง
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border hover:shadow-xl transition">
            <p className="text-sm text-gray-500">จำนวนสินค้า</p>
            <h2 className="text-3xl font-bold text-blue-600">
              {totalItems}
            </h2>
          </div>

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border hover:shadow-xl transition">
            <p className="text-sm text-gray-500">มูลค่าสินค้ารวม</p>
            <h2 className="text-3xl font-bold text-green-600">
              ฿{totalValue.toLocaleString()}
            </h2>
          </div>

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border hover:shadow-xl transition">
            <p className="text-sm text-gray-500">สินค้าหมด</p>
            <h2 className="text-3xl font-bold text-red-500">
              {outOfStock}
            </h2>
          </div>

        </div>

        {/* Status */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow border">
          <h3 className="font-semibold text-gray-700 mb-2">
            สถานะระบบ
          </h3>
          <p className="text-sm text-gray-500">
            ระบบทำงานปกติ และข้อมูลอัปเดตล่าสุด
          </p>
        </div>

      </div>
    </div>
  );
}