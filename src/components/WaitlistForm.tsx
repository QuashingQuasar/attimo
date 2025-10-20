import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
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
  const [email, setEmail] = useState("");
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
        description: "You'll be among the first to taste our liquid gold when we launch."
      });
      setEmail("");
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
          <CardTitle className="text-2xl text-olive-dark">News From The Grove</CardTitle>
          <CardDescription>
            Be the first to know about new ATTIMO oils
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your full name" required className="border-olive-light focus:border-gold-rich" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Be the first to know about new oils.</Label>
              <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address" required className="border-olive-light focus:border-gold-rich" />
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
                I agree to receive marketing emails and understand I can unsubscribe at any time. By submitting this form, I consent to the processing of my personal data in accordance with the Privacy Policy.
              </label>
            </div>
            <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting || !gdprConsent} style={{
            fontFamily: 'Space Grotesk, monospace'
          }}>
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
          
        </CardContent>
      </Card>
    </div>;
};