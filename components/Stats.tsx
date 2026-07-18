'use client';

export default function Stats() {
  const stats = [
    { label: 'Happy Clients', value: '100+' },
    { label: 'Top Quality', value: '100%' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Support Available', value: '24/7' },
  ];

  return (
    <section className="py-12 bg-white relative z-20 -mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-3xl bg-gray-900 p-10 shadow-2xl">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 font-bold tracking-wide text-xs md:text-sm uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}