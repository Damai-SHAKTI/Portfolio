import Head from 'next/head'
import Image from 'next/image'
import { Avatar, Button, Badge, Text } from '@nextui-org/react'
import { TypeAnimation } from 'react-type-animation'


export default function Home() {
  return (
    <>
      <Head>
        <title>Henry david</title>
        <meta name="description" content="Henry david" />
        <meta name="author" content="Henry david" />
        <meta name="keywords" content="Henry david" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='max-w-screen max-h-screen'>
        <div className='w-full h-screen p-10 gap-0 md:gap-8 flex flex-wrap items-center justify-center'>
          <Image width={400} height={400} src="/home-banner.png" alt="Henry david" />
          <div className='min-w-[350px]'>
            <Badge color="secondary" size="lg">Hello there!</Badge>
            <div className='flex gap-x-2 items-center'>
              <h3 className='m-0'>I'm</h3>
              <Text
                h3
                size={24}
                css={{
                  margin: "0px",
                  textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
                weight="bold"
              >
                Henry david
              </Text>
            </div>

            <TypeAnimation
              sequence={[
                'I Am Passionate Web Developer',
                2000,
                'I Am Passionate UI/UX Designer',
                2000,
                'I Am Passionate Digital Marketer',
                2000,
                'I Am Passionate Freelancer',
                2000,
                () => {
                  console.log('Done typing!');
                }
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontWeight: "700", fontSize: "20px" }}
            />

            <div className='py-5 flex gap-2 items-center'>
              <a href="https://www.facebook.com/" target="_blank">
                <Avatar
                  size="md"
                  src="/social-media/facebook.png"
                  color="secondary"
                  bordered
                  pointer
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <Avatar
                  size="md"
                  src="/social-media/instagram.png"
                  color="secondary"
                  bordered
                  pointer
                />
              </a>
              <a href="https://twitter.com/home?lang=en" target="_blank">
                <Avatar
                  size="md"
                  src="/social-media/twitter.png"
                  color="secondary"
                  bordered
                  pointer
                />
              </a>
              <a href="https://linkedin.com/" target="_blank">
                <Avatar
                  size="md"
                  src="/social-media/linkedin.png"
                  color="secondary"
                  bordered
                  pointer
                />
              </a>
              <a href="https://youtube.com/" target="_blank">
                <Avatar
                  size="md"
                  src="/social-media/youtube.png"
                  color="secondary"
                  bordered
                  pointer
                />
              </a>
            </div>

            <div className='flex gap-2'>
              <Button rounded bordered color="gradient" auto ghost>
                <a href="mailto:henrydavid@gmail.com" download className="text-white">
                  Contact Me
                </a>
              </Button>

              <Button rounded bordered color="gradient" auto ghost>
                <a href="https://www.africau.edu/images/default/sample.pdf" download target="_blank" className="text-white">
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
