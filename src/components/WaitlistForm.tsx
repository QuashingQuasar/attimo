import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import { z } from "zod";
interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}
const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  contactMethod: z.enum(["email", "phone"]),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }).optional(),
  phone: z.string().trim().regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, { message: "Invalid phone number" }).max(20, { message: "Phone number must be less than 20 characters" }).optional(),
});

export const WaitlistForm = ({
  isOpen,
  onClose
}: WaitlistFormProps) => {
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("email");
  const [contactValue, setContactValue] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Validate input
    const validationData = {
      name,
      contactMethod,
      [contactMethod]: contactValue
    };
    
    const result = contactSchema.safeParse(validationData);
    
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Welcome to our waitlist!",
        description: "You'll be among the first to taste our liquid gold when we launch."
      });
      setContactValue("");
      setName("");
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
          <CardTitle className="text-2xl text-olive-dark">Join Our Waitlist</CardTitle>
          <CardDescription>
            Be the first to experience our premium olive oil when we launch.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" required className="border-olive-light focus:border-gold-rich" />
            </div>
            
            <div className="space-y-3">
              <Label>Where you want to messaged</Label>
              <RadioGroup value={contactMethod} onValueChange={(value: "email" | "phone") => {
                setContactMethod(value);
                setContactValue("");
                setError("");
              }} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email-option" />
                  <Label htmlFor="email-option" className="cursor-pointer font-normal">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="phone-option" />
                  <Label htmlFor="phone-option" className="cursor-pointer font-normal">Phone</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact">
                {contactMethod === "email" ? "Email Address" : "Phone Number"}
              </Label>
              <Input id="contact" type={contactMethod === "email" ? "email" : "tel"} value={contactValue} onChange={e => {
                setContactValue(e.target.value);
                setError("");
              }} placeholder={contactMethod === "email" ? "Enter your email address" : "Enter your phone number"} required className="border-olive-light focus:border-gold-rich" />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting} style={{
            fontFamily: 'Space Grotesk, monospace'
          }}>
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
          
        </CardContent>
      </Card>
    </div>;
};