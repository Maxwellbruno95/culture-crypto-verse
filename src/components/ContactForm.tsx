import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const EMAILJS_SERVICE_ID = "service_144miwj";
const EMAILJS_TEMPLATE_ID = "template_l2xs8ma";
const EMAILJS_USER_ID = "Vds3Ndrno0FpBZfz5";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      };
      
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

      if (response.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
        });
        
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-start">
      <div>
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-6">
          Have questions or want to collaborate? Fill out the form and I'll get back to you as soon as possible.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-crypto-purple/10 p-3 rounded-full">
              <Phone className="h-6 w-6 text-crypto-purple" />
            </div>
            <div>
              <p className="font-medium">Phone/WhatsApp</p>
              <a href="tel:+254745513358" className="text-muted-foreground hover:text-crypto-purple">
                +254 745 513 358
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-crypto-purple/10 p-3 rounded-full">
              <Mail className="h-6 w-6 text-crypto-purple" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:maxwellbruno52@gmail.com" className="text-muted-foreground hover:text-crypto-purple">
                maxwellbruno52@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-crypto-purple/10 p-3 rounded-full">
              <MessageSquare className="h-6 w-6 text-crypto-purple" />
            </div>
            <div>
              <p className="font-medium">Telegram</p>
              <a href="https://t.me/maxwellbruno" className="text-muted-foreground hover:text-crypto-purple">
                @maxwellbruno
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-muted p-6 rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="What is this regarding?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Let me know how I can help..."
                      className="min-h-32"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-crypto-purple hover:bg-crypto-darkpurple"
              disabled={isSubmitting}
            >
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
