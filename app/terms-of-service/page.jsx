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
        className="my-0 py-[4vh] px-[5vw] bg-white mx-auto w-screen lg:w-3/4 lg:container"
      >
        <Text>{`Welcome to workpido! We’re happy to have you.`}</Text>
        <Text>
          {`The following terms of service (these "Terms of Service") govern your
        access to and use of workpido.com and the products, features, services,
        technologies, and software published on it and the Workpido mobile app
        (the “Workpido Services”). The terms “us”, “we”, “our” refer to
        Workpido.com and its managing companies: Paperjet Technologies
        Ltd.(Pythagora 3, PYTHAGORAS COURT, Flat/Office 102, 3027, Limassol,
        Cyprus), RemoteFirst Group Limited (Room A, 21/F, Gaylord Commercial
        Building, 114-118 Lockhart Road, Wan Chai, Hong Kong). “You” or “User”
        means you as a user of the Site.`}
        </Text>
        <Text>
          {`Subject to the conditions set forth herein, Workpido may, in its sole
        discretion, amend these Terms of Service and any other agreements that
        comprise the Terms of Service at any time by posting a revised version
        on the Site. Any revisions to the Terms of Service will take effect on
        the noted last updated date (the “Last Updated” date).`}
        </Text>
        <Text>
          {`You must read, agree to, and accept all of the terms and conditions
        contained in this Terms of Service, as well as the Related Documents, to
        use Workpido Services. Workpido considers your use of Workpido Services
        as an acceptance of the Terms of Service and the Related documents. If
        you do not accept these Terms of Service or the Related documents, you
        must not access or use Workpido Services after the Last Updated date.
        For more detailed policies surrounding the activity and usage on the
        Site, please access the designated sections herein.`}
        </Text>
        <Text>
          {`You must read, agree to, and accept all of the terms and conditions
        contained in this Terms of Service, as well as the Related Documents, to
        use Workpido Services. Workpido considers your use of Workpido Services
        as an acceptance of the Terms of Service and the Related documents. If
        you do not accept these Terms of Service or the Related documents, you
        must not access or use Workpido Services after the Last Updated date.
        For more detailed policies surrounding the activity and usage on the
        Site, please access the designated sections herein.s`}
        </Text>
        <Heading className="text-3xl font-medium mt-4 mb-2">
          Terms of Use
        </Heading>
        <UnorderedList>
          <ListItem>
            {`Users must be of legal age (or must have otherwise reached the age of
          majority in the jurisdiction in which they conduct business) to use
          Workpido Services.`}
          </ListItem>
          <ListItem>
            {`Workpido.com is not available to users who are residents of Iran,
          Cuba, North Korea, the Russian Federation and other countries and
          territories included in the OFAC list.`}
          </ListItem>
          <ListItem>
            To create or order a workpido, you must register with a valid email
            address or social media account.
          </ListItem>
          <ListItem>
            Each User may only create one account. Workpido reserves the right
            to delete duplicate accounts.
          </ListItem>
          <ListItem>
            {`The User has the right to delete their Account at any time only after
          all orders in their account have been completed and delivered. Should
          the User decide to delete their Account, they agree to the permanent
          deletion of such Account. Accounts deleted by mistake can be restored
          within 30 days by contacting Workpido’s Support Team. Under no
          circumstances will the User be able to create a new account using the
          same email, phone number, and payment details used in a previously
          deleted account. Should the User have funds on their balance before
          deleting their Account, they should withdraw all funds before such
          deletion. The User will not be able to delete their Account unless all
          funds have been withdrawn.`}
          </ListItem>
          <ListItem>
            You may not buy, sell, gift, or share a Workpido account.
          </ListItem>
          <ListItem>
            Upon registration, Users must create a valid username that will be
            visible to all other Users. A username may include Latin characters,
            numbers, hyphens, and underscores. Usernames containing phone
            numbers, words reserved for Workpido employees, profanity, and
            offensive or abusive language are prohibited. Workpido reserves the
            right to modify any username that violates these terms.
          </ListItem>
          <ListItem>
            Users are responsible for the protection of their authentication
            details in order to prevent malicious use of the Service by third
            parties, and should promptly notify Workpido of abuse of the
            service.
          </ListItem>
          <ListItem>
            Users are individually responsible for all content posted on
            Workpido, including, but not limited to, workpidos, pictures,
            videos, reviews, and comments. By creating an account with Workpido,
            Users confirm that they understand and agree with these terms, and
            also agree to reimburse any expenses incurred by Workpido in case a
            copyright claim is made against Workpido.
          </ListItem>
          <ListItem>
            The User agrees that they are not considered a worker, employee, or
            agent of Workpido, and that the User is not entitled to represent
            himself/herself as such.
          </ListItem>
          <ListItem>
            {`The User does not have the right to assign his/her rights and
              obligations under this Terms of Services in whole or in part.
              Workpido may assign its rights and obligations hereunder or any of
              its rights and obligations hereunder without the User's consent at
              any time.`}
          </ListItem>
          <ListItem>
            Profanity, vulgarity, unauthorized advertising, as well as posting
            information and materials that negatively affect the brand image of
            Workpido are prohibited. A full list of prohibited content can be
            found.
          </ListItem>
          <ListItem>
            {`Workpido reserves the right to remove any material posted on
              Workpido Services including, but not limited to, workpidos,
              reviews, comments, etc. as well as suspend or remove a User's
              account without explanation. In case of suspected unauthorized
              access, spam, or other suspicious activity on your account,
              Workpido may temporarily suspend the account until the account is
              deemed secure again. In case of blocked accounts, the User can
              complete any of the orders in progress, but cannot accept or start
              to work on new orders. The User may withdraw money from their
              balance to the credit/debit card on file or any other withdrawal
              method available on the "Cash Flow" page. Users will be able to
              only communicate with the support service, while communications
              and chats with other users will be temporarily unavailable.`}
          </ListItem>
          <ListItem>
            {`Disputed situations and issues, including financial matters, can be
          resolved by contacting Workpido’s Support Team via email or through a
          request submitted on workpido.com. The Support Team will review and
          work to resolve the issue. Unique issues without applicable or
          governing rules will be resolved as Workpido’s Support Team deems
          appropriate.`}
          </ListItem>
          <ListItem>
            You may not disclose information you obtain while signed in to
            Workpido, including but not limited to the specifications and terms
            of orders and personal correspondence with other users and
            representatives of Workpido. You may disclose information about your
            workpidos, your earnings on Workpido, and other information related
            to your account if that information does not infringe on the privacy
            of other users.
          </ListItem>
          <ListItem>
            All sellers who earn an income by offering services and fulfilling
            orders using Workpido Services are solely responsible for their
            compliance with local regulations and laws, including but not
            limited to licensing regulations and tax laws.
          </ListItem>
          <ListItem>
            {`Users may not use unethical or disreputable advertising methods to
          promote Workpido affiliate links, copy Workpido Services in whole or
          in part, or use Workpido’s branding or design to mislead others.`}
          </ListItem>
          <ListItem>
            At its sole discretion, Workpido has the right to unilaterally
            terminate these Terms of Services at any moment, inter alia, in case
            of breach by the User of any provision of these Terms or any
            provision of any of the Related Documents.
          </ListItem>
          <ListItem>
            {`In this document, the “Related documents” refers to Workpido’s
          Copyright Protection on Workpido, Prohibited Services, and the
          Approval Process for workpidos and the Privacy Policy, WORKPIDO
          Service Dispute Resolution Policy.`}
          </ListItem>
          <ListItem>
            Workpido balance is not meant to be used to keep money indefinitely.
            If an account is inactive for 2 years or more, it will be put on
            Archival Service. Starting from the activation of the service, the
            inactive account will be charged $5 per month, and $50 per month
            starting the third year.
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">Data Policy</Text>
        <UnorderedList>
          <ListItem>
            {`Upon registering for Workpido, you agree to have your personal data
          stored and processed and to receive information from Workpido,
          including email newsletters. Workpido may collect, store, and process
          user data (cookies, data, identifiers) as needed to operate the
          website, to effectively implement the affiliate program, and for
          promotional purposes. How and why Workpido collects and processes your
          personal data is outlined in our Privacy Policy.`}
          </ListItem>
          <ListItem>
            Workpido may exercise control over personal correspondence between
            Users to ensure compliance with the Terms of Service and the Related
            documents. This includes the right of Workpido to review the content
            of the personal correspondence.
          </ListItem>
          <ListItem>
            Workpido.com and the mobile app, including their general layout,
            look and feel, design, information, content, and other materials
            available thereon, are the exclusive property of the owner and
            protected by copyright, trademark, and other intellectual property
            laws.
          </ListItem>
        </UnorderedList>
        <Heading className="text-3xl font-medium mt-4 mb-2">
          Workpido Service rules
        </Heading>
        <Text className="text-2xl mt-4 mb-2">GENERAL TERMS</Text>
        <UnorderedList>
          <ListItem>
            Workpido is an online, digital marketplace where businesses and
            individuals can buy and sell freelance services.
          </ListItem>
          <ListItem>
            Buyers are Users who purchase freelance services on Workpido. They
            are organized in seven levels: New, Rising, Experienced, Seasoned,
            Established, Expert and Top.
          </ListItem>
          <ListItem>
            Sellers are Users who sell freelance services on Workpido. They are
            divided into three levels: New, Advanced, and Professional.
          </ListItem>
          <ListItem>
            Each User can be a seller and buyer simultaneously.
          </ListItem>
          <ListItem>
            {`A workpido (with a lowercase ‘k’, not to be confused with Workpido
              with an uppercase ‘k’) is a freelance service offered in the
              Marketplace. The fixed minimum price of a workpido is $10.`}
          </ListItem>
          <ListItem>
            {`The Workpido Account is the personal section of Workpido, unique
              to each User. Users can access their accounts by entering
              authentication details on Workpido’s sign in page.`}
          </ListItem>
          <ListItem>
            {`The Portfolio is a collection of a Seller’s work samples.`}
          </ListItem>
          <ListItem>
            The Marketplace refers to all workpidos offered by Sellers on
            Workpido as a whole. Buyers go to the Marketplace to purchase
            workpidos from sellers.
          </ListItem>
          <ListItem>
            Package workpidos are sets of services sellers can offer together to
            target different audiences and price points.
          </ListItem>
          <ListItem>
            Extra options are additional services sellers can offer in addition
            to the main service provided in a workpido.
          </ListItem>
          <ListItem>
            The workpido page is the dedicated page for each individual
            workpido. Buyers can purchase, read reviews, and learn more about a
            workpido on the workpido page.
          </ListItem>
          <ListItem>
            The Order page is where Buyers and Sellers communicate with each
            other about a purchased workpido.
          </ListItem>
          <ListItem>
            Task-based orders are orders divided into portions and every
            specific task is worked on and delivered separately.
          </ListItem>
          <ListItem>
            Custom workpido offers are customized workpidos Sellers can create
            that meet the specific needs of a Buyer.
          </ListItem>
          <ListItem>
            Custom workpido requests are requests Buyers can send to Sellers for
            a Custom workpido offer.
          </ListItem>
          <ListItem>
            {`Workpido’s Choice is a highly-coveted badge awarded to workpidos
              that Buyers love for high-quality work and fast delivery.`}
          </ListItem>
          <ListItem>
            {`Your Balance includes your Earnings as a Seller and refunded
              payments after an order is canceled (as a buyer). You can view
              your Balance in the Cash Flow section of your account.`}
          </ListItem>
          <ListItem>
            Partners are payment systems or other services that deliver, hold,
            or receive payments.
          </ListItem>
          <ListItem>
            Earnings are the money that Sellers receive from completed orders
            and can either withdraw or use for purchases on Workpido Services in
            accordance with these Terms of Service.
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">WORKPIDOS</Text>
        <UnorderedList>
          <ListItem>
            It is free to create workpidos. A new Seller may create up to ten
            workpidos. After successfully completing one order, a Seller may
            create an unlimited number of workpidos.
          </ListItem>
          <ListItem>
            Each workpido is manually approved by a Support Specialist before
            being posted in the Marketplace. Workpido reserves the right to
            modify or delete workpidos that violate these Terms of Service
            and/or the Related documents. Users can learn more about the
            approval process for workpidos here.
          </ListItem>
          <ListItem>
            {`By selling a workpido, Sellers agree to render all included
              services for all orders of the workpido. Sellers do not have the
              right to refuse to sell an active workpido to a Buyer who pays for
              the order and provides all necessary information to complete it.
              Sellers provide their services to Buyers independently and bear
              full responsibility for the completion or non-completion of all
              orders. It is prohibited to divide a single order of the same
              service into several smaller orders (i.e. creating duplicate
              orders) to artificially increase a Seller’s total number of
              orders. In such cases, Workpido reserves the right to penalize
              workpidos and/or the User.`}
          </ListItem>
          <ListItem>
            {` Sellers are prohibited from misleading Buyers regarding the
              service(s) they provide. Violations will result in sanctions
              and/or the permanent suspension of the offending workpido and/or
              the Seller’s account`}
          </ListItem>
          <ListItem>
            If a violation is reported, Workpido has the right to remove such
            content.
          </ListItem>
          <ListItem>
            {`Should it be deemed fit, Workpido reserves the right to
              unilaterally hide work from a User's portfolio.`}
          </ListItem>
          <ListItem>
            {`Sellers must remove any and all mistakes, errors, or
              inconsistencies on a workpido page as soon as they are discovered.
              A common error is a discrepancy between the scope, delivery,
              price, and other fields of a workpido. For instance, suppose a
              Seller writes in their workpido’s description that the scope of
              their workpido is 1,000 words, but enters 2,000 words in the
              "Scope of this workpido '' field. In that case, the true volume
              will be considered 2,000 words. The information indicated in the
              dedicated field shall prevail and take precedence over all else.
              All disputes arising from such discrepancies shall be resolved in
              favor of the Buyer.`}
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">ORDERS</Text>
        <UnorderedList>
          <ListItem>
            Buyers are required to pay for orders in advance. Payments are held
            safely by Partners until the order is completed.
          </ListItem>
          <ListItem>
            {`Before starting an order, the User (Seller) must make sure that it
              complies with Workpido's list of Prohibited Services. If the Buyer
              is requesting a prohibited service, the Seller must cancel the
              order and contact the Support Team.`}
          </ListItem>
          <ListItem>
            {`If a Buyer's assignment differs in description and scope from the
              service described by the Seller and the Seller accepted the order,
              priority is given to the Buyer's assignment. Assignments can be
              given over correspondence before an order is placed, as well as
              when ordering a workpido.`}
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">ORDER COMPLETION</Text>
        <UnorderedList>
          <ListItem>
            An order is marked as Complete after it is approved by the Buyer or
            after arbitration is completed.
          </ListItem>
          <ListItem>
            {`After a workpido is delivered, the Buyer has three business days
              (or four days if more than one day falls on a weekend) to approve
              the delivery. If during this period the Buyer neither approves or
              requests revisions, the order will be automatically approved and
              considered completed. If the order’s price is more than $150, the
              approval period is five business days (or six if more than one day
              falls on a weekend).`}
          </ListItem>
          <ListItem>
            {`A task-based order is marked as complete when the final task is
              delivered and approved by the Buyer. If a task is not approved or
              no revisions are requested, the task will be automatically
              approved and marked as completed after three business days (or
              four days if more than a day falls on a weekend). If the task’s
              price is more than $150, the approval period is five business days
              (or six if more than one day falls on a weekend).`}
          </ListItem>
          <ListItem>
            In this case, the entire order will be suspended and will only
            resume once the next task is paid for. If the Buyer does not pay for
            the next task within five days, the Seller will not be able to start
            working on it. At the same time, completed tasks cannot be canceled.
          </ListItem>
          <ListItem>
            {`As per Workpido rules, the seller’s delivery must be of high
              quality. When a delivery contains an excessive amount of
              objectively verifiable mistakes, the order is considered
              incomplete.`}
          </ListItem>
          <ListItem>
            {`As per Workpido rules, if a buyer cannot review a seller’s
              delivery (for example, if the seller fails to provide proof of
              work or a final product), the order is considered incomplete.`}
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">
          REVISIONS AND ADDITIONAL SERVICES
        </Text>
        <UnorderedList>
          <ListItem>
            {`Orders that satisfy criteria outlined in the workpido's
              description and the Buyer's requirements are to be considered
              successfully completed. If an order is not fulfilled, clearly does
              not meet the standards explicitly set on the workpido page, or
              does not meet the Buyer’s order requirements, the Buyer may return
              the delivered work to the Seller for revision. In this case
              Sellers must provide as many revisions until the delivery meets
              the standards agreed upon without asking for additional payment.`}
          </ListItem>
          <ListItem>
            {`Additional services (including revisions beyond those needed for
              the order to be considered successfully completed) are offered at
              the discretion of the Seller. Sellers can determine the volume of
              the service that they are willing to offer and the price. Sellers
              may also choose not to offer additional services or revisions or
              offer them for free.`}
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">ORDER CANCELATION</Text>
        <UnorderedList>
          <ListItem>
            Both Sellers and Buyers have the right to cancel any order by
            providing a valid cancelation reason. Once a cancelation is
            confirmed by the other party, payment is refunded to the Buyer. If a
            Buyer chooses to cancel an order because a Seller misses a deadline,
            the funds will be returned to the Buyer immediately without the need
            for confirmation from the Seller.
          </ListItem>
          <ListItem>
            {`Orders cannot be canceled on the basis of a Buyer’s subjective
              evaluation of a Seller’s delivery as long as the service was
              provided in accordance with the information provided on the
              workpido page.`}
          </ListItem>
          <ListItem>
            Workpido reserves the right to cancel any order that violates these
            Terms of Service at any time.
          </ListItem>
          <ListItem>
            Workpido reserves the right to cancel orders for any reason. Common
            cancelation reasons are:
          </ListItem>
          <Box>
            <UnorderedList>
              <ListItem>
                The Seller does not accept the order within 24 hours or misses
                the deadline and is unresponsive for more than two weeks.
              </ListItem>
              <ListItem>
                {`Users display aggressive behavior, use order materials (such as
                personal information) against each other, or Buyers threaten
                Sellers with a bad review`}
              </ListItem>
              <ListItem>
                {`Users have provided or included materials that violate a third
                party’s intellectual property rights`}
              </ListItem>
              <ListItem>
                Users withhold the delivery of services, files, or information
                required to complete a workpido with the intent to gain
                favorable reviews, additional services, or extra payment
              </ListItem>
              <ListItem>
                The Seller submits an order for approval without a complete
                result in order to extend the order deadline
              </ListItem>
            </UnorderedList>
          </Box>
          <ListItem>
            {`Sellers must deliver a product that reflects the description of
              their workpido and meets all Buyer requirements. Failure to comply
              with this requirement will allow the Buyer to cancel the order,
              and may damage the Seller's status. When the deadline has passed
              the order is marked as Overdue.`}
          </ListItem>
          <ListItem>
            {`Workpido reserves the right to cancel any completed orders or
              tasks in task-based orders, if they are in severe violation of
              Workpido’s Terms of Service (e.g. the type of service is
              prohibited on Workpido, or the order may be fraudulent, etc.). In
              such cases, the sum paid for the canceled order or task will be
              refunded to the Buyer's balance and will be deducted from the
              Seller's balance or, if there are insufficient funds on the
              Seller's balance, from the future Earnings of the Seller. Funds
              for such an order will be removed from the Seller's balance
              regardless of when the order was completed.`}
          </ListItem>
          <ListItem>
            Partial cancelation of an order is not possible. An order may only
            be canceled completely and with a valid cancelation reason. Reasons
            for canceling include but are not limited to:
          </ListItem>
          <Box>
            <UnorderedList>
              <ListItem>
                {`The Seller used materials that violate another party’s
                intellectual property`}
              </ListItem>
              <ListItem>
                {`The Seller’s delivery is defective or not functioning`}
              </ListItem>
              <ListItem>
                The Buyer did not acquire the rights to commercial use of the
                delivery and, as reported, used the delivery for commercial
                purposes
              </ListItem>
            </UnorderedList>
          </Box>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">INTELLECTUAL PROPERTY RIGHTS</Text>
        <UnorderedList>
          <ListItem>
            All intellectual property rights associated with the delivery of an
            order are transferred to the Buyer after the successful completion
            and payment of the order, unless an alternate agreement is reached
            between the Buyer and the Seller. If intellectual property involves
            elements subject to licensing, the Seller is obliged to transfer the
            license or, if applicable, provide the Buyer with a reasonable
            warning regarding the need for the additional acquisition of a
            relevant license.
          </ListItem>
          <ListItem>
            {`All transfer and assignment of intellectual property to the Buyer
              shall be subject to full payment for the workpido, and the
              delivery may not be used if payment is canceled for any reason.
              Violation of this rule may result in the suspension of a Buyer’s
              account.`}
          </ListItem>
          <ListItem>
            Unless otherwise specified, Sellers are not entitled to receive and
            may not solicit from the Buyer any and all royalties earned from the
            sale of their work.
          </ListItem>
          <ListItem>
            {`Some workpidos require the purchase of a license for commercial
              use. In such cases, if a User (Buyer) purchases a workpido for
              personal use, the Buyer will own all the rights necessary for such
              use, and will not need a license for commercial use. But if the
              Buyer intends to use it for any purposes that are directly or
              indirectly related to any business or in any other way intended
              for profit, the Buyer will need to purchase a license for
              commercial use in the manner provided for by the relevant
              workpido.`}
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">
          EXCHANGE OF CONTACT INFORMATION
        </Text>
        <UnorderedList>
          <ListItem>
            {`Soliciting and providing contact information, including but not
              limited to name, surname, email address, phone number, and social
              media accounts, as well as agreeing to communicate off of
              Workpido, is prohibited. Violations may lead to a reduction in a
              Seller’s ratings.`}
          </ListItem>
          <ListItem>
            Exceptions are made for orders for which the exchange of contact
            information is clearly necessary. Examples include but are not
            limited to the provision of an email address from AdSense to set up
            advertising campaigns, a link to a social media account that a
            Seller will grow, and a Skype ID for consulting services. Sellers
            must explicitly indicate the need for certain contact information in
            advance in the description of their workpido or when sending a
            Custom workpido offer.
          </ListItem>
          <ListItem>
            Sellers agree that any and all private information provided by
            Buyers is confidential and may not be transferred or used for any
            purpose other than completion of the order itself.
          </ListItem>
          <ListItem>
            All interactions between Buyers and Sellers, including, but not
            limited to, placing orders, payment, negotiation of terms, and
            approval of the delivery must take place within Workpido Services.
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">REVIEWS AND SELLER RATINGS</Text>
        <UnorderedList>
          <ListItem>
            {`Once an order is completed or canceled, Buyers can leave a review
              about their experience working with the Seller and their
              impression of the Seller’s service. Workpido does not remove
              reviews unless there is a clear violation of Workpido’s Terms of
              Service.`}
          </ListItem>
          <ListItem>
            Buyers may leave a review within 30 days. For some categories,
            Buyers will have 60 days to leave a review.
          </ListItem>
          <ListItem>
            Once a positive review is posted, a Buyer can edit or delete it
            within 30 days. For some categories, positive reviews can be edited
            or deleted within 60 days. Negative reviews can only be edited or
            deleted within two days.
          </ListItem>
          <ListItem>
            {`Positive and negative reviews influence a Seller's rating. Sellers
              may not artificially inflate or increase their ratings in any way.
              Sellers found to be engaging in such activities will be penalized.`}
          </ListItem>
          <ListItem>
            {`Refusing to fulfill an order without a valid reason negatively
              impacts a Seller's rating. For more information about cancelation
              reasons click here. A Seller's workpidos may be put on hold due to
              multiple consecutive refusals or ignored orders (the system
              automatically cancels orders that receive no response from Sellers
              within 24 hours).`}
          </ListItem>
          <ListItem>
            Sellers may solicit Buyers for reviews, but may not explicitly
            request a positive review.
          </ListItem>
          <ListItem>
            By posting reviews on Workpido, Users grant Workpido exclusive,
            royalty-free, fully paid, perpetual, irrevocable intellectual rights
            without restriction worldwide to such reviews. At the same time,
            Workpido does not bear any obligations for the content of any
            reviews that it may receive from users.
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">USER-GENERATED CONTENT</Text>
        <UnorderedList>
          <ListItem>
            Workpido is not responsible for user-generated content. However, if
            you come across any content posted on Workpido that may violate
            these Terms of Service, you must inform Workpido about it via the
            feedback form located here. All requests are considered by the
            Support Team.
          </ListItem>
          <ListItem>
            All content uploaded by users to Workpido is considered
            user-generated content. Workpido makes reasonable efforts to monitor
            content uploaded to Workpido Services but cannot be held liable for
            user-generated content. Users are individually responsible for their
            content and the consequences of its use, disclosure, storage, and
            transmission.
          </ListItem>
          <ListItem>
            Users are solely responsible for checking all files transmitted on
            workpido.com for viruses and malware.
          </ListItem>
          <ListItem>
            Files provided in correspondence and the order form are stored on
            Workpido for two years, after which they are deleted. Files from
            paid orders that the Seller attached to the final submission of an
            order will be kept permanently.
          </ListItem>
          <ListItem>
            By uploading to, or creating content on workpido.com and the
            Workpido mobile app, you represent and warrant that you own or have
            obtained all rights, licenses, consents, permissions, power and/or
            authority necessary to use and/or upload such content and that such
            content or its use on Workpido does not and shall not:
          </ListItem>
          <Box>
            <UnorderedList>
              <ListItem>
                infringe or violate any intellectual property, proprietary or
                privacy, data protection or publicity rights of any third party;
              </ListItem>
              <ListItem>
                violate any applicable local, state, federal and international
                laws, regulations and conventions;
              </ListItem>
              <ListItem>
                {`violate third party's intellectual property, policies and/or
                terms of service.`}
              </ListItem>
            </UnorderedList>
          </Box>
          <Text>Learn more about Copyright Protection on Workpido here.</Text>
          <ListItem>
            {`Users (both Buyers and Sellers) agree that, unless they explicitly
            indicate otherwise, the content that they create/upload to
            workpido.com, including workpido texts, photos, videos, user photos,
            user videos and any other information, including the display of
            completed work, may be used by Workpido at its sole discretion for
            marketing and/or other purposes.`}
          </ListItem>
          <ListItem>
            If a violation is reported, Workpido has the right to remove such
            content.
          </ListItem>
          <ListItem>
            Users agree to reimburse any expenses incurred by Workpido in case a
            copyright claim is made against Workpido.
          </ListItem>
        </UnorderedList>
        <Heading className="text-3xl font-medium mt-4 mb-2">
          PAYMENTS AND FINANCES
        </Heading>
        <Text className="text-2xl mt-4 mb-2">
          WORKPIDO MONEY-BACK GUARANTEE
        </Text>
        <Text>
          {`While a Seller works on a Buyer’s order, the Buyer’s payment is held
            safely by Partners. Partners provide Users of Workpido Services a
            tool to deliver, hold, and receive payments.`}
        </Text>
        <Text>
          {`Under Workpido’s Money Back Guarantee and Buyer Protection program,
            Buyers are entitled to a refund to their Balance:`}
        </Text>
        <UnorderedList>
          <ListItem>
            instantly if the Buyer cancels the order within 20 minutes of
            placing it
          </ListItem>
          <ListItem>
            {`instantly if the Seller doesn’t start working on the order within
              24 hours from the time the order was placed`}
          </ListItem>
          <ListItem>
            {`instantly if the Seller doesn’t complete the order on time and the
              Buyer chooses to cancel it`}
          </ListItem>
          <ListItem>
            instantly if the Buyer and the Seller mutually agree to cancel the
            order
          </ListItem>
          <ListItem>
            as soon as a Workpido Support Specialist reviews the order if the
            order is completed poorly or is incomplete.
          </ListItem>
        </UnorderedList>
        <Text>
          {`To initiate a refund, the Buyer should request order cancelation on
            the order page. Depending on the reason for cancelation, the order
            can be canceled within 0–48 hours of the request.`}
        </Text>
        <Text>
          Refunds cannot be requested after the Buyer confirms the order is
          completed.
        </Text>
        <Text>
          The refunded amount can be returned to the card used to pay for the
          order within seven days of the payment. To initiate a return to the
          same card, the Buyer should place a Return to card request on the Cash
          flow page.
        </Text>
        <Text className="text-2xl mt-4 mb-2">PARTNERS</Text>
        <UnorderedList>
          <ListItem>
            {`Workpido cooperates with Partners in order to collect payments
              from Buyers, transfer such payments from Buyers to Sellers, and
              store funds on Users’ Balances. All services related to the
              withdrawal of funds on workpido.com are also performed by
              Partners.`}
          </ListItem>
          <ListItem>
            {`For purposes here mentioned, Users undertake to accept the
              Partners’ offer, user agreement, and other documents of the
              Partner.`}
          </ListItem>
          <ListItem>
            {`Sellers authorize the Partners to receive and transfer payments
              from the Buyer’s account to the Seller’s account. All Users
              authorize the Partners to withhold Workpido’s Service Fee on the
              basis of these Terms of Service for the use of Workpido Services
              and other fees (if applicable).`}
          </ListItem>
          <ListItem>
            {`Your account on a Partner’s service may only be linked to one
              Workpido account. It is prohibited to link one credit/debit card,
              WebMoney wallet, or Payoneer account to multiple Workpido
              accounts.`}
          </ListItem>
          <ListItem>
            {`All funds available for withdrawal will be stored on your behalf
              on the Partner's account.`}
          </ListItem>
          <ListItem>
            {`Workpido reserves the right, through any of the Partners, to
              freeze the transfer of funds in the event of any suspicious or
              fraudulent activity detected on Workpido Services or in case of
              orders’ cancelation.`}
          </ListItem>
          <ListItem>
            It is prohibited to submit a dispute about the cancelation of an
            order or payment, or cancel a transaction through your payment
            service provider, your bank or Partner. This may lead to a temporary
            hold on your account and balance.
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">PAYING FOR ORDERS</Text>
        <UnorderedList>
          <ListItem>
            By making or receiving payments through Workpido Services, you
            accept and agree to be bound and abide by these Terms.
          </ListItem>
          <ListItem>
            {`Sellers and Buyers undertake to use the Partner's payment system
              for all transactions.`}
          </ListItem>
          <ListItem>
            {`It is prohibited to make payments off of Workpido Services. If a
              User is asked to use an alternative payment method, they should
              immediately contact Workpido's Support Team.`}
          </ListItem>
          <ListItem>
            Orders can be paid with debit and credit cards. Buyers can also use
            funds that they may have on their Balance. Additional payment
            methods may be available in certain locations.
          </ListItem>
          <ListItem>
            By ordering a workpido or a custom offer, Buyers agree to pay
            Sellers for their services, along with all associated commissions
            and fees. When making a purchase, Buyers see the total amount to be
            paid.
          </ListItem>
          <ListItem>
            Sellers agree that the transfer of Earnings from the Partner is
            equivalent to the payment made by the Buyer directly to the Seller.
          </ListItem>
          <ListItem>
            {`Buyers’ payment obligation to Sellers will be fulfilled after the
            Partner receives the payment. The Partner is responsible for
            transferring funds to Sellers. At the same time, if the Partner does
            not transfer any amounts to the Seller, the Seller must contact
            Workpido, and must not communicate with the Buyer or the Partners
            directly.`}
          </ListItem>
          <ListItem>
            The Seller agrees that Workpido may specify payment details in
            receipts, notifications and other documents provided to Buyers, if
            Workpido deems it necessary or reasonable.
          </ListItem>
          <ListItem>
            {`An additional commission may be charged for the transfer of funds in
          accordance with the Partner's terms and conditions.`}
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">{`WORKPIDO’S SERVICE FEE`}</Text>
        <UnorderedList>
          <ListItem>
            {`By using Workpido, Users agree to pay Workpido’s Service Fee.`}
          </ListItem>
          <ListItem>
            <Text>{`Workpido’s Service Fee is determined as follows: Workpido’s Service
          Fee is included in the final price of a Seller’s workpido or custom
          workpido offer. Sellers receive a sum equal to the total order value
          minus Workpido’s Service Fee. Workpido’s Service Fee is calculated
          individually for each order in accordance with our Service Fee table.
          Workpido’s Service Fee decreases as a Seller’s total revenue with a
          Buyer increases.`}</Text>
          </ListItem>
        </UnorderedList>
        {/* <Box>
          <Table className="border border-black table-auto">
            <Tr>
              <Th>Total Revenue with Buyer</Th>
              <Th>Service Fee</Th>
              <Th>Order Total</Th>
              <Th>Seller Earns</Th>
            </Tr>
            <Tr>
              <Td>{`<$500`}</Td>
              <Td>20%</Td>
              <Td>$100</Td>
              <Td>$80</Td>
            </Tr>
            <Tr>
              <Td>$500-$5,000</Td>
              <Td>12%</Td>
              <Td>$100</Td>
              <Td>$88</Td>
            </Tr>
            <Tr>
              <Td>$5,000+</Td>
              <Td>7.5%</Td>
              <Td>$100</Td>
              <Td>$92.5</Td>
            </Tr>
          </Table>
        </Box> */}
        <UnorderedList>
          <ListItem>
            {`The discussion of Workpido’s Service Fee in correspondence between
              Buyers and Sellers typically occurs to conduct transactions off of
              Workpido. Therefore, discussing Workpido’s Service Fee is
              prohibited and may lead to a reduction in a Seller’s ratings.`}
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">SECURITY</Text>
        <UnorderedList>
          <ListItem>
            {`In case of cancelation of an order, the paid funds will be
              returned to the Buyer's balance.`}
          </ListItem>
          <ListItem>
            {`Refunds for canceled orders are returned to the Buyer's balance
              and are available for future purchases and withdrawals on Workpido
              Services.`}
          </ListItem>
          <ListItem>
            For security reasons, Users can withdraw funds to a different card
            than the card they used to top up their Balance only six months
            after such funds were added.
          </ListItem>
          <ListItem>
            Users can withdraw funds to the card they used to top up their
            Balance within seven days after such funds were added.
          </ListItem>
          <ListItem>
            {`Issues related to the refund of payments are consist Workpido’s
              sole discretion.`}
          </ListItem>
          <ListItem>
            {`In order to protect against fraud, unauthorized transactions (such
              as money laundering), claims or other liabilities, all payment
              information is collected either by Workpido or the Partners.`}
          </ListItem>
          <ListItem>
            {`All orders are processed via secure transaction. All paid funds
              are placed in an escrow account and transferred to the Seller only
              after the work is completed. Placing any other type of order is
              not possible on Workpido Services. It is prohibited to perform
              unpaid (test) tasks and conduct transactions outside the order's
              framework. Violations will result in your account being penalized
              and/or frozen.`}
          </ListItem>
          <ListItem>
            {`Workpido does not have access to payment information provided to
              Partners. This information is governed by the Partners' privacy
              policy.`}
          </ListItem>
          <ListItem>
            By making payments and/or providing payment details on Workpido
            Services, you represent and warrant that:
          </ListItem>
          <ListItem>
            <UnorderedList>
              <ListItem>
                you are legally authorized to make payments on Workpido Services
                using the payment method you have chosen;
              </ListItem>
              <ListItem>
                your actions do not violate any applicable law.
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            You agree to receive invoices and/or payment receipts from Workpido
            electronically in the form of PDF documents, by email or on
            workpido.com.
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">WITHDRAWING FUNDS</Text>
        <UnorderedList>
          <ListItem>
            {`Funds refers to the money on a User’s Balance. A Seller receives
              funds for completing orders. A Buyer may also have funds because
              their payment was refunded following an order cancelation. Funds
              can be withdrawn or used for purchases in Workpido Services in
              accordance with these Terms of Service.`}
          </ListItem>
          <ListItem>
            Users cannot withdraw funds acquired from promo codes. Funds
            acquired from promo codes may only be used for purchases in Workpido
            Services.
          </ListItem>
          <ListItem>
            Users can create a withdrawal request on the Cash Flow page. Funds
            may be withdrawn to Mastercard and Visa cards, as well as WebMoney
            and Payoneer accounts. All withdrawals are final and cannot be
            reversed.
          </ListItem>
          <ListItem>
            Withdrawal fees are determined by Partners. They are displayed on
            the Cash Flow page before a withdrawal request is created. By
            placing a withdrawal request, you accept the associated fees and
            acknowledge that Workpido has no influence or control over Partner
            withdrawal fees.
          </ListItem>
          <ListItem>
            Withdrawal schedule: Withdrawal requests are processed twice a week
            on Monday and Thursday. The time for this process completion may
            vary, but the requests are processed no later than 8:30 PM GMT. In
            most cases, requests placed on Monday or Thursday will be processed
            on the next withdrawal date. In some rare cases, it may take up to 5
            business days for your withdrawal request to be processed and your
            funds to be credited to your account.
          </ListItem>
          <ListItem>
            {`Workpido reserves the right to temporarily suspend a User’s
              ability to withdraw funds to prevent fraudulent or illegal
              activities, or for other security reasons.`}
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">LOCAL CURRENCIES</Text>
        <UnorderedList>
          <ListItem>
            Payments on Workpido may be conducted in multiple currencies.
          </ListItem>
          <ListItem>
            All prices shown on Workpido in non-US$ currencies are pegged to
            their original price in US dollars. Prices shown in other currencies
            may change in accordance with fluctuations in exchange rates, and
            may also include a conversion fee. The minimum price of a workpido
            is $10 regardless of local currencies and exchange rate
            fluctuations.
          </ListItem>
          <ListItem>
            Unless otherwise specified, payments are made in the currency
            displayed on the payment page.
          </ListItem>
          <ListItem>
            All currency exchange services in connection with payments in local
            currencies are performed by Partners.
          </ListItem>
          <ListItem>
            When certain currencies are not supported by certain payment
            methods, payments are made in US$, even if the price is specified in
            another currency.
          </ListItem>
          <ListItem>
            {`Users will be informed on the amount to be debited (in the actual
              currency of the payment) before completing the payment`}
          </ListItem>
          <ListItem>
            {`If payment for an order is made in a currency other than US$, and
              the order is canceled, the amount refunded to a User’s balance
              will be based on the exchange rate on the date of cancelation. The
              amount returned may differ from the amount paid in the
              corresponding currency, while always maintaining the same value in
              US$.`}
          </ListItem>
          <ListItem>
            {`A user’s balance is always valued in US$, even if it is displayed
              in a currency other than the US$. If you decide to view your
              balance in any currency other than US$, such balance may change in
              accordance with exchange rate fluctuations, while maintaining the
              same value in US$.`}
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">TAXES</Text>
        <UnorderedList>
          <ListItem>
            Users are responsible for paying any direct or indirect taxes,
            including any GST, VAT or income tax, which may be applied to them
            depending on their place of residence, location or otherwise, in
            accordance with provisions of their jurisdiction.
          </ListItem>
          <ListItem>
            Sellers represent and warrant that they comply at all times with
            their obligations under income tax provisions in their jurisdiction.
            Prices shown on Workpido include all taxes and charges that may
            apply to Sellers.
          </ListItem>
          <ListItem>
            {`The current legislation may require Workpido or the Partners to
              charge Users with indirect taxes (such as Sales Tax, VAT or GST)
              or to withhold taxes.`}
          </ListItem>
          <ListItem>
            {`Any amount that Workpido or the Partners will be required to
              collect will be in addition to the purchase amount and any other
              fees payable by Buyers, and any amount that Workpido or the
              Partners will have to withhold will be deducted from Sellers’
              income, as required by applicable laws.`}
          </ListItem>
          <ListItem>
            Indirect taxes are in addition to the price indicated on Workpido,
            and in any event, any such taxes will always be displayed to Buyers
            before payment.
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">{`DISPUTE SETTLEMENT (ARBITRATION)`}</Text>
        <UnorderedList>
          <ListItem>
            Any disputes and disagreements between a Seller and a Buyer are
            resolved through one-on-one negotiations or with the assistance of a
            Support Team Specialist. If negotiations are unsuccessful, the Buyer
            or the Seller has the right to apply for arbitration
          </ListItem>
          <ListItem>
            {`To apply for arbitration, a User should click the arbitration link
              under Help located on the Order Page, indicate the relevant
              category, and fill out the arbitration form. The arbitration link
              appears once the order is submitted for approval. The application
              should contain the applicant's username, the username of the other
              party in the dispute, the number and identification of the order
              under dispute, and evidence supporting your position in the
              dispute.`}
          </ListItem>
          <ListItem>
            {`The application will be forwarded to a competent Workpido’s
              Support Team Specialist (the arbiter) to evaluate and resolve the
              dispute. A decision will be reached within 3 business days;
              however, this time period may be extended in exceptionally
              challenging circumstances.`}
          </ListItem>
          <ListItem>
            {`Arbiters do not evaluate orders’ creative components, including
              but not limited to colors, fonts, and writing style (with the
              exception of deliveries that clearly do not correspond to the
              standards displayed in the Seller’s portfolio).`}
          </ListItem>
          <ListItem>
            {`When working on an order, Sellers should never take action that
              could harm Buyers. For example, Sellers should not make edits or
              upload files that would harm the site or the site’s users while
              working with site accesses. If a Buyer is found to have been hurt
              by a Seller, the arbiter will cancel the order, and the Seller's
              account will be penalized and/or suspended.`}
          </ListItem>
          <ListItem>
            {`Should an arbiter discover that an order is in severe violation of
              Workpido’s Terms of Service (e.g. the type of service is
              prohibited on Workpido, or the order may be fraudulent, etc.), the
              arbiter has the right to cancel the order and apply sanctions to
              both parties. If the order is fraudulent or in clear violation of
              the law, the Buyer’s payment shall be returned to their
              credit/debit card, WebMoney wallet, or Payoneer account. In other
              cases, the funds shall be returned to the Buyer’s Balance.`}
          </ListItem>
          <ListItem>
            {`If Seller and Buyer have come to a mutual agreement regarding
              partial payment for the order, Workpido's arbiter will decide
              based on the wishes of both parties and the Terms of Service.`}
          </ListItem>
          <ListItem>
            A Buyer maintains the right to leave a review for an order that ends
            in arbitration, even if the arbiter rules in favor of the Seller. A
            Buyer may not leave a review when they request additional services
            that exceed the original scope of the order from the Seller.
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">PROPRIETARY RIGHTS</Text>
        <UnorderedList>
          <ListItem>
            Users do not have the right and undertake not to perform the
            following actions with respect to Workpido Services, or any of their
            parts, components, or extensions:
          </ListItem>
          <Box>
            <UnorderedList>
              <ListItem>
                copy, transfer, adapt, modify, distribute, transmit, display,
                create derivative works, publish or reproduce them in any way;
              </ListItem>
              <ListItem>
                reverse assemble, decompile, reverse engineer, or other attempt
                to derive the source code, underlying ideas, algorithms,
                structure or organization;
              </ListItem>
              <ListItem>
                remove any copyright notice, identification or any other
                proprietary notices;
              </ListItem>
              <ListItem>
                circumvent, remove, alter, deactivate, degrade or interfere any
                technological measure or protections of the content of the
                Workpido Services;
              </ListItem>
              <ListItem>
                attempt to gain unauthorized access, interfere with, damage or
                disrupt the operation of workpido.com or Workpido Services;
              </ListItem>
              <ListItem>
                {`use automation software (bots), hacks, modifications (mods) or
                any other unauthorized third-party software designed to modify
                the Workpido Services;`}
              </ListItem>
              <ListItem>
                introduce any viruses, trojan horses, worms, logic bombs or
                other materials that are malicious or technologically harmful
                into the Workpido Services,
              </ListItem>
              <ListItem>
                use any robot, spider, crawlers or other automatic device,
                process, software or queries that intercepts, “mines,” scrapes
                or otherwise accesses Workpido Services to monitor, extract,
                copy or collect information or data from or through Workpido
                Services, or engage in any manual process to do the same,
              </ListItem>
              <ListItem>
                {`use Workpido Services in any manner that could damage, disable,
                overburden or impair them, or interfere with any other users’
                enjoyment of the website or mobile app or`}
              </ListItem>
              <ListItem>
                access or use Workpido Services in any way not expressly
                permitted by these Terms of Service.
              </ListItem>
            </UnorderedList>
          </Box>
          <ListItem>
            Users also guarantee not to permit or authorize anyone else to do
            any of the foregoing.
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">DISCLAIMER OF WARRANTIES</Text>
        <UnorderedList>
          <ListItem>
            {`You use Workpido’s Services at your own risk. Workpido Services and
          any services obtained through them are provided on an "as is'' and "as
          available" basis, without any warranties of any kind, either express
          or implied. Neither Workpido nor any other person associated with
          Workpido makes any warranty or representations with respect to the
          completeness, security, reliability, quality, accuracy or availability
          of Workpido and Workpido Services.`}
          </ListItem>
          <ListItem>
            {`Neither Sellers nor Workpido gives any guarantees, express or implied,
          including with respect to any workpido or the suitability of the
          result of the work for a specific purpose. Neither Sellers nor
          Workpido is responsible for any claims or incidental, indirect or
          other damages arising from the use of the work result.`}
          </ListItem>
          <ListItem>
            {`The foregoing does not affect any warranties which cannot be excluded
          or limited under applicable law.`}
          </ListItem>
        </UnorderedList>
        <Text className="text-2xl mt-4 mb-2">LIMITATION ON LIABILITY</Text>
        <UnorderedList>
          <ListItem>
            {`In no event will Workpido, its affiliates* or their licensors, service
          providers, employees, agents, officers or directors be liable for
          damages of any kind, arising out of or in connection with your use, or
          inability to use workpido.com, Workpido Services, or any websites
          linked to them, any content on workpido.com or such other websites or
          any services or items obtained through Workpido or its services or
          such other websites, including any direct and indirect damages,
          including, but not limited to, moral damage, loss of income, loss of
          profits, loss of business, loss of goodwill, loss of data, including
          caused by tort (including negligence), breach of the agreement or
          otherwise, even if foreseeable.`}
          </ListItem>
          <ListItem>
            {`In no case shall Workpido, its affiliates or their licensors, service
          providers, employees, agents, officers, or directors be liable for the
          actions or omissions of a User.`}
          </ListItem>
          <ListItem>
            {`The foregoing does not affect any liability which cannot be excluded
          or limited under applicable law.`}
          </ListItem>
        </UnorderedList>
        <Text>
          {`In no event shall Workpido be liable for the failure to perform, or any
        delay in performance of, any obligation hereunder for a reasonable
        period due to natural disasters, wars, terrorism, rebellions, embargoes,
        actions of civil or military authorities, fires, floods, accidents,
        strikes, or shortages of means of transportation, fuel, energy, labor or
        materials, or any other conditions beyond the reasonable control of
        Workpido. Furthermore, Workpido is not responsible for third-party DDoS
        attacks and/or other attacks on Workpido Services, for the consequences
        of such attacks, for technical problems that affect the Workpido
        Services attributable to the Workpido Services's hosting provider, nor
        for the unavailability of the Workpido Services for any other reason not
        directly attributable to Workpido.`}
        </Text>
        <Text>
          {`*The term “Affiliate” referred to herein, is an entity that, directly or
        indirectly, controls, or is under the control of, or is under common
        control with Workpido, where control means having more than fifty
        percent (50%) voting stock or other ownership interest or the majority
        of voting rights of such entity.`}
        </Text>
      </Flex>
    </main>
  );
};

export default page;
