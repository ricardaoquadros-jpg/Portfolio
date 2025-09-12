"use client";

import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const contactInfo = [
  { type: "email", Icon: Icons.contact, text: "ricpiquadros@gmail.com", href: "mailto:ricpiquadros@gmail.com" },
  { type: "phone", Icon: Icons.phone, text: "(51) 99524-1338", href: "tel:+5551995241338" },
  { type: "location", Icon: Icons.location, text: "Guaíba – RS, Brasil", href: "https://pt.wikipedia.org/wiki/Gua%C3%ADba" },
  { type: "cv", Icon: Icons.download, text: "Baixar Currículo", href: "/Ricardo-Quadros-CV.docx" },
];

export function Contact() {
  const { toast } = useToast();

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>, textToCopy: string, type: 'email' | 'phone') => {
    e.preventDefault();
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: "Copiado!",
      description: `O ${type === 'email' ? 'endereço de e-mail' : 'número de telefone'} foi copiado para a área de transferência.`,
    });
  };

  return (
    <Section id="contact" className="bg-card">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-foreground/80 max-w-md">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
          </p>
          <div className="flex gap-4 pt-4">
            <Button asChild variant="ghost" size="icon" className="hover:bg-primary/20">
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
                {contactInfo.map(({ type, Icon, text, href }) => (
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
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
