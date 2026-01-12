
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { COMPARISON_DATA, GROWTH_DATA, PERCEPTION_DATA, APP_CONTENT } from './constants';

const Card: React.FC<{ title: string; children: React.ReactNode; caption?: string }> = ({ title, children, caption }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col h-full transition-all hover:shadow-md">
    <h3 className="text-lg font-semibold text-slate-800 mb-6">{title}</h3>
    <div className="flex-1 min-h-[300px]">
      {children}
    </div>
    {caption && (
      <p className="mt-4 text-sm text-slate-500 italic text-center border-t pt-4">
        {caption}
      </p>
    )}
  </div>
);

const Section: React.FC<{ title: string; children: React.ReactNode; dark?: boolean }> = ({ title, children, dark }) => (
  <section className={`py-16 px-4 md:px-8 lg:px-16 ${dark ? 'bg-slate-900 text-white' : 'bg-transparent'}`}>
    <div className="max-w-6xl mx-auto">
      <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
      <div className={`text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
        {children}
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-indigo-700 via-blue-800 to-slate-900 py-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium mb-6 backdrop-blur-md">
            Empirik Tadqiqot Tahlili
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            {APP_CONTENT.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto">
            ({APP_CONTENT.subtitle})
          </p>
        </div>
      </header>

      {/* Intro & Methodology */}
      <Section title="Kirish">
        <p className="indent-8 mb-6">{APP_CONTENT.sections.intro}</p>
        <div className="mt-12 p-8 bg-indigo-50 rounded-3xl border border-indigo-100 shadow-inner">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">Tadqiqot metodologiyasi</h3>
          <p className="text-indigo-800/80 leading-relaxed">{APP_CONTENT.sections.methodology}</p>
        </div>
      </Section>

      {/* Analytics Dashboard Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* PR vs Advertising Card */}
            <Card 
              title="PR va reklama faoliyatining samaradorligi" 
              caption="1-diagramma. Qisqa va uzoq muddatli istiqboldagi natijalar"
            >
              <div className="mb-6 text-sm text-slate-600">
                {APP_CONTENT.sections.analysis}
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={COMPARISON_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend verticalAlign="top" height={36} />
                  <Bar name="Reklama (%)" dataKey="reklama" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                  <Bar name="PR (%)" dataKey="pr" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Growth Card */}
            <Card 
              title="Ishonch va Loyaqlik O'sishi" 
              caption="2-diagramma. PR faoliyati orqali auditoriya munosabati dinamikasi"
            >
              <div className="mb-6 text-sm text-slate-600">
                {APP_CONTENT.sections.trust}
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={GROWTH_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="period" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend verticalAlign="top" height={36} />
                  <Line name="Ishonch" type="monotone" dataKey="ishonch" stroke="#10b981" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                  <Line name="Loyaqlik" type="monotone" dataKey="loyaqlik" stroke="#6366f1" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Perception Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Emperor brendining qabul qilinishi</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                  {APP_CONTENT.sections.perception}
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {PERCEPTION_DATA.map((item) => (
                    <div key={item.name} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="text-sm text-slate-500 mb-1">{item.name}</div>
                      <div className="text-2xl font-bold" style={{ color: item.color }}>{item.value}%</div>
                    </div>
                  ))}
                </div>
             </div>
             <Card 
               title="Auditoriya Reaksiyasi" 
               caption="3-diagramma. Emperor brendining auditoriya tomonidan qabul qilinishi"
             >
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={PERCEPTION_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {PERCEPTION_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
             </Card>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <Section title="Xulosa" dark>
        <p className="indent-8 text-xl font-light opacity-90 italic border-l-4 border-blue-500 pl-8 py-4">
          {APP_CONTENT.sections.conclusion}
        </p>
        <div className="mt-16 flex flex-wrap justify-center gap-4">
           <div className="px-6 py-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-400"></span>
              <span className="text-sm font-medium uppercase tracking-wider text-blue-200">Strategik PR</span>
           </div>
           <div className="px-6 py-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              <span className="text-sm font-medium uppercase tracking-wider text-emerald-200">Brend Loyaqligi</span>
           </div>
           <div className="px-6 py-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              <span className="text-sm font-medium uppercase tracking-wider text-amber-200">Empirik Tahlil</span>
           </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/5 py-12 px-4 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Emperor PR Loyihasi Tadqiqot Tahlili. Barcha huquqlar himoyalangan.
        </p>
      </footer>
    </div>
  );
};

export default App;
