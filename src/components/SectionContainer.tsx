
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const SectionContainer = ({ id, className, children }: SectionContainerProps) => {
  return (
    <section id={id} className={cn("py-12 md:py-16", className)}>
      <div className="container px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
