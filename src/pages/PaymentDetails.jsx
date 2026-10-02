import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const INITIAL_TRANSACTIONS = [
  { id: 'TXN-78001', orderId: 'ORD-24091', customer: 'Aarav Mehta', method: 'UPI', amount: '₹72,900', date: '29 Sep 2026', status: 'Successful' },
  { id: 'TXN-78002', orderId: 'ORD-24090', customer: 'Diya Shah', method: 'Card', amount: '₹3,999', date: '28 Sep 2026', status: 'Successful' },
  { id: 'TXN-78003', orderId: 'ORD-24088', customer: 'Kabir Rao', method: 'UPI', amount: '₹2,899', date: '22 Sep 2026', status: 'Refunded' },
];

export default function Payments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const navigate = useNavigate();

  const filteredTransactions = INITIAL_TRANSACTIONS.filter((txn) => {
    const matchesSearch = 
      txn.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.customer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || txn.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1a1612]">Payments</h1>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white p-4 rounded-2xl border border-[#eae3da] flex justify-between items-center gap-4">
        <div className="flex-1">
          <label className="text-[11px] text-[#8c827a] block font-semibold mb-1">Search Payments</label>
          <input
            type="text"
            placeholder="Transaction ID, order ID or seller"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-[#eae3da] rounded-xl px-4 py-2 text-xs text-[#1a1612] outline-none"
          />
        </div>

        <div>
          <label className="text-[11px] text-[#8c827a] block font-semibold mb-1">Status</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white border border-[#eae3da] rounded-xl px-4 py-2 text-xs text-[#1a1612] outline-none cursor-pointer"
          >
            <option value="All">All Status</option>
            <option value="Successful">Successful</option>
            <option value="Refunded">Refunded</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-[#eae3da] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#fdfaf5] border-b border-[#eae3da] text-[11px] font-bold text-[#8c827a] uppercase tracking-wider">
              <th className="py-4 px-6">Transaction ID</th>
              <th className="py-4 px-6">Order</th>
              <th className="py-4 px-6">Customer</th>
              <th className="py-4 px-6">Method</th>
              <th className="py-4 px-6">Amount</th>
              <th className="py-4 px-6">Date</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6 text-right">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eae3da] text-xs">
            {filteredTransactions.map((row) => (
              <tr key={row.id} className="hover:bg-[#fcf8f2]/40 transition">
                <td className="py-4 px-6 font-mono font-medium text-[#1a1612]">{row.id}</td>
                <td className="py-4 px-6 font-mono text-[#1a1612]">{row.orderId}</td>
                <td className="py-4 px-6 font-medium text-[#1a1612]">{row.customer}</td>
                <td className="py-4 px-6 text-[#1a1612]">{row.method}</td>
                <td className="py-4 px-6 font-bold text-[#1a1612]">{row.amount}</td>
                <td className="py-4 px-6 text-[#1a1612]">{row.date}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                      row.status === 'Successful'
                        ? 'bg-emerald-100/70 text-emerald-800'
                        : 'bg-emerald-100/70 text-emerald-800'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                {/* ACTION View Button */}
                <td className="py-4 px-6 text-right">
                  <button
                    onClick={() => navigate(`/payments/${row.id}`)}
                    className="border border-[#eae3da] bg-white text-[#1a1612] hover:bg-[#fcf8f2] px-4 py-1.5 rounded-xl font-bold text-xs transition shadow-2xs"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}