"use client";

import ZoomableImage from "@/components/ZoomableImage";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import React from "react";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      {/* Banner */}
      <Flex
        className="relative"
        bgImage="url(https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)"
        h={{ base: "60vh", md: "90vh" }}
        w={"full"}
        justify="center"
      >
        <Flex
          flexDirection="column"
          align="center"
          justify="center"
          className="text-white"
        >
          <Heading className="mb-2 md:text-5xl md:mb-4">
            Do Work You Enjoy
          </Heading>
          <Text className="mb-4 text-white md:text-xl md:mb-6">
            Thousands of buyers are ready to pay for your skills
          </Text>
          <Button
            className="mt-4 w-full md:w-1/2 px-4 py-6 text-sm"
            as={"a"}
            display={"inline-flex"}
            color={"white"}
            bg={"brand.primary"}
            href={"#"}
            _hover={{
              bg: "green.300",
            }}
          >
            Start Earning
          </Button>
        </Flex>
        <Flex
          background={"rgba(255, 255, 255, 0.19)"}
          position={"absolute"}
          bottom={"0px"}
          left={"0px"}
          className="hidden md:flex mb-0 p-5 w-full"
        >
          <Box className="text-center w-1/2">
            <Text className="text-white mb-4 text-lg">A work is purchased</Text>
            <Text className="text-white mb-4 text-3xl">every 60 seconds</Text>
          </Box>
          <Box className="text-center w-1/2">
            <Text className="text-white mb-4 text-lg">average earnings</Text>
            <Text className="text-white mb-4 text-3xl">$520 a month</Text>
          </Box>
        </Flex>
      </Flex>
      {/* Freelance Gallery */}
      <Flex justify="center" flexWrap="wrap" className="bg-white p-6">
        <h2 className="text-center text-3xl font-bold mb-3 w-full py-3">
          Join Our Evergrowing Freelance Community
        </h2>
        <ZoomableImage
          src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="services"
          caption="I'm a Link Builder"
        />
        <ZoomableImage
          src="https://images.pexels.com/photos/2240772/pexels-photo-2240772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="services"
          caption="I'm a Voice Actor"
        />
        <ZoomableImage
          src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="services"
          caption="I'm a Web Developer"
        />
        <ZoomableImage
          src="https://images.pexels.com/photos/2345293/pexels-photo-2345293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="services"
          caption="I'm a Dance Instructor"
        />
        <ZoomableImage
          src="https://images.pexels.com/photos/3119215/pexels-photo-3119215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="services"
          caption="I'm a Designer"
        />
        <ZoomableImage
          src="https://images.pexels.com/photos/2531552/pexels-photo-2531552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="services"
          caption="I'm a Video Editor"
        />
        <ZoomableImage
          src="https://images.pexels.com/photos/2748242/pexels-photo-2748242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="services"
          caption="I'm a Actor"
        />
        <Flex
          direction="column"
          align="center"
          justify="center"
          borderRadius="sm"
          overflow="hidden"
          objectFit="contain"
          position="relative"
          width="280px"
          height="280px"
          className="m-1 bg-neutral-100"
        >
          <Image
            width="80px"
            height="80px"
            src="https://cdn.kwork.com/images/for-sellers/heart.svg"
            alt=""
          />
          <h3 className="m-2 text-center text-2xl">{"What's Your Skill?"}</h3>
          <Button
            as={"a"}
            display={"inline-flex"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"brand.primary"}
            href={"#"}
            _hover={{
              bg: "green.300",
            }}
          >
            Start Earning
          </Button>
        </Flex>
      </Flex>
      {/* How to Sell? */}
      <Flex align="center" justify="space-around" flexWrap="wrap">
        <div className="w-full m-3 p-2">
          <h4 className="text-center text-2xl">
            How to sell your services in the Catalog
          </h4>
          <p className="text-center mb-3 py-3">
            List your services for free and start earning today
          </p>
        </div>
        <Flex
          justify="center"
          align="center"
          direction="column"
          className="w-1/3 p-4"
        >
          <Image
            src="https://cdn.kwork.com/images/for-sellers/kwork-step-1.svg"
            alt=""
          />
          <h6 className="text-center mb-1">1. Create a Work</h6>
          <p className="text-center text-xs">
            Get started by signing up and listing your services in under 5
            minutes.
          </p>
        </Flex>
        <Flex
          justify="center"
          align="center"
          direction="column"
          className="w-1/3 p-4"
        >
          <Image
            src="https://cdn.kwork.com/images/for-sellers/kwork-step-2.svg"
            alt=""
          />
          <h6 className="text-center mb-1">2. Receive your first order</h6>
          <p className="text-center text-xs">
            Get instantly notified when a buyer orders your work.
          </p>
        </Flex>
        <Flex
          justify="center"
          align="center"
          direction="column"
          className="w-1/3 p-4"
        >
          <Image
            src="https://cdn.kwork.com/images/for-sellers/kwork-step-3-en.svg"
            alt=""
          />
          <h6 className="text-center mb-1">3. Deliver and get paid</h6>
          <p className="text-center text-xs">
            Complete and deliver the order before the deadline. We guarantee
            timely payments for every successful order.
          </p>
        </Flex>
      </Flex>
      {/* Course Store */}
      <Flex
        align="center"
        justify="space-between"
        className="p-4 pb-0 md:mx-5 md:mt-5"
      >
        <Box>
          <p className="text-sm font-bold mt-3">
            A free get-started course for freelancers
          </p>
          <p className="text-2xl font-semibold mt-3">
            Reach Your Full Earning Potential on Workpido
          </p>
          <p className="text-l font-light mt-4">
            {`Learn how to become a top seller on Workpido. We'll cover how to
            create top-selling works, custom offers that buyers can't resist,
            and so much more.`}
          </p>
          <Button
            className="mt-4 w-full md:w-2/5 p-3"
            as={"a"}
            display={"inline-flex"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"brand.primary"}
            href={"/how-to-earn"}
            _hover={{
              bg: "green.300",
            }}
          >
            Start the Course Today
          </Button>
        </Box>
        <Image
          src="https://images.pexels.com/photos/9489771/pexels-photo-9489771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          clipPath={"polygon(40% 0, 100% 0%, 100% 100%, 0% 100%)"}
          className="hidden md:inline md:w-2/5 h-96"
        />
      </Flex>
      {/* Buyer Testimonials */}
      <Flex
        justify="space-evenly"
        flexWrap="wrap"
        className="bg-white pt-4 pb-3 md:m-3"
      >
        <h4 className="text-center w-full font-bold text-2xl pt-5 pb-2 mb-5">
          Buyer Testimonials
        </h4>
        <Flex
          justify="space-evenly"
          align="center"
          className="bg-stone-100 md:w-1/2"
        >
          <Image
            src="https://cdn.kwork.com/images/for-sellers/olesya-pad@2x.jpg"
            alt=""
            clipPath={"polygon(0% 0%, 100% 0, 68% 50%, 100% 100%, 0% 100%)"}
            className="w-80 h-72"
          />
          <Box className="p-4 pr-10">
            <p className="font-light text-sm italic">
              {`“On Kwork, I got a book ready for publication in three
              days—something no agency could ever do. From now on, I'll only be
              turning to Kwork for all the services I need.”`}
            </p>
            <p className="bold">Alexandra, Publisher</p>
          </Box>
        </Flex>
        <Flex
          justify="space-evenly"
          align="center"
          className=" bg-stone-100 md:w-1/2"
        >
          <Image
            src="https://cdn.kwork.com/images/for-sellers/ivan-pad@2x.jpg"
            alt=""
            clipPath={"polygon(0% 0%, 100% 0, 68% 50%, 100% 100%, 0% 100%)"}
            className="w-80 h-72"
          />
          <Box className="p-4 pr-10">
            <p className="font-light text-sm italic">
              {`“In my line of work, speed is everything. Workpido's clearly
              defined deadlines give me the peace of mind I need to complete
              projects on time.”`}
            </p>
            <p className="bold">John, Director of IT at Mintrocket</p>
          </Box>
        </Flex>
        <Flex
          justify="space-evenly"
          align="center"
          className=" bg-stone-100 md:w-1/2"
        >
          <Box className="p-4 pl-10">
            <p className="font-light text-sm italic">
              {`“We often need a little extra help at the agency sometimes, and
              when we do, I know I can rely on Kwork. Taking on big projects is
              no longer a headache when Workpido's skilled freelancers have my
              back.”`}
            </p>
            <p className="bold">{"Alex, CEO of SMM Agency Fol'ga"}</p>
          </Box>
          <Image
            src="https://cdn.kwork.com/images/for-sellers/dmitri-pad@2x.jpg"
            alt=""
            clipPath={"polygon(0 0, 100% 0%, 100% 100%, 0 100%, 32% 50%)"}
            className="w-80 h-72"
          />
        </Flex>
        <Flex
          justify="space-evenly"
          align="center"
          className=" bg-stone-100 md:w-1/2"
        >
          <Box className="p-4 pl-10">
            <p className="font-light text-sm italic">
              “Thanks to Kwork, I quickly launched a new website, set up ads,
              and received my first order within a week.”
            </p>
            <p className="bold">Mary, Career Consultant</p>
          </Box>
          <Image
            src="https://cdn.kwork.com/images/for-sellers/maria-pad@2x.jpg"
            alt=""
            clipPath={"polygon(0 0, 100% 0%, 100% 100%, 0 100%, 32% 50%)"}
            className="w-80 h-72"
          />
        </Flex>
      </Flex>
      {/*FAQs*/}
      <Box className="w-full">
        <h4 className="text-center font-bold text-2xl p-4">FAQ</h4>
        <Accordion allowToggle className="md:grid md:grid-cols-2 md:gap-1">
          <AccordionItem className=" bg-white md:m-2 p-3">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How do I start earning on Workpido?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Create an account on Kwork. Follow the Four Simple Steps to Kwork
              Success on your seller dashboard, and we guarantee that the
              earnings will start rolling in!
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="md:m-2 bg-white p-3">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Do I have to pay anytthing to use Workpido?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Good news: on Kwork, there are no paid accounts or subscriptions;
              we only charge a percentage fee for completed orders. When you
              offer a service, take the fee into account to always get paid what
              you want. Easy, no?
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="md:m-2 bg-white p-3 ">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How much time do I need to dedicate?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Many sellers work full-time on Kwork, which is their primary
              revenue stream. Others dedicate a few hours a week to Kwork as a
              side gig. On Kwork, you have complete freedom to decide when and
              how many hours you want to work. Are you a night owl or an early
              bird? Want to work 50 hours or 5? You decide according to your
              lifestyle, goals, and personal circumstances.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="md:m-2 bg-white p-3 ">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How much can I earn?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Your earnings will depend on various factors, including your
              skills, specialization, speed, and rating. Active sellers on
              workpido earn an average of $520 a month, and top sellers earn up
              to several thousand dollars!
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="md:m-2 bg-white p-3">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  How do I get paid for my work?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Kwork protects and guarantees payment for sellers. We do this by
              asking buyers to pay immediately when they purchase your services.
              While you work on an order, Kwork holds onto those funds and
              disburses them to you immediately once the buyer reviews and
              approves your delivery. Then you can decide to leave them there or
              transfer them to your credit/debit card.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      {/* Getting Started Section */}
      <Flex
        flexDirection="column"
        align="center"
        justify="center"
        className="py-10 px-3 w-full bg-white mt-3"
      >
        <h4 className="text-2xl mt-5 text-center font-bold">
          Start Your Freelance Journey on Workpido Today
        </h4>
        <Button
          className="my-5 w-1/3 px-2 py-5 text-sm"
          as={"a"}
          display={"inline-flex"}
          color={"white"}
          bg={"brand.primary"}
          href={"#"}
          _hover={{
            bg: "green.300",
          }}
        >
          Join for Free
        </Button>
      </Flex>
    </main>
  );
};

export default page;
