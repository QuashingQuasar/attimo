import { Card, CardContent, CardHeader } from "@/components/ui/card";

const flavorProfile = [
  { name: "PEPPERY", rating: 4 },
  { name: "FRUITY", rating: 5 },
  { name: "BITTER", rating: 4 },
  { name: "HERBAL", rating: 3 }
];

const labMetrics = [
  {
    title: "POLYPHENOLS",
    value: "904 MG/KG",
    avg: "avg. ~180mg/kg",
    description: "antioxidants that give EVOO its special health benefits"
  },
  {
    title: "OLEIC ACID", 
    value: "74.9%",
    avg: "avg. ~67%",
    description: "healthy fats that protect the oil and your health, higher = better"
  },
  {
    title: "PEROXIDES",
    value: "6.3 MEQ/KG", 
    avg: "avg. ~20meq/kg",
    description: "lower = fresher oil, less oxidation and longer shelf life"
  },
  {
    title: "ACIDITY",
    value: "0.16%",
    avg: "avg. ~0.8%", 
    description: "lower = fresher olives and higher quality"
  }
];

export const LabValues = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Product Info */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-olive-dark mb-2">FLAVOR</h3>
                <p className="text-olive-medium mb-1">green & grassy</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-olive-dark mb-2">ORIGIN</h3>
                <p className="text-olive-medium mb-1">Alentejo, Portugal</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-olive-dark mb-2">OLIVE</h3>
                <p className="text-olive-medium mb-1">Galega</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-olive-dark mb-2">USE</h3>
                <p className="text-olive-medium mb-1">drizzle over fresh food to bring out flavors</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-olive-dark mb-2">STORE</h3>
                <p className="text-olive-medium mb-1">keep away from light and heat</p>
              </div>

              {/* Flavor Profile */}
              <div className="mt-12">
                {flavorProfile.map((flavor, index) => (
                  <div key={index} className="flex items-center justify-between mb-4">
                    <span className="font-bold text-olive-dark text-lg">{flavor.name}</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className={`w-4 h-4 rounded-full ${
                            dot <= flavor.rating ? 'bg-olive-dark' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Lab Values */}
            <div className="space-y-6">
              {labMetrics.map((metric, index) => (
                <Card key={index} className="bg-white shadow-lg border-olive-light/30">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h4 className="font-bold text-olive-dark text-lg mb-2">
                        {metric.title}
                      </h4>
                      <div className="text-4xl font-bold text-olive-dark mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-olive-medium">
                        {metric.avg}
                      </div>
                    </div>
                    <p className="text-sm text-olive-medium text-center leading-relaxed">
                      {metric.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white p-4 rounded-lg shadow-lg">
              <span className="text-olive-dark font-bold">LAB VALUES</span>
              <div className="w-8 h-8 bg-olive-dark flex items-center justify-center rounded">
                <span className="text-white text-xs">QR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};