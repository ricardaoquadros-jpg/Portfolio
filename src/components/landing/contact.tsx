"use client";

import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

export function Contact() {
  const { language, translations } = useLanguage();
  const contactContent = translations[language].contact;
  const { toast } = useToast();

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>, textToCopy: string, type: 'email' | 'phone') => {
    e.preventDefault();
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: contactContent.toast.title,
      description: type === 'email' ? contactContent.toast.email : contactContent.toast.phone,
    });
  };

  return (
    <Section id="contact" className="bg-card">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            {contactContent.title}
          </h2>
          <p className="text-lg text-foreground/80 max-w-md">
            {contactContent.subtitle}
          </p>
          <div className="flex gap-4 pt-4">
            <Button asChild variant="ghost" size="icon" className="hover:bg-primary/20">
              <Link href="https://www.linkedin.com/in/ricardoquadrosss/" target="_blank" rel="noopener noreferrer">
                <Icons.linkedin className="h-6 w-6 text-primary"/>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:bg-primary/20">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Icons.github className="h-6 w-6 text-primary"/>
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
        <div>
          <Card className="bg-primary/5 border-primary shadow-lg">
            <CardContent className="p-6 md:p-8">
              <ul className="space-y-6">
                {contactContent.info.map(({ type, Icon: IconName, text, href }) => {
                  const Icon = Icons[IconName as keyof typeof Icons];
                  return (
                  <li key={text} className="flex items-center gap-4">
                    <div className={cn(
                        "text-primary-foreground p-3 rounded-full flex-shrink-0",
                        type === 'cv' ? 'bg-[#2a579a]' : 'bg-primary'
                      )}>
                       <Icon className="h-5 w-5" />
                    </div>
                    {type === 'cv' ? (
                      <a href={href} download className="text-base md:text-lg hover:underline break-words">{text}</a>
                    ) : type === 'email' || type === 'phone' ? (
                       <Link 
                         href={href} 
                         className="text-base md:text-lg hover:underline break-words"
                         onContextMenu={(e) => handleCopy(e, text, type as 'email' | 'phone')}
                       >
                         {text}
                       </Link>
                    ) : (
                      <Link href={href} className="text-base md:text-lg hover:underline break-words" target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined}>
                          {text}
                      </Link>
                    )}
                  </li>
                )})}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
