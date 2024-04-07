import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  title: string;
  isWIP?: boolean;
  children: React.ReactNode;
}

interface TestimonialCardProps {
  author: string;
  children: React.ReactNode;
}

const WIP = () => (
  <span className="text-xs font-semibold text-gray-400 px-2.5 py-1 rounded-lg bg-gray-200 ml-3">
    WIP
  </span>
);

const TestimonialCard = ({ author, children }: TestimonialCardProps) => {
  return (
    <div className="px-4 py-2 bg-card rounded-lg max-w-lg ">
      <blockquote className="mt-6 border-l-2 broder-border pl-6 italic">
        {children}
      </blockquote>
      <p className="leading-7 [&:not(:first-child)]:mt-1">— {author}</p>
    </div>
  );
};

const FeatureCard = ({ title, isWIP = false, children }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-md bg-card flex flex-col">
      <div>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {title}
          {isWIP && <WIP />}
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-2">{children}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl flex flex-col items-center mx-auto">
      <section className="h-full py-32 flex flex-col items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl max-w-4xl text-center">
          Discover and Listen to Podcasts{" "}
          <span className="text-accent">Anywhere</span>
        </h1>
        <h2 className="max-w-2xl text-center mt-5 text-gray-600 scroll-m-20 text-2xl tracking-tight first:mt-0">
          Our web app brings millions of podcasts to your browser, with powerful
          search and a seamless listening experience.
        </h2>
        <Button className="mt-10 hover:bg-accent">Start Listening Now</Button>
      </section>
      <h3 className="mt-14 pb-5 scroll-m-20 text-3xl font-bold tracking-tight mr-auto">
        Features
      </h3>
      <section className="grid grid-cols-2 gap-8">
        <FeatureCard title="Podcast search and discovery" isWIP>
          Find the perfect podcast instantly with powerful search across
          directories, advanced filtering options, and detailed episode
          information.
        </FeatureCard>
        <FeatureCard title="Podcast player" isWIP>
          Find the perfect podcast instantly with powerful search across
          directories, advanced filtering options, and detailed episode
          information.
        </FeatureCard>
        <FeatureCard title="User Accounts and Personalization" isWIP>
          Discover tailored recommendations, follow friends, share your
          favorites, and leave reviews – all with your personalized account.
        </FeatureCard>
        <FeatureCard title="Cross-Platform Compatibility" isWIP>
          Listen on any device with our browser-based player and native-like
          experience on mobile devices.
        </FeatureCard>
      </section>
      <h3 className="mt-24 mb-3 scroll-m-20 text-3xl font-bold tracking-tight mr-auto">
        Testimonials
      </h3>
      <section className="grid grid-cols-2 gap-4 w-full">
        <TestimonialCard author="John Doe">
          This app changed how I listen to podcasts! It's easy to use, has great
          search, and the customizable controls are perfect. Highly recommended!
        </TestimonialCard>
        <TestimonialCard author="Jane Doe">
          This app is perfect for my commute! I love switching devices without
          losing my place. The recommendations are amazing, and the transcripts
          make podcasts so much more accessible. It's really elevated my
          listening.
        </TestimonialCard>
      </section>
      <Button className="mt-24 mb-10 hover:bg-accent">
        Start Listening Now
      </Button>
    </main>
  );
}
