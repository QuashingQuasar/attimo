import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "FRESH",
    attimo: { type: "check" },
    them: { type: "text", value: "No, mixed with old oils" }
  },
  {
    feature: "SINGLE SOURCE",
    attimo: { type: "check" },
    them: { type: "text", value: "Oil blended from 3+ countries" }
  },
  {
    feature: "TRACEABLE",
    attimo: { type: "check" },
    them: { type: "cross" }
  },
  {
    feature: "LAB-TESTED",
    attimo: { type: "check" },
    them: { type: "cross" }
  },
  {
    feature: "POLYPHENOLS",
    attimo: { type: "text", value: "799 mg/kg" },
    them: { type: "text", value: "100-200 mg/kg" }
  }
];

export const OilComparison = () => {
  return (
    <section className="py-24 snap-start min-h-screen flex items-center" style={{ backgroundColor: '#FFFAEA' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#1B4229' }}>
              ATTIMO <span style={{ fontFamily: 'Beverly Drive, cursive' }}>vs</span> Others
            </h2>
            <p className="text-2xl" style={{ 
              color: '#1B4229',
              fontFamily: 'Space Grotesk, monospace'
            }}>
              Not all olive oils are equal
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Table Header */}
              <thead>
                <tr>
                  <th className="py-6 px-8 text-left"></th>
                  <th className="py-6 px-8 text-center text-2xl font-bold font-working-man" style={{ 
                    color: '#1B4229',
                    backgroundColor: '#B3E58C'
                  }}>
                    ATTIMO
                  </th>
                  <th className="py-6 px-8 text-center text-2xl font-bold" style={{ color: '#1B4229' }}>
                    THEM
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr 
                    key={index} 
                    style={{ 
                      borderBottom: index < comparisonData.length - 1 ? '1px dashed #1B4229' : 'none'
                    }}
                  >
                    {/* Feature Column */}
                    <td className="py-6 px-8 text-xl font-working-man" style={{ 
                      color: '#1B4229'
                    }}>
                      {row.feature}
                    </td>

                    {/* Attimo Column */}
                    <td className="py-6 px-8 text-center" style={{ backgroundColor: '#B3E58C' }}>
                      {row.attimo.type === "check" ? (
                        <div className="flex justify-center">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4CAF50' }}>
                            <Check className="w-6 h-6 text-white" strokeWidth={3} />
                          </div>
                        </div>
                      ) : (
                        <span className="text-lg font-medium" style={{ 
                          color: '#1B4229',
                          fontFamily: 'Space Grotesk, monospace'
                        }}>
                          {row.attimo.value}
                        </span>
                      )}
                    </td>

                    {/* Them Column */}
                    <td className="py-6 px-8 text-center">
                      {row.them.type === "cross" ? (
                        <div className="flex justify-center">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E53935' }}>
                            <X className="w-6 h-6 text-white" strokeWidth={3} />
                          </div>
                        </div>
                      ) : (
                        <span className="text-lg font-medium" style={{ 
                          color: '#1B4229',
                          fontFamily: 'Space Grotesk, monospace'
                        }}>
                          {row.them.value}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
