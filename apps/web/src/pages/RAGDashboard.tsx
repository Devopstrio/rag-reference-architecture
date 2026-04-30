import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import { 
  Database, 
  FileText, 
  Layers, 
  Cpu, 
  Zap,
  BarChart3,
  Network,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  Search
} from 'lucide-react';

const retrievalData = [
  { name: 'Mon', accuracy: 0.82, latency: 120 },
  { name: 'Tue', accuracy: 0.85, latency: 115 },
  { name: 'Wed', accuracy: 0.78, latency: 140 },
  { name: 'Thu', accuracy: 0.92, latency: 95 },
  { name: 'Fri', accuracy: 0.88, latency: 105 },
  { name: 'Sat', accuracy: 0.94, latency: 85 },
  { name: 'Sun', accuracy: 0.91, latency: 90 },
];

const KPI_CARDS = [
  { title: 'Indexed Documents', value: '14,284', trend: 'Verified', color: 'emerald', icon: FileText },
  { title: 'Avg Retrieval Latency', value: '102ms', trend: '-12ms', color: 'emerald', icon: Zap },
  { title: 'Context Precision', value: '94.2%', trend: '+4.1%', color: 'indigo', icon: BarChart3 },
  { title: 'Hallucination Rate', value: '0.2%', trend: 'Goal: <0.5%', color: 'emerald', icon: ShieldCheck },
];

const RAGDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">RAG Intelligence Dashboard</h1>
          <p className="text-slate-400">Strategic oversight of retrieval-augmented generation pipelines and vector search performance.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Ingest New Docs
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Query Pipeline
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color}-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-400`} />
              </div>
              <div className={`text-xs font-medium ${card.trend.startsWith('+') ? 'text-emerald-400' : 'text-slate-400'}`}>
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Graph */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Retrieval Precision vs Latency</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={retrievalData}>
                <defs>
                  <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="accuracy" stroke="#10b981" fill="url(#colorAccuracy)" name="Retrieval Accuracy (%)" />
                <Area type="monotone" dataKey="latency" stroke="#6366f1" fill="transparent" strokeDasharray="5 5" name="Latency (ms)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Vector Store Health */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6">Vector Store Distribution</h3>
          <div className="flex-1 space-y-6">
            {[
              { name: 'Technical Docs', count: 8450, color: 'bg-emerald-500' },
              { name: 'Internal Wiki', count: 3240, color: 'bg-indigo-500' },
              { name: 'Legal/Compliance', count: 1590, color: 'bg-blue-500' },
              { name: 'Product Specs', count: 1004, color: 'bg-slate-500' },
            ].map((coll) => (
              <div key={coll.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">{coll.name}</span>
                  <span className="text-slate-400">{coll.count} Vectors</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${coll.color}`} style={{ width: `${(coll.count/14284)*100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RAG Query Activity */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Live Retrieval Pipeline Activity</h3>
          <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View All Queries</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">User Query</th>
                <th className="px-6 py-4 font-semibold">Top Source ID</th>
                <th className="px-6 py-4 font-semibold">Similarity</th>
                <th className="px-6 py-4 font-semibold">Chunks</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Latency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { query: 'How do I configure mTLS?', source: 'doc-security-44', sim: '0.942', chunks: '3', status: 'Optimal' },
                { query: 'What is the retry policy?', source: 'doc-ops-12', sim: '0.881', chunks: '5', status: 'Augmented' },
                { query: 'Who is the project owner?', source: 'doc-wiki-99', sim: '0.724', chunks: '2', status: 'Low-Confidence' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Search className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-medium text-slate-300">{row.query}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-mono text-slate-400">{row.source}</td>
                  <td className="px-6 py-4 text-sm text-slate-300 font-bold">{row.sim}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{row.chunks}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold uppercase bg-slate-800 px-2 py-1 rounded border border-slate-700 ${
                      row.status === 'Optimal' ? 'text-emerald-400' : row.status === 'Augmented' ? 'text-blue-400' : 'text-amber-400'
                    }`}>{row.status}</span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 font-mono">102ms</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RAGDashboard;
