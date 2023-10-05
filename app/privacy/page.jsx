"use client";

import {
  Box,
  Flex,
  Heading,
  ListItem,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col overflow-hidden items-center justify-between min-h-screen">
      <Flex
        flexDirection="column"
        align="center"
        className="my-0 py-[4vh] px-[5vw] mx-auto w-screen bg-white lg:w-3/4 lg:container"
      >
        <Heading className="text-center my-5">Privacy Policy</Heading>
        <Text>
          {`The terms “us”, “we”, “our” refer to Workpido.com and its managing
          companies: Paperjet Technologies Ltd.(Pythagora 3, PYTHAGORAS COURT,
          Flat/Office 102, 3027, Limassol, Cyprus), RemoteFirst Group Limited
          (Room A, 21/F, Gaylord Commercial Building, 114-118 Lockhart Road, Wan
          Chai, Hong Kong). “You” or “User” means you as a user of the Site.`}
        </Text>
        <Text>
          Workpido.com provides this Privacy Policy to inform you about the
          policies and procedures governing our collection, use, and disclosure
          of information through Workpido Services. For more on Workpido
          Services, please review our Terms of Service page, which governs your
          use of the Service.
        </Text>
        <Text>
          You must read, agree to, and accept all of the terms and conditions
          contained in Workpido Terms of Service to use Workpido Products. If
          you do not accept the Terms of Service or the Privacy Policy, you must
          not access or use Workpido Products after the Last Updated date. For
          more detailed policies surrounding the activity and usage on the Site,
          please access the designated sections herein.
        </Text>
        <Text className="text-2xl font-semibold mt-5 mb-2">DEFINITIONS</Text>
        <Text className="text-lg font-medium mt-3 mb-1">Personal data</Text>
        <Text>
          Personal data means any information relating to an identified or
          identifiable natural person; an identifiable natural person is one who
          can be identified, directly or indirectly, in particular by reference
          to an identifier such as a name, an identification number, location
          data, an online identifier or to one or more factors specific to the
          physical, physiological, genetic, mental, economic, cultural or social
          identity of that natural person.
        </Text>
        <Text className="text-lg font-medium mt-3 mb-1">Processing</Text>
        <Text>
          Processing means any operation or set of operations that is performed
          on personal data or on sets of personal data, whether or not by
          automated means, such as collection, recording, organization,
          structuring, storage, adaptation or alteration, retrieval,
          consultation, use, disclosure by transmission, dissemination or
          otherwise making available, alignment or combination, restriction,
          erasure or destruction.
        </Text>
        <Text className="text-lg font-medium mt-3 mb-1">Third party</Text>
        <Text>
          Third party means a natural or legal person, public authority, agency,
          or body other than the information subject, controller, processor, and
          persons who are authorized to process personal information under the
          direct authority of the controller or processor.
        </Text>
        <Text className="text-lg font-medium mt-3 mb-1">Controller</Text>
        <Text>
          Controller means the natural or legal person, public authority, agency
          or other body which, alone or jointly with others, determines the
          purposes and means of the processing of personal data; where the
          purposes and means of such processing are determined by the law, the
          controller or the specific criteria for its nomination may be provided
          for by law.
        </Text>
        <Text className="text-lg font-medium mt-3 mb-1">Processor</Text>
        <Text>
          Processor means a natural or legal person, public authority, agency or
          other body which processes personal information on behalf of the
          controller.
        </Text>
        <Text>
          Workpido acts as the Controller of the personal data you provide
          directly to us via the Contact Support form, when creating an account,
          or via phone or email communication. You are not required to provide
          your personal information for purposes of navigating through the
          public areas of our website.
        </Text>
        <Text>
          Workpido acts as the Processor of your personal data whenever you are
          an employee or an authorized representative of one of our clients, who
          has entered into an agreement with us for the provision of our
          products or services. Our client will act as the Controller of your
          information. As the Processor, we do not own, control, or use of any
          data provided to us by our clients who act as Controllers.
        </Text>
        <Text className="text-lg font-medium mt-3 mb-1">Sub-processors</Text>
        <Text>
          Sub-processors means any Data Processor engaged by Workpido to assist
          in fulfilling its obligations with respect to providing the Services
          pursuant to the Terms of Service or this Privacy Policy. A complete
          list of Sub-processors is available at the bottom of this document.
        </Text>
        <Text className="text-lg font-medium mt-3 mb-1">
          Personal information
        </Text>
        <Text>
          {`Personal information is any information that identifies you as a
          specific individual and can be used to contact or identify you.
          Examples of personal information include your name, your company name,
          email address, billing address, and phone number. See “Personal Data.”`}
        </Text>
        <Text className="text-lg font-medium mt-3 mb-1">
          Payment information
        </Text>
        <Text>
          If you use the Service to make payments as a buyer or receive payments
          as a seller, we will collect your payment information for the sole
          purpose of such actions and only to the extent required by law.
        </Text>
        <Text className="text-lg font-medium mt-3 mb-1">
          General Audience Service
        </Text>
        <Text>
          Workpido Services are available and intended for users who have
          reached the age of majority in the jurisdiction in which they conduct
          business. We do not knowingly collect personal information from
          minors. If we become aware that an individual who has yet to reach the
          age of majority has provided us with personal information, we will use
          reasonable efforts to delete such information from our files.
        </Text>
        <Text className="text-lg font-medium mt-3 mb-1">User profiles</Text>
        <Text>
          Users (buyers and sellers alike) create a personal profile with
          certain or all information publicly available.
        </Text>
        <Text>
          When a user creates a profile, which consists of information about
          them and may include personal information, photographs, profile
          pictures, examples of work, information on work previously performed,
          skills, rates, ratings and reviews, and username, such information
          will be visible to all the users of Workpido Services.
        </Text>
        <Text className="text-lg font-medium mt-3 mb-1">
          Information collected automatically
        </Text>
        <Text>
          We use technologies to analyze how people use our Services, improve
          our functions, save your log-in information for future sessions, and
          share insights that may interest you.
        </Text>
        <Text>
          {`Passively or automatically collected data (referred to as "Usage Data")
        is collected as you use this website. We, our affiliated entities, and
        our marketing partners may use automated means to collect various types
        of information about you, your computer or other device used to access
        this website, its services, related web applications, and downloadable
        software. This information is based on your usage of this website. Usage
        Data is essentially anonymous when collected, but could be used
        indirectly to identify a person.`}
        </Text>
        <Text className="text-lg font-medium mt-3 mb-1">Affiliate Program</Text>
        <Text>
          Workpido allows users to send workpidos links to potential new users
          as well as promotional materials about providing or purchasing
          services through Workpido Services. Individuals receiving such links
          and notifications who sign up for the Affiliate Program and become
          referrals, should be aware that Workpido stores the information used
          upon registration for the sole purpose of tracking the success of the
          program.
        </Text>
        <Text className="text-2xl font-semibold mt-5 mb-2">
          USE OF INFORMATION
        </Text>
        <Text>
          Workpido uses Google Analytics to collect data about visitors.
          Workpido Services use the information collected to provide and improve
          services, process your requests, prevent fraud, provide you with
          information that may interest you, comply with the law, and as
          otherwise permitted with your consent.
        </Text>
        <Text>The information we collect is used to:</Text>
        <UnorderedList>
          <ListItem>
            {`Provide you services and improve such services, complete your
            transactions, address your inquiries, process your registration, and
            for compliance and internal business purposes. Internal business
            purposes may include, but are not limited to the following: ban of a
            User’s IP address in case of repeated violation of Workpido’s Terms
            of Service; blocking of a User’s access to other services provided
            by Paperjet in case of violation of Workpido’s Terms of Service etc.`}
          </ListItem>
          <ListItem>
            {`Contact you with administrative communications, Workpido’s
            newsletter, and marketing or promotional materials relevant to
            Workpido’s. You receive such emails because your email address is
            registered on Workpido and you provided your consent upon signing
            up. If you wish to unsubscribe, click the link at the bottom of
            Workpido marketing emails or contact us at support@workpido.com`}
          </ListItem>
          <ListItem>
            Tailor content we display to you and offers we present to you.
          </ListItem>
          <ListItem>
            Protect the property and rights of Workpido Services, to prevent or
            stop an activity that we may consider to be, or to pose a risk of
            being fraudulent, illegal or legally actionable.
          </ListItem>
        </UnorderedList>
        <Text>
          We do not collect sensitive information such as GPS information, race
          or ethnicity, political opinions, religious or philosophical beliefs,
          trade union membership, genetic data, sexual orientation and gender
          identity, biometric data, or health data.
        </Text>
        <Text>
          {`You do not have a statutory obligation to provide us with any
          information, but you may have a contractual obligation to do so (see
          our Terms of Service); in the absence of such information, we may not
          be able to provide our Services to you, in whole or in part.`}
        </Text>
        <Text className="text-2xl font-semibold mt-5 mb-2">DATA RETENTION</Text>
        <Text>
          If you choose to provide us with personal information, we encourage
          you to routinely update the data to ensure that we have accurate and
          up-to-date information about you.
        </Text>

        <Text>
          We keep your personal information for as long as is required to
          fulfill the purpose for which it was collected, unless:
        </Text>
        <UnorderedList>
          <ListItem>
            {`You request that we delete certain information (exceptions apply).`}
          </ListItem>
          <ListItem>
            The client of whom you are an authorized representative is no longer
            our client.
          </ListItem>
          <Text>How we store information:</Text>
          <ListItem>
            {`We store payment information to ensure the withdrawal of funds, to
            identify the recipient of funds (only card and wallet numbers).`}
          </ListItem>
          <ListItem>We do not store payment information for payments.</ListItem>
        </UnorderedList>
        <Text>
          Your information may persist in copies made for backup and business
          continuity purposes for additional time only to the extent permitted
          by law. Data is deleted upon the formal termination of your
          relationship with Workpido, unless otherwise indicated by law.
        </Text>
        <Text className="text-2xl font-semibold mt-5 mb-2">
          INFORMATION SHARING AND DISCLOSURE
        </Text>
        <Text>
          We may share information we have collected about you with the
          following parties:
        </Text>
        <UnorderedList>
          <ListItem>
            Sub-processors: sub-processors means any Data Processor engaged by
            Workpido to assist in fulfilling its obligations with respect to
            providing the Services pursuant to the Terms of Service or this
            Privacy Policy. A complete list of Sub-processors is available at
            the bottom of this document.
          </ListItem>
          <ListItem>
            Authorities and other authorized bodies, and government agencies: in
            response to lawful requests and as required by law. This includes
            the provision of services to the user, in case of violations, crimes
            and suspicion. We cooperate with government and law enforcement
            officials to enforce and comply with the law. We will disclose your
            personal information at our sole discretion and as we believe
            necessary to respond to claims and legal process, or at the request
            of authorities conducting an investigation where we determine in our
            sole discretion the disclosure is necessary to:
          </ListItem>
          <ol type="a">
            <ListItem>
              Protect the property and rights of Workpido Services,
            </ListItem>
            <ListItem>Protect the safety of the public or any person</ListItem>
            <ListItem>
              Prevent or stop activity we may consider to be, or pose a risk of
              being illegal, fraudulent, unethical, or legally actionable.
            </ListItem>
          </ol>
        </UnorderedList>
        <UnorderedList>
          <ListItem>
            Successors: in connection with a merger, acquisition, reorganization
            or sale of assets or in the event of bankruptcy to a successor, as
            required by law and within the framework of universal legal
            succession.We will require the transferee to agree to our
            commitments provided in this Privacy Policy.
          </ListItem>
          <ListItem>
            Auditors: to the extent not exceeding the amount required for the
            audit.
          </ListItem>
        </UnorderedList>
        <Text>
          We may share your personal information for the following reasons: to
          facilitate our services, to provide such services, provide security,
          optimization, and maintenance services, database management, web
          analytics and online advertising, and improvement of Workpido’s
          features.
        </Text>
        <Text>
          {`We do not share your personal information with third parties for those
          third parties’ marketing purposes. All user data is stored on secure
          servers; it is not provided to third parties, except when needed to
          support the operation of Workpido, for marketing purposes to Google
          Analytics, and when required by law.`}
        </Text>
        <Text className="text-2xl font-semibold mt-5 mb-2">REMARKETING</Text>
        <Text>
          Workpido Services may use third-party vendor remarketing tracking
          cookies and pixels, including Google Ads tracking cookies, Facebook
          and Google Tag Manager tracking code.
        </Text>
        <UnorderedList>
          <ListItem>
            {`You may opt-out of Google’s use of cookies by visiting the Ads
            Preferences Manager. You may opt-out of Facebook Ads on your
            Facebook account. Also, you can opt out of other third-party use of
            cookies by visiting the Network Advertising Initiative opt-out page.`}
          </ListItem>
          <ListItem>
            This means we continue to show ads to you across the Internet,
            specifically on Google Content Network, and Facebook Ads.
          </ListItem>
          <ListItem>
            <Text>
              Third-party vendors, including Google, will place cookies in web
              browsers in order to serve ads based on past visits to our
              website. This allows us to make special offers and continue to
              market our products to those who have shown interest in them.
            </Text>
            <Text className="font-semibold">
              We do not remarket to users in the European Union.
            </Text>
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl font-semibold mt-5 mb-2">
          COOKIES AND OPT-OUT RIGHTS
        </Text>
        <Text>
          According to applicable law, you have rights associated with your
          personal information.
        </Text>
        <Text>
          Cookies are text files with small pieces of data that are used to
          identify your computer as you use a computer network. You agree to the
          storing of cookies on your device in accordance with our Privacy
          policy.
        </Text>
        <Text>
          {`We make use of and collect cookies and similar technologies (such as
          pixels, including the Google Ads tracking cookie, Facebook and the
          Google Tag Manager tracking code) to enhance site navigation, improve
          and personalize your experience, provide our services, analyze website
          performance and for marketing purposes. Cookies also allow us to track
          usage behavior and compile website usage information that will allow
          for the improvement of content. You have the right to opt-out of
          cookies by activating the setting on your browser. However, if you
          decide to opt-out, you may be unable to access certain parts of our
          website.`}
        </Text>
        <Text className="text-2xl font-semibold mt-5 mb-2">
          IDENTIFICATION AND VERIFICATION FOR PAYOUTS
        </Text>
        <Text>
          {`In order to avoid fraudulent actions while paying out funds, a
          verification of the recipient of those funds (Cardholder) may be
          performed.`}
        </Text>
        <Text>
          {`Users must verify their identity through an authorized partner - a
          verification service (sumsub.com) (hereinafter – Verification service)
          when they create a withdrawal request via the Unlimint payment system.`}
        </Text>
        <Text>
          {`Workpido does not collect, process, or store personal data necessary
          for User verification for the purpose of making payouts to the User’s
          card. Such personal data is collected, processed and stored by the
          Verification service.`}
        </Text>
        <Text>Verification will include but is not limited to:</Text>
        <UnorderedList>
          <ListItem>Verification of ID document</ListItem>
          <ListItem>Verification of residence address</ListItem>
          <ListItem>{`Sanctions screening (OFAC / PEP lists).`}</ListItem>
        </UnorderedList>
        <Text className="text-2xl font-semibold mt-5 mb-2">
          ANALYTICS PROVIDERS
        </Text>
        <Text>
          Workpido works, or may in the future work with, network advertisers,
          ad agencies, analytics service providers, and other vendors to provide
          us with information regarding traffic on our Services.
        </Text>
        <Text>
          Our service providers may collect certain information about your
          behavior on our Platform.
        </Text>
        <Text>Such providers are:</Text>
        <Text>
          <strong>Google Analytics</strong>is a web analytics service offered by
          Google that tracks and reports website traffic.
        </Text>
        <Text>
          is a web analytics service offered by Google that tracks and reports
          website traffic.
        </Text>
        <Text>
          {`Information collected: Сookie and Usage Data. Visit the Privacy Policy
        at Visit the Privacy Policy at https://policies.google.com/?hl=en. You
        may opt-out of the Google Analytics service with the Google's Browser
        Add-on available at https://tools.google.com/dlpage/gaoptout.`}
        </Text>
        <Text className="text-2xl font-semibold mt-5 mb-2">
          {`CHILDREN’S PRIVACY`}
        </Text>
        <Text>
          {`As per Workpido Terms of Service, we do not allow the use of our
          Services to individuals who have not reached the age of majority in
          the jurisdiction in which they conduct business. We do not knowingly
          collect Personal Information from minors. Parents and guardians should
          supervise their children’s activities on the Internet at all times. If
          we learn we have collected or received Personal Information from a
          minor, we will delete that information. Please contact us at
          support@workpido.com if you believe we might have any information
          about a minor.`}
        </Text>
        <Text className="text-2xl font-semibold mt-5 mb-2">
          DO NOT TRACK REQUESTS
        </Text>
        <Text>
          {`Do Not Track (DNT) is a web browser setting that requests that a web
          application disable its tracking of an individual user. When you turn
          on the DNT setting in your browser, your browser sends a special
          signal to websites, analytic companies, ad networks, plug-in
          providers, and other web services you encounter while browsing to stop
          tracking your activity. Every browser communicates DNT requests to
          websites differently, which may give rise to possible technical
          errors.`}
        </Text>
        <Text>
          To ensure the best possible Workpido experience for our users, we
          currently do not honor DNT requests. However, as the technology and
          communications between browsers and workpido.com improve, we will
          reevaluate our ability to honor DNT requests and may make changes to
          this Privacy Policy.
        </Text>
        <Text className="text-2xl font-semibold mt-5 mb-2">
          LINKS TO OTHER WEBSITES
        </Text>
        <Text>
          {`Our Service may contain links to other websites. If you choose to
          click on a third-party link, you will be directed to that third
          party’s website. The fact that we link to a website is not an
          endorsement, authorization or representation of our affiliation with
          that third party, nor is it an endorsement of their privacy or
          information security policies or practices. We do not exercise control
          over third party websites. These websites may place cookies or other
          files on your devices, collect data or solicit personal information
          from you. We encourage you to read the privacy policies of the other
          websites you visit.`}
        </Text>
        <Text className="text-2xl font-semibold mt-5 mb-2">
          INTERNATIONAL TRANSFER OF PERSONAL INFORMATION
        </Text>
        <Text>
          Our servers are located in Germany, we process and store your
          information in Germany, and our Sub-processors may process Personal
          Information elsewhere. These countries may not have the same data
          protection laws as the country in which you initially provided the
          information.
        </Text>
        <Text>
          {`When we transfer Personal Information from territories in the EEA (The
          European Economic Area) or similar laws to our service providers
          outside the EEA, we rely on approved data transfer mechanisms, which
          may include standard contractual clauses approved by the European
          Commission.`}
        </Text>
        <Text className="text-2xl font-semibold mt-5 mb-2">
          SUPPLEMENTAL PRIVACY NOTICE FOR EUROPEAN UNION AND EEA RESIDENTS
        </Text>
        <Link
          href={
            "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN"
          }
        >
          {`The EU General Data Protection Regulation (GDPR) is the authority that
          governs how personal data of individuals in the EU may be processed
          and transferred.`}
        </Link>
        <Text>
          Under applicable EU regulation, in respect of your Personal
          Information, you have the right to:
        </Text>
        <UnorderedList>
          <ListItem>
            Obtain information about how and on what basis your personal
            information is processed and obtain a copy;
          </ListItem>
          <ListItem>Rectify inaccurate personal information;</ListItem>
          <ListItem>
            Request deletion, anonymization or blocking of your Personal
            information when processing is unnecessary or noncompliant;
          </ListItem>
          <ListItem>
            Request restriction of or object to processing of your Personal
            Information when processing is noncompliant;
          </ListItem>
          <ListItem>
            Obtain a copy of or access to safeguards under which your personal
            information is transferred outside the EEA.
          </ListItem>
        </UnorderedList>
        <Text>
          Workpido will cooperate with the appropriate EU Data Protection
          Authorities during investigation and resolution of complaints brought.
        </Text>
        <Text>
          As a last resort, complaints regarding a violation of personal privacy
          that remain unresolved after pursuing these and other channels are
          subject to mandatory internal arbitration.
        </Text>
        <Text className="text-2xl font-semibold mt-5 mb-2">
          YOUR CHOICES AND RIGHTS
        </Text>
        <Text>
          As a registered user, you may update your choices regarding the type
          of communications you receive from us.
        </Text>
        <Text>
          You may opt-out of receiving our marketing emails from us by following
          the opt-out instructions provided in those emails.
        </Text>
        <Text>
          {`Registered users may receive push notifications on their Workpido’s
          mobile app. Notifications preferences can be modified in the settings
          menu for the mobile application.`}
        </Text>
        <Text>In accordance with applicable law, you have the right to:</Text>
        <UnorderedList>
          <ListItem>Access Personal Information about you.</ListItem>
          <ListItem>
            Request correction of your Personal Information where it is
            inaccurate, incomplete, or outdated.
          </ListItem>
          <ListItem>
            Request deletion of your Personal Information when processing is
            unnecessary or noncompliant.
          </ListItem>
          <ListItem>
            Request restriction of or object to processing of your Personal
            Information when processing is noncompliant.
          </ListItem>
          <ListItem>
            Withdraw your consent to processing of your Personal Information
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl font-semibold mt-5 mb-2">
          CHANGES TO THIS POLICY
        </Text>
        <Text>
          We may update this Privacy Policy at any time, and any changes to it
          will be effective upon posting. We will notify users to the email
          address provided upon registration should there be substantial changes
          to the way we treat Personal Information.
        </Text>
        <Text className="text-2xl font-semibold mt-5 mb-2">
          LIST OF OUR SUBPROCESSORS
        </Text>
        <Text>
          {`The following is the WORKPIDO Service’s current list of Subprocessors
          authorized to process client data for the WORKPIDO Service.`}
        </Text>
        <Text>Last updated: May 18, 2022</Text>
        <Table className="table-auto border-collapse border border-black">
          <Thead>
            <Tr>
              <Th className="border border-black">Subprocessor</Th>
              <Th className="border border-black">Type of Processing</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td className="border border-black">Serverel</Td>
              <Td className="border border-black">Hosting Provider</Td>
            </Tr>
            <Tr>
              <Td className="border border-black">Paymore</Td>
              <Td className="border border-black">Payment Processing</Td>
            </Tr>
            <Tr>
              <Td className="border border-black">Bitrix24</Td>
              <Td className="border border-black">CRM</Td>
            </Tr>
            <Tr>
              <Td className="border border-black">SumSub</Td>
              <Td className="border border-black">Verification Service</Td>
            </Tr>
            <Tr>
              <Td className="border border-black">Corefy</Td>
              <Td className="border border-black">Payment Processing</Td>
            </Tr>
            <Tr>
              <Td className="border border-black">Unlimint</Td>
              <Td className="border border-black">Payment Processing</Td>
            </Tr>
            <Tr>
              <Td className="border border-black">JivoSite</Td>
              <Td className="border border-black">Online chat</Td>
            </Tr>
            <Tr>
              <Td className="border border-black">Crisp</Td>
              <Td className="border border-black">Online chat</Td>
            </Tr>
          </Tbody>
        </Table>
        <Text className="text-2xl font-semibold mt-5 mb-2">CONTACT US</Text>
        <Text>
          We would be happy to address any questions or concerns you may have at
          support@workpido.com, or by mail addressed to:
        </Text>
        <Box>
          <Text>Paperjet Technologies Ltd.</Text>
          <Text>
            Pythagora 3, PYTHAGORAS COURT, Flat/Office 102, 3027, Limassol,
            Cyprus
          </Text>
        </Box>
        <Box>
          <Text>RemoteFirst Group Limited</Text>
          <Text>
            Room A, 21/F, Gaylord Commercial Building, 114-118 Lockhart Road,
            Wan Chai, Hong Kong
          </Text>
        </Box>
      </Flex>
    </main>
  );
};

export default page;
