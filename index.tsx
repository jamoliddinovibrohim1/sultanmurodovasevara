import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';

// --- Constants & Data ---
const COMPARISON_DATA = [
  { name: 'Qisqa muddat', reklama: 85, pr: 65 },
  { name: 'Uzoq muddat', reklama: 45, pr: 90 },
];

const GROWTH_DATA = [
  { period: 'Boshlanish', ishonch: 40, loyaqlik: 30 },
  { period: '1 oy', ishonch: 60, loyaqlik: 55 },
  { period: '3 oy', ishonch: 75, loyaqlik: 70 },
  { period: '6 oy', ishonch: 90, loyaqlik: 88 },
];

const PERCEPTION_DATA = [
  { name: 'Ijobiy', value: 70, color: '#10b981' },
  { name: 'Neytral', value: 20, color: '#f59e0b' },
  { name: 'Salbiy', value: 10, color: '#ef4444' },
];

const APP_CONTENT = {
  title: "PR loyihalari orqali mahsulot yoki xizmat brendini bozorga olib kirish va ommalashtirish xususiyatlari",
  subtitle: "Emperor loyihasi misolida empirik tahlil",
  sections: {
    intro: "Hozirgi kunda bozor munosabatlarining rivojlanishi va raqobatning kuchayishi sharoitida mahsulot yoki xizmatni bozorga olib kirish jarayoni murakkablashib bormoqda. Shu jihatdan PR (Public Relations) loyihalari brendni bozorga olib kirish va uni ommalashtirishda muhim ahamiyat kasb etadi.",
    methodology: "Empirik tahlil davomida Emperor loyihasida olib borilgan PR va reklama faoliyati solishtirildi. Auditoriya reaksiyasi, raqamli platformalardagi faollik hamda ommaviy axborot vositalarida berilgan materiallar tahlil qilindi.",
    analysis: "Empirik ma’lumotlarga ko‘ra, reklama faoliyati qisqa muddatli e’tibor jalb qilishga xizmat qilgan bo‘lsa, PR loyihalari uzoq muddatli ishonch va ijobiy imij shakllantirishga yo‘naltirilgan.",
    trust: "Empirik kuzatuvlarga asoslanib, PR loyihalari auditoriya ishonchi va brendga bo‘lgan sodiqlikni bosqichma-bosqich oshirgan. Bu PR loyihalarining uzoq muddatli kommunikatsion samaradorligini ko‘rsatadi.",
    perception: "PR loyihalari natijasida Emperor brendining auditoriya ongida qanday qabul qilingani ham empirik tahlil qilindi. Auditoriyaning asosiy qismi Emperor brendini ijobiy qabul qilgan.",
    conclusion: "O‘tkazilgan empirik tahlil shuni ko‘rsatdiki, PR loyihalari mahsulot yoki xizmat brendini bozorga olib kirish va ommalashtirishda muhim ahamiyatga ega. Emperor loyihasi misolida PR faoliyati orqali brendga nisbatan ijobiy imij va auditoriya ishonchi shakllangani aniqlandi."
  }
};

// --- Sub-components ---
const Card: React.FC<{ title: string; children: React.ReactNode; caption?: string }> = ({ title, children, caption }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col h-full transition-all hover:shadow-md">
    <h3 className="text-lg font-semibold text-slate-800 mb-6">{title}</h3>
    <div className="flex-1 min-h-[300px] w-full">
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

// --- Main App Component ---
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-indigo-700 via-blue-800 to-slate-900 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium mb-6 backdrop-blur-md border border-white/10">
            Empirik Tadqiqot Tahlili
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight px-4">
            {APP_CONTENT.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto px-4">
            ({APP_CONTENT.subtitle})
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <Section title="Kirish">
        <p className="indent-8 mb-6">{APP_CONTENT.sections.intro}</p>
        <div className="mt-12 p-8 bg-indigo-50 rounded-3xl border border-indigo-100 shadow-inner">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">Tadqiqot metodologiyasi</h3>
          <p className="text-indigo-800/80 leading-relaxed">{APP_CONTENT.sections.methodology}</p>
        </div>
      </Section>

      {/* Analytics Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-slate-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* PR vs Ad Chart */}
            <Card 
              title="PR va reklama samaradorligi" 
              caption="1-diagramma. Qisqa va uzoq muddatli istiqboldagi natijalar"
            >
              <div className="mb-6 text-sm text-slate-600 leading-relaxed">
                {APP_CONTENT.sections.analysis}
              </div>
              <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={COMPARISON_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <Legend verticalAlign="top" height={36} />
                    <Bar name="Reklama (%)" dataKey="reklama" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                    <Bar name="PR (%)" dataKey="pr" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Growth Dynamics Chart */}
            <Card 
              title="Ishonch va Loyaqlik O'sishi" 
              caption="2-diagramma. PR faoliyati orqali auditoriya munosabati dinamikasi"
            >
              <div className="mb-6 text-sm text-slate-600 leading-relaxed">
                {APP_CONTENT.sections.trust}
              </div>
              <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={GROWTH_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <Legend verticalAlign="top" height={36} />
                    <Line name="Ishonch" type="monotone" dataKey="ishonch" stroke="#10b981" strokeWidth={4} dot={{ r: 6, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }} />
                    <Line name="Loyaqlik" type="monotone" dataKey="loyaqlik" stroke="#6366f1" strokeWidth={4} dot={{ r: 6, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* Perception Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 flex flex-col justify-center bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Emperor brendining qabul qilinishi</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {APP_CONTENT.sections.perception}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PERCEPTION_DATA.map((item) => (
                  <div key={item.name} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 transition-transform hover:scale-[1.02]">
                    <div className="text-sm font-medium text-slate-500 mb-1 uppercase tracking-wider">{item.name}</div>
                    <div className="text-3xl font-bold" style={{ color: item.color }}>{item.value}%</div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card 
              title="Auditoriya Reaksiyasi" 
              caption="3-diagramma. Emperor brendining auditoriya tomonidan qabul qilinishi"
            >
              <div className="w-full h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={PERCEPTION_DATA}
                      cx="50%"
                      cy="45%"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {PERCEPTION_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <Legend verticalAlign="bottom" align="center" layout="horizontal" iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <Section title="Xulosa" dark>
        <div className="relative">
          <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          <p className="pl-6 text-xl md:text-2xl font-light opacity-90 leading-relaxed">
            {APP_CONTENT.sections.conclusion}
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/5 py-12 px-4 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Emperor PR Loyihasi Tadqiqot Tahlili.
        </p>
      </footer>
    </div>
  );
};

// --- Entry Point ---
const rootNode = document.getElementById('root');
if (rootNode) {
  const root = ReactDOM.createRoot(rootNode);
  root.render(<App />);
}