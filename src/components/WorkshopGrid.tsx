import SectionHeader from './SectionHeader';
import AnimateOnScroll from './AnimateOnScroll';
import WorkshopCard from './WorkshopCard';
import { getTalleres } from '@/lib/cms';
import type { Workshop } from '@/lib/constants';

interface Props {
  workshops?: Workshop[];
}

export default async function WorkshopGrid({ workshops: workshopsProp }: Props = {}) {
  const workshops = workshopsProp ?? (await getTalleres());

  return (
    <section id="talleres" className="section-padding bg-white">
      <div className="max-w-container mx-auto">
        <AnimateOnScroll>
          <SectionHeader label="Próximos talleres" title="Talleres abiertos" centered />
        </AnimateOnScroll>

        {workshops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {workshops.map((workshop, index) => (
              <AnimateOnScroll key={workshop.id} delay={index * 0.15} className="h-full">
                <WorkshopCard {...workshop} />
              </AnimateOnScroll>
            ))}
          </div>
        ) : (
          <AnimateOnScroll>
            <div className="text-center py-lg">
              <p className="text-text-muted font-body text-base">
                Nuevos talleres próximamente — déjanos tu email para enterarte primero.
              </p>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
