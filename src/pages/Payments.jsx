import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const INITIAL_TRANSACTIONS = [
  { id: 'TXN-78001', orderId: 'ORD-24091', customer: 'Aarav Mehta', method: 'UPI', amount: '₹72,900', date: '29 Sep 2026', status: 'Successful' },
  { id: 'TXN-78002', orderId: 'ORD-24090', customer: 'Diya Shah', method: 'Card', amount: '₹3,999', date: '28 Sep 2026', status: 'Successful' },
  { id: 'TXN-78003', orderId: 'ORD-24088', customer: 'Kabir Rao', method: 'UPI', amount: '₹2,899', date: '22 Sep 2026', status: 'Refunded' },
  { id: 'TXN-78004', orderId: 'ORD-24087', customer: 'Aarav Mehta', method: 'Net banking', amount: '₹7,999', date: '29 Sep 2026', status: 'Pending' },
];

export default function Payments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('Transactions');
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
    <div className="space-y-6 pb-12 text-[#1a1612]">
      {/* 1. Top Header Bar (Breadcrumb, Global Search & Profile) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-transparent pb-2">
        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-xl border border-[#eae3da] bg-white text-[#1a1612] hover:bg-[#fcf8f2] shadow-2xs">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div>
            <span className="text-xs text-[#8c827a]">Overview › </span>
            <span className="text-xs font-semibold text-[#1a1612]">Payments</span>
            <h2 className="text-xl font-bold text-[#1a1612]">Payments</h2>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <input
              type="text"
              placeholder="Search orders, users, sellers or products..."
              className="w-full bg-white border border-[#eae3da] rounded-xl px-4 py-2 text-xs text-[#1a1612] outline-none shadow-2xs placeholder-[#a8a096]"
            />
          </div>
          <button className="p-2.5 rounded-xl border border-[#eae3da] bg-white text-[#1a1612] hover:bg-[#fcf8f2] shadow-2xs relative">
            <svg className="w-4 h-4 text-[#70665f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div className="flex items-center gap-2 bg-white border border-[#eae3da] rounded-xl px-3 py-1.5 shadow-2xs">
            <div className="w-7 h-7 rounded-lg bg-[#1a1612] text-white flex items-center justify-center font-bold text-xs">
              A
            </div>
            <div className="text-left">
              <p className="text-xs font-bold leading-tight text-[#1a1612]">Hi, Admin</p>
              <p className="text-[10px] text-[#8c827a] leading-tight">Super Admin</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Page Title Block */}
      <div className="pt-2">
        <button 
          onClick={() => navigate('/')} 
          className="text-xs font-semibold text-[#8c827a] hover:text-[#1a1612] mb-1 inline-block"
        >
          ← Back to Overview
        </button>
        <h1 className="text-3xl font-bold text-[#1a1612]">Payments</h1>
        <p className="text-xs text-[#8c827a] mt-1">Review and manage marketplace records.</p>
      </div>

      {/* 3. Metric Cards (5 Cards Grid) */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#eae3da] shadow-2xs">
          <p className="text-xs text-[#8c827a] font-medium">Total Payments</p>
          <p className="text-2xl font-bold text-[#1a1612] mt-3">2,389</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#eae3da] shadow-2xs">
          <p className="text-xs text-[#8c827a] font-medium">Successful</p>
          <p className="text-2xl font-bold text-[#1a1612] mt-3">2,224</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#eae3da] shadow-2xs">
          <p className="text-xs text-[#8c827a] font-medium">Pending</p>
          <p className="text-2xl font-bold text-[#1a1612] mt-3">53</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#eae3da] shadow-2xs">
          <p className="text-xs text-[#8c827a] font-medium">Failed</p>
          <p className="text-2xl font-bold text-[#1a1612] mt-3">34</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#eae3da] shadow-2xs col-span-2 md:col-span-1">
          <p className="text-xs text-[#8c827a] font-medium">Refunded</p>
          <p className="text-2xl font-bold text-[#1a1612] mt-3">78</p>
        </div>
      </div>

      {/* 4. Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 pt-2">
        {['Transactions', 'Refunds', 'Seller Payouts'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === tab
                ? 'bg-[#f4ebe1] text-[#1a1612]'
                : 'text-[#8c827a] hover:text-[#1a1612]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 5. Filter Box (Search & Status) */}
      <div className="bg-white p-5 rounded-2xl border border-[#eae3da] grid grid-cols-1 md:grid-cols-3 gap-4 shadow-2xs">
        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-[#8c827a] block mb-2">Search Payments</label>
          <input
            type="text"
            placeholder="Transaction ID, order ID or seller"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-[#eae3da] rounded-xl px-4 py-2.5 text-xs text-[#1a1612] outline-none placeholder-[#b8aeb0]"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-[#8c827a] block mb-2">Status</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full bg-white border border-[#eae3da] rounded-xl px-4 py-2.5 text-xs text-[#1a1612] outline-none cursor-pointer"
          >
            <option value="All">All Status</option>
            <option value="Successful">Successful</option>
            <option value="Pending">Pending</option>
            <option value="Refunded">Refunded</option>
          </select>
        </div>
      </div>

      {/* 6. Payments Data Table */}
      <div className="bg-white rounded-2xl border border-[#eae3da] overflow-hidden shadow-2xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f9f5ef] border-b border-[#eae3da] text-[11px] font-bold text-[#8c827a] tracking-wider">
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
              <tr key={row.id} className="hover:bg-[#fcf8f2]/50 transition">
                <td className="py-4 px-6 font-medium text-[#1a1612]">{row.id}</td>
                <td className="py-4 px-6 font-medium text-[#1a1612]">{row.orderId}</td>
                <td className="py-4 px-6 font-medium text-[#1a1612]">{row.customer}</td>
                <td className="py-4 px-6 text-[#1a1612]">{row.method}</td>
                <td className="py-4 px-6 font-bold text-[#1a1612]">{row.amount}</td>
                <td className="py-4 px-6 text-[#1a1612]">{row.date}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-semibold ${
                      row.status === 'Successful'
                        ? 'bg-[#e2f3e8] text-[#2d6a4f]'
                        : row.status === 'Pending'
                        ? 'bg-[#fef3d6] text-[#b45309]'
                        : 'bg-[#e2f3e8] text-[#2d6a4f]'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button
                    onClick={() => navigate(`/payments/${row.id}`)}
                    className="border border-[#eae3da] bg-white text-[#1a1612] hover:bg-[#fcf8f2] px-4 py-1.5 rounded-xl font-semibold text-xs transition shadow-2xs"
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