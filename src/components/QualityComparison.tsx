import { CheckCircle, X } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const comparisonData = [
  {
    category: "FRESH",
    kleia: true,
    average: "no, mixed with old oils"
  },
  {
    category: "SINGLE SOURCE", 
    kleia: true,
    average: "no, blended from +3 countries"
  },
  {
    category: "TRACEABLE",
    kleia: true,
    average: false
  },
  {
    category: "LAB-TESTED",
    kleia: true,
    average: false
  },
  {
    category: "POLYPHENOLS",
    kleia: "~900mg/kg",
    average: "100-200mg/kg"
  }
];

export const QualityComparison = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-olive-dark mb-6 tracking-tight">
            HIGH-QUALITY EVOO<br />YOU CAN TRUST AND TRACE
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-xl">
            <CardHeader className="bg-gradient-to-r from-gold-rich to-gold-light text-olive-dark">
              <div className="grid grid-cols-3 gap-4 text-center font-bold text-xl">
                <div></div>
                <div>KLEIA</div>
                <div>AVG. OIL</div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {comparisonData.map((row, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 gap-4 p-6 border-b border-gray-100 ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <div className="font-bold text-olive-dark text-lg flex items-center">
                    {row.category}
                  </div>
                  <div className="flex items-center justify-center">
                    {typeof row.kleia === 'boolean' ? (
                      row.kleia ? (
                        <CheckCircle className="text-olive-dark" size={32} />
                      ) : (
                        <X className="text-red-500" size={32} />
                      )
                    ) : (
                      <span className="font-bold text-olive-dark text-lg">{row.kleia}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    {typeof row.average === 'boolean' ? (
                      row.average ? (
                        <CheckCircle className="text-olive-dark" size={32} />
                      ) : (
                        <X className="text-red-500" size={32} />
                      )
                    ) : (
                      <span className="text-gray-600 text-lg">{row.average}</span>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};