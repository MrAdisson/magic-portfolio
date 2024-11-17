import { Projects } from '@/components/work/Projects';
import { Arrow, Avatar, Button, Flex, Heading, RevealFx, Text } from '@/once-ui/components';

import { baseURL, renderContent, routes } from '@/app/resources';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { useTranslations } from 'next-intl';

import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations();
  const { home } = renderContent(t);
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://${baseURL}/${locale}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const { home, about, person, newsletter } = renderContent(t);
  return (
    <Flex maxWidth='m' fillWidth gap='xl' direction='column' alignItems='center'>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              '@type': 'Person',
              name: person.name,
              image: {
                '@type': 'ImageObject',
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Flex fillWidth direction='column' paddingY='l' gap='m'>
        <Flex direction='column' fillWidth maxWidth='s' gap='m'>
          <RevealFx translateY='4'>
            <Heading wrap='balance' variant='display-strong-l'>
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY='8' delay={0.2}>
            <Flex fillWidth>
              <Text wrap='balance' onBackground='neutral-weak' variant='heading-default-xl'>
                {home.subline}
              </Text>
            </Flex>
          </RevealFx>
          <RevealFx translateY='12' delay={0.4}>
            <Flex fillWidth>
              <Button id='about' data-border='rounded' href={`/${locale}/about`} variant='tertiary' size='m'>
                <Flex gap='8' alignItems='center'>
                  {about.avatar.display && (
                    <Avatar style={{ marginLeft: '-0.75rem', marginRight: '0.25rem' }} src={person.avatar} size='m' />
                  )}
                  {t('about.title')}
                  <Arrow trigger='#about' />
                </Flex>
              </Button>
            </Flex>
            {/* <Flex fillWidth>
              {about.calendar.display && (
                <Flex
                  className={styles.blockAlign}
                  style={{
                    backdropFilter: 'blur(var(--static-space-1))',
                    border: '1px solid var(--brand-alpha-medium)',
                    width: 'fit-content',
                  }}
                  alpha='brand-weak'
                  radius='full'
                  fillWidth
                  padding='4'
                  gap='8'
                  marginBottom='m'
                  marginTop='m'
                  alignItems='center'
                >
                  <Flex paddingLeft='12'>
                    <Icon name='calendar' onBackground='brand-weak' />
                  </Flex>
                  <Flex paddingX='8'>{about.calendar.scheduleCall}</Flex>
                  <IconButton href={about.calendar.link} data-border='rounded' variant='tertiary' icon='chevronRight' />
                </Flex>
              )}
            </Flex> */}
          </RevealFx>
        </Flex>
      </Flex>
      <RevealFx translateY='16' delay={0.6}>
        <Projects range={[1, 1]} locale={locale} />
      </RevealFx>
      {routes['/blog'] && (
        <Flex fillWidth gap='24' mobileDirection='column'>
          <Flex flex={1} paddingLeft='l'>
            <Heading as='h2' variant='display-strong-xs' wrap='balance'>
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX='20'>
            <Posts range={[1, 2]} columns='2' locale={locale} />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} locale={locale} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Flex>
  );
}
