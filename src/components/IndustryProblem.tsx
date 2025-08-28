import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const IndustryProblem = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-olive-dark mb-8 leading-tight">
              The Olive Oil<br />
              <span className="text-olive-medium">Problem</span>
            </h2>
            <p className="text-xl text-olive-medium max-w-4xl mx-auto leading-relaxed">
              Many olive oils that claim to be extra virgin are actually old, blended, rancid. 
              Sneaky 👀! So, we decided to do it better.
            </p>
            <p className="text-sm text-olive-light mt-4 italic">
              *in studies on extra virgin olive oil
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="text-center border-2 border-orange-200 bg-orange-50/30 shadow-lg">
              <CardContent className="p-12">
                <div className="text-7xl font-bold text-olive-dark mb-4">80%</div>
                <p className="text-xl text-olive-medium font-medium leading-relaxed">
                  are not meeting the extra virgin standards
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-orange-200 bg-orange-50/30 shadow-lg">
              <CardContent className="p-12">
                <div className="text-7xl font-bold text-olive-dark mb-4">90%</div>
                <p className="text-xl text-olive-medium font-medium leading-relaxed">
                  are low in health-boosting antioxidants
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-8 opacity-20">
            <div className="w-8 h-8 bg-olive-medium rounded-full"></div>
            <div className="w-6 h-12 bg-olive-light rounded-full"></div>
            <div className="w-4 h-6 bg-olive-medium rounded-full"></div>
            <div className="w-12 h-8 bg-olive-dark rounded-full"></div>
            <div className="w-6 h-10 bg-olive-light rounded-full"></div>
            <div className="w-8 h-6 bg-olive-medium rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};