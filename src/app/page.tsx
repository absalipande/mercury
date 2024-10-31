import { Heading } from './components/heading';
import { Check, Star } from 'lucide-react';
import { MaxWidthWrapper } from './components/max-width-wrapper';
import { Button } from './components/button';

const Page = () => {
  return (
    <>
      <section className='relative py-24 sm:py-32 bg-brand-25'>
        <MaxWidthWrapper className='text-center'>
          <div className='relative mx-auto text-center flex flex-col items-center gap-10'>
            <div>
              <Heading>
                <span>Real-Time SaaS Insights,</span>
                <br />
                <span className='relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text'>Delivered to Your Discord</span>
              </Heading>
            </div>

            <p className='text-base/7 text-gray-600 max-w-prose text-center text-pretty'>
              Mercury makes monitoring your SaaS effortless. Receive real-time alerts for <span className='font-semibold text-gray-700'>sales, new users, or any other event</span> directly in your
              Discord.
            </p>

            <ul className='space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start'>
              {['Instant alerts on Discord for key events', 'One-time purchase, lifetime access', 'Track sales, new users, and custom events in real time'].map((item, index) => (
                <li key={index} className='flex gap-1.5 items-center text-left'>
                  <Check className='size-5 shrink-0 text-brand-700' />
                  {item}
                </li>
              ))}
            </ul>

            <div className='w-full max-w-80'>
              <Button href='/sign-up' className='relative z-10 h-14 text-base shadow-lg transition-shadow duration-300 hover:shadow-xl'>
                Sign Up Free and Get Started
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  );
};

export default Page;
