import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { X } from "lucide-react";
interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}
export const WaitlistForm = ({
  isOpen,
  onClose
}: WaitlistFormProps) => {
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("email");
  const [contactValue, setContactValue] = useState("");
  const [name, setName] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to our waitlist!",
        description: `We'll contact you at your ${contactMethod}.`
      });
      setContactValue("");
      setName("");
      setGdprConsent(false);
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-olive-dark/80 backdrop-blur-sm">
      <Card className="w-full max-w-md mx-4 border-gold-rich/20 shadow-2xl">
        <CardHeader className="relative">
          <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-2 top-2 text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-2xl text-olive-dark">Fresh From The Press</CardTitle>
          <CardDescription>
            Be the first to know about new ATTIMO oils
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required className="border-olive-light focus:border-gold-rich" />
            </div>
            <div className="space-y-3">
              <Label>Where you want to be messaged</Label>
              <RadioGroup value={contactMethod} onValueChange={(value: "email" | "phone") => {
              setContactMethod(value);
              setContactValue("");
            }}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email-option" />
                  <Label htmlFor="email-option" className="font-normal cursor-pointer">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="phone-option" />
                  <Label htmlFor="phone-option" className="font-normal cursor-pointer">Phone</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Input id="contact" type={contactMethod === "email" ? "email" : "tel"} value={contactValue} onChange={e => setContactValue(e.target.value)} placeholder={contactMethod === "email" ? "Email Address" : "Phone Number"} required className="border-olive-light focus:border-gold-rich" />
            </div>
            <div className="flex items-start space-x-3 py-2">
              <Checkbox 
                id="gdpr" 
                checked={gdprConsent}
                onCheckedChange={(checked) => setGdprConsent(checked === true)}
                required
              />
              <label 
                htmlFor="gdpr" 
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to receive marketing messages
              </label>
            </div>
            <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting || !gdprConsent} style={{
            fontFamily: 'Space Grotesk, monospace'
          }}>
              {isSubmitting ? "Joining..." : "Let me know"}
            </Button>
          </form>
          
        </CardContent>
      </Card>
    </div>;
};