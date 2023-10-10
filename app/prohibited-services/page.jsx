"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  Table,
  Td,
  Text,
  Th,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col overflow-hidden items-center justify-between min-h-screen">
      <Flex
        flexDirection="column"
        align="center"
        className="my-0 py-[4vh] px-[5vw] mx-auto w-screen bg-white lg:w-3/4 lg:container"
      >
        <Box>
          <Heading className="text-3xl font-medium mt-4 mb-2">
            Prohibited Services
          </Heading>
          <Text>
            {`At Workpido, we are committed to offer top-quality services within a
        professional, decent, and respectful environment. The safety of our
        users, their well-being, and mental health are our utmost priority.
        That's why we created these policies; to ensure that buyers and sellers
        alike feel free to express their creativity and vision without causing
        discomfort or harming others.`}
          </Text>
          <Text>Please find a list of guidelines below.</Text>
          <Text className="text-2xl font-medium mt-5 mb-2">
            Sale of illegal or regulated goods
          </Text>
          <Text>
            Workpido prohibits services that aim directly to sell, link to, or
            facilitate access to any of the regulated goods and illegal services
            listed below.
          </Text>
          <UnorderedList>
            <ListItem>Alcohol</ListItem>
            <ListItem>
              {`Nicotine and tobacco products (including those intended for
          consumption by heating or evaporation), smoking accessories (including
          e-cigarettes, electronic nicotine delivery systems, devices for
          heating tobacco or nicotine-containing liquids, vapes and consumables
          for vapes, pipes, hookahs, cigarette paper) and any smoking mixture`}
            </ListItem>
            <ListItem>
              Controlled narcotics and psychotropic substances, their
              derivatives, and any products associated with them
            </ListItem>
            <ListItem>Pharmaceuticals</ListItem>
            <ListItem>Organs</ListItem>
            <ListItem>Human or Wildlife trafficking</ListItem>
            <ListItem>Sex, escort or adult services</ListItem>
            <ListItem>
              {`Explosives, weapons (including hunting, pneumatic, civilian, airsoft,
          paintball, souvenir and decorative weapons), any accessories for those
          weapons, or knives`}
            </ListItem>
          </UnorderedList>
          <Text className="text-2xl font-medium mt-5 mb-2">
            Nudity and sexual content
          </Text>
          <Text>
            Workpido prohibits services that offer nudity, and sexual content
            explicitly meant to be sexually gratifying. Please read our examples
            for other types of content that violate this policy.
          </Text>
          <UnorderedList>
            <ListItem>Masturbation in all its forms</ListItem>
            <ListItem>Pornography</ListItem>
            <ListItem>Sexual acts</ListItem>
            <ListItem>Graphic or humiliating fetish content</ListItem>
            <ListItem>Use of sex toys for sexual gratification</ListItem>
            <ListItem>Incest</ListItem>
            <ListItem>Non-consensual acts or unwanted sexualization</ListItem>
            <ListItem>
              Depiction of genitals and other body parts for the purpose of
              sexual gratification
            </ListItem>
            <ListItem>Any sexual act involving minors</ListItem>
          </UnorderedList>
          <Text className="text-2xl font-medium mt-5 mb-2">
            Suicide and self-injury
          </Text>
          <Text>
            Workpido prohibits services and content that promote suicide,
            self-harm, or is intented to disturb, or upset our users. Please
            read our examples for other types of content that violate this
            policy.
          </Text>
          <UnorderedList>
            <ListItem>Promoting or exalting suicide</ListItem>
            <ListItem>
              Providing instructions on how to self-harm or die by suicide
            </ListItem>
            <ListItem>Posting images and videos of self-harm</ListItem>
          </UnorderedList>
          <Text className="text-2xl font-medium mt-5 mb-2">
            Inappropriate language and hate speech
          </Text>
          <Text>
            Workpido prohibits services and language that violate moral and
            ethical standards. Hate speech is not allowed. Please read our
            examples for more information on content that violate this policy.
          </Text>
          <UnorderedList>
            <ListItem>Use of abusive or offensive language</ListItem>
            <ListItem>Use of excessive profanity</ListItem>
            <ListItem>Swearing and insulting</ListItem>
          </UnorderedList>
          <Text>
            Moreover, all content containing language that promotes violence or
            hatred against individuals or groups based on the following
            attributes is strictly forbidden:
          </Text>
          <UnorderedList>
            <ListItem>Age</ListItem>
            <ListItem>Caste</ListItem>
            <ListItem>Disablity</ListItem>
            <ListItem>Ethnicity</ListItem>
            <ListItem>
              Gender and gender identity and expression. Sexual orientation
            </ListItem>
            <ListItem>Nationality</ListItem>
            <ListItem>Race</ListItem>
            <ListItem>Religion</ListItem>
          </UnorderedList>
          <Text className="text-2xl font-medium mt-5 mb-2">
            Harmful or dangerous content
          </Text>
          <Text>
            Workpido prohibits services and content that encourages dangerous or
            illegal activities that may have physical or deadly consequences.
            Please read our examples for more information on content that
            violate this policy.
          </Text>
          <UnorderedList>
            <ListItem>Extremely dangerous challenges</ListItem>
            <ListItem>Violent events or instructions to kill or harm</ListItem>
            <ListItem>Drug use</ListItem>
            <ListItem>Instructions to commit crimes</ListItem>
            <ListItem>Instructions on hacking techniques</ListItem>
            <ListItem>
              Instructions on the bypassing of payment for digital services
            </ListItem>
          </UnorderedList>
          <Text className="text-2xl font-medium mt-5 mb-2">
            Violent and graphic content
          </Text>
          <Text>
            Workpido prohibits services and content intended to shock or disgust
            users. All services that offer to commit acts of violence are not
            allowed. Please read our examples for more information on content
            that violate this policy.
          </Text>
          <UnorderedList>
            <ListItem>Inciting others to commit violent acts</ListItem>
            <ListItem>
              Targeting specific individuals or groups with violence
            </ListItem>
            <ListItem>
              Provide footage, audio or imagery involving:
              <UnorderedList>
                <ListItem>Hello</ListItem>
                <ListItem>Terrorist attacks</ListItem>
                <ListItem>Physical attacks</ListItem>
                <ListItem>Sexual assaults</ListItem>
                <ListItem>Torture</ListItem>
                <ListItem>Corpses</ListItem>
                <ListItem>Crimes, violent or not</ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
          <Text className="text-2xl font-medium mt-5 mb-2">
            Cyberbullying and harassment
          </Text>
          <Text>
            Workpido prohibits services and content intended to threaten or
            target individuals with malice. All services that are meant to
            offend individuals based on their attributes or physical traits are
            not allowed. Please read our examples for more information on
            content that violate this policy.
          </Text>
          <UnorderedList>
            <ListItem>
              Services that target, insult and abuse individuals
            </ListItem>
            <ListItem>
              Create content that offends an individual based on their intrinsic
              attributes
            </ListItem>
            <ListItem>Use extreme insults to dehumanize an individual</ListItem>
            <ListItem>
              Offer content depicting an individual being injured, murdered, or
              engaged in a sexual act without their consent
            </ListItem>
            <ListItem>{`Post an individual's nonpublic personal information`}</ListItem>
            <ListItem>Offer prank calls services</ListItem>
            <ListItem>Create video games promoting violence or hatred</ListItem>
          </UnorderedList>
          <Text className="text-2xl font-medium mt-5 mb-2">
            Financial services
          </Text>
          <Text>
            Workpido prohibits services that aim directly to sell, link to, or
            facilitate access to any of the regulated services listed below.
          </Text>
          <UnorderedList>
            <ListItem>
              Stock trading, securities operations, cryptocurrencies and/or
              foreign exchange markets
            </ListItem>
            <ListItem>
              {`Binary options, forex-related operations (including equipment,
              consulting and training)`}
            </ListItem>
            <ListItem>
              {`Securities and cryptocurrencies (including their sales and/or any
              related consulting or training services)`}
            </ListItem>
            <ListItem>
              Financial and/or commodity pyramids, suspicious means of
              generating income or goods, as well as any and all related
              training
            </ListItem>
            <ListItem>
              Bank account passwords, stolen credit cards, or other financial
              information
            </ListItem>
            <ListItem>
              Gambling, sports betting, lotteries, risk-based games including
              any equipment related to their implementation
            </ListItem>
          </UnorderedList>
          <Text className="text-2xl font-medium mt-5 mb-2">
            Medical and health-related services
          </Text>
          <Text>
            Workpido prohibits services and content or illegal activities that
            may have physical or deadly consequences. Such services should be
            performed by trained personnel only. Please read our examples for
            more information on content that violate this policy.
          </Text>
          <UnorderedList>
            <ListItem>
              Sale of pharmaceuticals with or without a prescription
            </ListItem>
            <ListItem>
              Psychotherapeutic and medical care, including folk remedies
            </ListItem>
            <ListItem>
              Treatment, interpretation of analyses and/or the preparation of
              prescriptions
            </ListItem>
            <ListItem>
              Prescription of drugs and/or dietary supplements
            </ListItem>
            <ListItem>Medical consultations</ListItem>
            <ListItem>
              Design and/or sale of nutritional or workout plans for medical
              purposes
            </ListItem>
            <ListItem>
              Sale, advertising and/or description of the use of medicines and
              dietary supplements, raw medical materials and/or devices for
              treatment
            </ListItem>
            <ListItem>Psychological consultations</ListItem>
          </UnorderedList>
          <Text className="text-2xl font-medium mt-5 mb-2">
            Academic services
          </Text>
          <Text>
            Workpido prohibits services that aim directly to sell or facilitate
            access to any of the regulated goods and services listed below.
          </Text>
          <UnorderedList>
            <ListItem>
              Compilation of academic material such as term papers, abstracts,
              dissertations, theses, and any other works provided for by the
              state system of scientific certification
            </ListItem>
            <ListItem>Test-taking for third parties</ListItem>
          </UnorderedList>
          <Text className="text-2xl font-medium mt-5 mb-2">
            Deceptive practices and scam services
          </Text>
          <Text>
            Workpido prohibits services and content that encourages illegal
            activities that take advantage of others. Please read our examples
            for more information on content that violate this policy.
          </Text>
          <UnorderedList>
            <ListItem>
              Fraud, spam including incentivisation, video, and comments spam
            </ListItem>
            <ListItem>Unauthorized advertising</ListItem>
            <ListItem>Unfair competition</ListItem>
            <ListItem>
              Placement, posting and/or deletion of paid reviews and rated
              comments
            </ListItem>
            <ListItem>
              {`Social media indicators, such as likes, subscribers, views, votes
              in polls and others, obtained via black hat techniques and any
              means that can harm a buyer's community and/or account. This
              includes the sale and development of software for these purposes.
              Organic account promotion is an exception to this rule`}
            </ListItem>
          </UnorderedList>
          <Text className="text-2xl font-medium mt-5 mb-2">
            Intellectual property and copyright infringement services
          </Text>
          <Text>
            Workpido prohibits services and content that encourages illegal
            activities that take advantage of others or may otherwise harm them.
            Please read our examples for more information on content that
            violate this policy.
          </Text>
          <UnorderedList>
            <ListItem>
              Services that infringe upon the intellectual property rights
              and/or copyrights of others
            </ListItem>
            <ListItem>Illegal use of trademarks</ListItem>
            <ListItem>
              Services that violate the terms of use and distribution of
              content. For example, data from such services as Behance, Viber,
              Elementor, Yellow Images
            </ListItem>
            <ListItem>
              Services designated for the collection and transmission of
              information that is prohibited from distribution, including
              personal data
            </ListItem>
            <ListItem>
              Creation and distribution of encryption devices, programs and/or
              any technical means intended for the secret or unlawful attainment
              of information, as well as related documents
            </ListItem>
            <ListItem>
              Posting materials that threaten or discredit other users
            </ListItem>
          </UnorderedList>
          <Text className="text-2xl font-medium mt-5 mb-2">
            Non-digital services, services of no value
          </Text>
          <Text>
            Workpido prohibits services that cannot be provided online. This
            includes all and any type of service for which the final product
            cannot be transmitted electronically through communication channels.
            It is also prohibited to offer services that bring no value to
            buyers. Please read our examples for more information on content
            that violate this policy.
          </Text>
          <UnorderedList>
            <ListItem>
              Astrology and magic, including witchcraft, numerology
            </ListItem>
            <ListItem>
              Fortune-telling, any types of rituals, divination services and/or
              predictions
            </ListItem>
            <ListItem>Search or advertisement of work in this sector</ListItem>
            <ListItem>
              Services providing access to other free services
            </ListItem>
            <ListItem>
              Sale of free and open-source software, coupons and/or promotional
              codes
            </ListItem>
            <ListItem>Debt collection</ListItem>
          </UnorderedList>
          <Text className="text-2xl font-medium mt-5 mb-2">Keep in mind</Text>
          <Text>
            {`These are just some examples, Workpido may at its sole discretion
            remove content for violations not included in the current list. If
            your content violates this policy, we'll immediately remove such
            content and inform you of our decision. This is intended to be a
            first warning; if you perpetrate this kind of behavior, we reserve
            the right to suspend or cancel your account.`}
          </Text>
          <Text className="text-2xl font-medium mt-5 mb-2">
            Report violation of Terms of Service or Guidelines
          </Text>
          <Text>
            At Workpido, we constantly monitor the services offered, and our
            Team Members are on the lookout for any suspicious activity.
          </Text>
          <Text>
            {`However, given the high amount of new Workpido's offered on a daily
            basis, we might miss something. That's why we rely on all our users
            to report or flag content and services that they find inappropriate.`}
          </Text>
          <Text>
            {`It is Workpido's responsibility to review the service being reported
            and take all the necessary measures to remove it if it violates
            Workpido's Terms of Service or Guidelines.`}
          </Text>
          <Text>
            You can always Contact Us for questions or to report inappropriate
            behavior.
          </Text>
        </Box>
      </Flex>
    </main>
  );
};

export default page;
