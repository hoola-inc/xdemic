/***
 *  Copyright (C) 2019 Hoola Inc
 *
 *  This file is part of xDemic Mobile App
 *  xDemic Mobile App is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.

 *  xDemic Mobile App is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  ERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 * 
 *  You should have received a copy of the GNU General Public License
 *  along with xDemic Mobile App.  If not, see <http://www.gnu.org/licenses/>.
 * 
 ***/

import React from "react";
import { Container, Theme, Text, Screen } from "@kancha";

export const termsAndConditions1 = `
Terms of Use Version 1.2

IMPORTANT NOTICE: THIS AGREEMENT IS SUBJECT TO BINDING ARBITRATION AND A WAIVER OF CLASS ACTION RIGHTS AS DETAILED IN SECTION 14. PLEASE READ THE AGREEMENT CAREFULLY.

xDemic, a product of Hoola Inc (“xDemic”, “we”, “our”, or “us”) provides a platform for self-sovereign digital identity management through our website located at https://xDemic.me/ (the "Site") and a mobile application.  The mobile application includes text, images, audio, code and other materials or third party applications accessible through the xDemic application (collectively, with the Site, the “Content”). The Site, the mobile app, and any other features, tools, materials, or other services offered from time to time by xDemic are referred to here as the “Service.” 
 
1. Acceptance of Terms
Please read these Terms of Use (the “Terms”) carefully before using the Service. By using or otherwise accessing the Services, or clicking to accept these Terms, you (a) accept and agree to these Terms (b) consent to the collection, use, disclosure and other handling of information as described in our Privacy Policy and (c) agree to any additional terms, rules and conditions of participation issued by xDemic from time to time. IF YOU DO NOT AGREE TO THE TERMS, AS AMENDED FROM TIME TO TIME AS SET FORTH BELOW, YOU MUST STOP USING THE SERVICE IMMEDIATELY. 

2. Modification of Terms
xDemic reserves the right, at its sole discretion, to modify or replace the Terms at any time. The most current version of these Terms will be posted on our Site. You shall be responsible for reviewing and becoming familiar with any such modifications. Use of the Services by you after any modification to the Terms constitutes your acceptance of the Terms as modified.
 
3. Eligibility
You hereby represent and warrant that you are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations and warranties set forth in these Terms and to abide by and comply with these Terms.  By accessing the Content or Services, you represent and warrant that you are of the legal age of majority in your jurisdiction or of the age required to access such Services and Content. You further represent that you are otherwise legally permitted to use the service in your jurisdiction including owning cryptographic tokens of value, and interacting with the Services or Content in any way. You further represent you are responsible for ensuring compliance with the laws of your jurisdiction and acknowledge that xDemic is not liable for your compliance with such laws. 

4. Account Password, Security, and Decentralized Identity (DID)

Password/Seed

When setting up an account within xDemic, you will be responsible for keeping your own account secrets private. These secrets may include your designated recovery network, a twelve-word seed phrase, or other security features.  You acknowledge your understanding that any person with knowledge of your seed phrase may generate your private keys.  You further acknowledge that xDemic does not own your private keys or the seed phrase.  xDemic has no ability to recover your private keys or your seed phrase should they become lost.

Security

Your private key, corresponding to your public Ethereum identity address is stored in the keychain controlled by the “secure enclave” of your device.  By using the xDemic app, you shall institute proper and sufficient password or biometric protection within your device.  You shall regularly update the operating system of your device with any software or security updates.  Notwithstanding the foregoing, you acknowledge that the xDemic app, which exists outside of the “secure enclave,” when initiated by the User, uses the private key information stored in the keychain for relevant signing activities.  Your private key remains within the xDemic app and xDemic does not send the private key to servers.  You agree to (a) keep your secret information confidential and to not share it with anyone else; (b) not share your seed phrase with anyone and to store it in a secure manner; and (c) immediately notify xDemic of any unauthorized use of your account or breach of security. xDemic cannot and will not be liable for any loss or damage arising from your failure to comply with this section.  

DID

By using the xDemic app, you acknowledge, accept and consent to the creation of a decentralized identity (DID) for you.  DID is essentially a public address, a string that serves asan “on-chain identifier.”  Because xDemic is an identity platform on the Ethereum blockchain,  DIDs are linked to the Ethereum blockchain as transactions.  As a user of xDemic, you acknowledge that because transactions on the Ethereum blockchain are immutable, the record of your DID’s on-chain transactions are also immutable and cannot be deleted from the Ethereum blockchain.  Your DID, as it is designed in the xDemic Mobile Application, is not tied to your natural name or personal information, and xDemic does not collect data that would enable the two to be linked or associated together. `;

export const termsAndConditions12 = `
5. Representations, Warranties, and Risks

5.1. Warranty Disclaimer
You expressly understand and agree that your use of the Service is at your sole risk. The Service (including the Service and the Content) is provided on an "AS IS" and "as available" basis, without warranties of any kind, either express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose or non-infringement. You acknowledge that xDemic has no control over, and no duty to take any action regarding: which users gain access to or use the Service; what affects the Content may have on you; how you may interpret or use the Content; or what actions you may take as a result of having been exposed to the Content. You release xDemic from all liability for you having acquired or not acquired Content through the Service. xDemic makes no representations concerning any Content contained in or accessed through the Service, and xDemic will not be responsible or liable for the accuracy, copyright compliance, legality or decency of material contained in or accessed through the Service.

5.2. Sophistication and Risk of Cryptographic Systems
By utilizing the Service or interacting with the Content in any way, you represent and warrant that you understand (a) the inherent risks associated with cryptographic systems, and (b) the usage and intricacies of public/private key cryptography, native cryptographic tokens, like Ether (ETH) and Bitcoin (BTC), smart contract based tokens such as those that follow the Ethereum Token Standard (https://github.com/ethereum/EIPs/issues/20), and blockchain-based software systems. 
 
5.3. Risk of Weaknesses or Exploits in the Field of Cryptography
You acknowledge and understand that Cryptography is a progressing field. Advances in code cracking or technical advances such as the development of quantum computers may present risks to cryptographic systems and Services or Content, which could result in the theft or loss of your cryptographic tokens or property. To the extent possible, xDemic intends to update the code underlying the Services to account for any advances in cryptography and to incorporate additional security measures, but does not guarantee or otherwise represent full security of the system. By using the Service or accessing Content, you acknowledge these inherent risks.

5.4. Platform Security
You acknowledge that Ethereum applications are code subject to flaws and acknowledge that you are solely responsible for evaluating any available code provided by the Services or Content and the trustworthiness of any third-party websites, products, smart-contracts, or Content you access or use through the Service. You further expressly acknowledge and represent that Ethereum applications can be written maliciously or negligently, that xDemic cannot be held liable for your interaction with such applications and that such applications may cause loss of property or identity. Information relayed to IPFS and stored in contracts is currently unencrypted. Malicious actors may potentially access information such as name, photo, description, and members of your recovery network, presenting both disclosure and potential security risks. These warnings and others later provided by xDemic in no way evidence or represent an on-going duty to alert you to all of the potential risks of utilizing the Service or Content.

5.5. Risk of Regulatory Actions in One or More Jurisdictions
You acknowledge that as an emerging technology, xDemic or Ethereum could be impacted by one or more regulatory inquiries or regulatory actions, which could impede or limit the ability of xDemic to continue to develop, or which could impede or limit your ability to access or use the Service or Ethereum blockchain.

5.6. Risk of Errors, Bugs, and Downtime
You acknowledge and accept that the Services (a) may contain bugs, errors and defects, (b) may function improperly or be subject to periods of downtime and unavailability, (c) may result in total or partial loss or corruption of transaction data, and (d) may be modified at any time, including through the release of subsequent versions, in each case with or without notice.

5.7 Total Loss of Data
You acknowledge that xDemic did not manufacture your device.  The security of the security enclave of your device is dependent on the manufacturer of the device.  If you have reason to believe the security of your device’s security enclave has been compromised, you agree to stop the use of xDemic and to seek assistance directly with the device’s manufacturer.  You acknowledge the risk that if the security or integrity of your device’s security enclave is compromise, the security of your private key may be at risk.

xDemic does not own or operate the third-party servers used to store ID Data.  The security and safety of the data is dependent on the owner and operator of the third-party servers.  You acknowledge that in the event the security or integrity of the third-party servers are compromised, your ID Data may be completely or partially damaged and/or lost.    

6. Attestations on xDemic and the xDemic Signing Service
The Services may, from time to time, allow for various attestations to be made about a user. Unless otherwise specified, these attestations are independently made by third parties. xDemic makes no representation or warranty regarding the veracity or accuracy of these third-party attestations. Third-party attestations may be subject to the attesting party's terms and conditions.

In some instances, third-party attestations may be made through the xDemic Signing Service (“USS”). The USS allows a third-party to make an attestation about a particular user without that third-party directly making the attestation. Instead, the USS receives information about an attestation, and makes the attestation on behalf of a third party. xDemic makes no representations as to the veracity or accuracy of attestations made through the USS and xDemic hereby explicitly disclaims any and all liability pertaining to use of the USS for any purpose. 

xDemic allows you to affirmatively opt-in and choose to send and store an encrypted copy of all your claims, attestations and corresponding associations of that information (“ID Data”) to your account that is stored in a service that is maintained by xDemic and runs on servers and infrastructure owned and operated by third-party vendors. This means you will have the ability to recover ID Data but only after restoring the keys to your ID Data from your seed.  xDemic does not back-up your private keys, only ID data. By opting in, you not only have the ability to back-up your ID data, but you can also delete all data on xDemic’s open-sourced managed, third-party servers from within the mobile application.   You acknowledge that xDemic is not responsible for the security or integrity of the third-party managed servers.
`;

export const termsAndConditions2 = `7. Indemnity
You agree to release and to indemnify, defend and hold harmless xDemic and its parents, subsidiaries, affiliates and agencies, as well as the officers, directors, employees, shareholders and representatives of any of the foregoing entities, from and against any and all losses, liabilities, expenses, damages, costs (including attorneys’ fees and court costs) claims or actions of any kind whatsoever arising or resulting from your use of the Service, your violation of these Terms of Use, and any of your acts or omissions that implicate publicity rights, defamation or invasion of privacy. xDemic reserves the right, at its own expense, to assume exclusive defense and control of any matter otherwise subject to indemnification by you and, in such case, you agree to cooperate with xDemic in the defense of such matter.
 
8. Limitation on Liability
YOU ACKNOWLEDGE AND AGREE THAT YOU ASSUME FULL RESPONSIBILITY FOR YOUR USE OF THE SITE AND SERVICE. YOU ACKNOWLEDGE AND AGREE THAT ANY INFORMATION YOU SEND OR RECEIVE DURING YOUR USE OF THE SITE AND SERVICE MAY NOT BE SECURE AND MAY BE INTERCEPTED OR LATER ACQUIRED BY UNAUTHORIZED PARTIES. YOU ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE SITE AND SERVICE IS AT YOUR OWN RISK. RECOGNIZING SUCH, YOU UNDERSTAND AND AGREE THAT, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, NEITHER xDemic NOR ITS SUPPLIERS OR LICENSORS WILL BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY OR OTHER DAMAGES OF ANY KIND, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER TANGIBLE OR INTANGIBLE LOSSES OR ANY OTHER DAMAGES BASED ON CONTRACT, TORT, STRICT LIABILITY OR ANY OTHER THEORY (EVEN IF xDemic HAD BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM THE SITE OR SERVICE; THE USE OR THE INABILITY TO USE THE SITE OR SERVICE; UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SITE OR SERVICE; ANY ACTIONS WE TAKE OR FAIL TO TAKE AS A RESULT OF COMMUNICATIONS YOU SEND TO US; HUMAN ERRORS; TECHNICAL MALFUNCTIONS; FAILURES, INCLUDING PUBLIC UTILITY OR TELEPHONE OUTAGES; OMISSIONS, INTERRUPTIONS, LATENCY, DELETIONS OR DEFECTS OF ANY DEVICE OR NETWORK, PROVIDERS, OR SOFTWARE (INCLUDING, BUT NOT LIMITED TO, THOSE THAT DO NOT PERMIT PARTICIPATION IN THE SERVICE); ANY INJURY OR DAMAGE TO COMPUTER EQUIPMENT; INABILITY TO FULLY ACCESS THE SITE OR SERVICE OR ANY OTHER WEBSITE; THEFT, TAMPERING, DESTRUCTION, OR UNAUTHORIZED ACCESS TO, IMAGES OR OTHER CONTENT OF ANY KIND; DATA THAT IS PROCESSED LATE OR INCORRECTLY OR IS INCOMPLETE OR LOST; TYPOGRAPHICAL, PRINTING OR OTHER ERRORS, OR ANY COMBINATION THEREOF; OR ANY OTHER MATTER RELATING TO THE SITE OR SERVICE. 

SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.

9. Licenses and Access
Subject to your compliance with these Terms and your payment of any applicable fees, xDemic grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and make personal and non-commercial use of the Service. This license does not include any resale or commercial use of the Service or any derivative use of the Service. All rights not expressly granted to you in these Terms are reserved and retained by xDemic or its licensors. The xDemic Service may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent of xDemic. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of xDemic without express written consent. You may not misuse the Services. You may use the Services only as permitted by law. The licenses granted by xDemic terminate if you do not comply with these Terms. For more information regarding xDemic’s licensors, xDemic maintains this information on our attribution page found here: https://xDemic.me/attributions

10. Links or Third Party Applications
The Service provides, or third parties may provide, links to other World Wide Web  or accessible sites, applications or resources. Because xDemic has no control over such sites, applications and resources, you acknowledge and agree that xDemic is not responsible for the availability of such external sites, applications or resources, and does not endorse and is not responsible or liable for any content, advertising, products or other materials on or available from such sites or resources. You further acknowledge and agree that xDemic shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such site or resource.

11. Termination and Suspension
xDemic may, in its sole discretion, terminate or suspend all or part of the Service and your xDemic access immediately, without prior notice or liability, if you breach any of the terms or conditions of the Terms. Upon termination of your access, your right to use the Service will immediately cease.

The following provisions of the Terms survive any termination of these Terms: INDEMNITY; WARRANTY DISCLAIMERS; LIMITATION ON LIABILITY; OUR PROPRIETARY RIGHTS; LINKS; TERMINATION; NO THIRD PARTY BENEFICIARIES; BINDING ARBITRATION AND CLASS ACTION WAIVER; GENERAL INFORMATION.`;

export const termsAndConditions3 = `12. No Third Party Beneficiaries
You agree that, except as otherwise expressly provided in these Terms, (a) there shall be no third party beneficiaries to the Terms and (b) nothing in these Terms shall be construed as creating or implying any relationship of agency, franchise, partnership, or joint venture between you and xDemic.

13. Notice and Procedure for Making Claims of Copyright Infringement
xDemic responds to notices of alleged infringement. 

If you have a good faith belief that your work has been copied in a way that constitutes copyright infringement on or through the  Services, please send a notice of copyright infringement (“Notice”) to xDemic via email to notices@consensys.net with attention to xDemic Copyright. Please note that the xDemic Privacy Policy does not protect information provided in a Notice. 

14. Binding Arbitration and Class Action Waiver
PLEASE READ THIS SECTION CAREFULLY – IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.

14.1. Initial Dispute Resolution
The parties shall use their best efforts to engage directly to settle any dispute, claim, question, or disagreement and engage in good faith negotiations which shall be a condition to either party initiating a lawsuit or arbitration.

14.2. Binding Arbitration
If the parties do not reach an agreed upon solution within a period of 30 days from the time informal dispute resolution under the Initial Dispute Resolution provision begins, then either party may initiate binding arbitration as the sole means to resolve claims, subject to the terms set forth below. Specifically, all claims arising out of or relating to these Terms (including their formation, performance and breach), the parties’ relationship with each other and/or your use of the Service shall be finally settled by binding arbitration administered by the American Arbitration Association in accordance with the provisions of its Commercial Arbitration Rules and the supplementary procedures for consumer related disputes of the American Arbitration Association (the “AAA”), excluding any rules or procedures governing or permitting class actions.

The arbitrator, and not any federal, state or local court or agency, shall have exclusive authority to resolve all disputes arising out of or relating to the interpretation, applicability, enforceability or formation of these Terms, including, but not limited to any claim that all or any part of these Terms are void or voidable, or whether a claim is subject to arbitration. The arbitrator shall be empowered to grant whatever relief would be available in a court under law or in equity. The arbitrator’s award shall be written, and binding on the parties and may be entered as a judgment in any court of competent jurisdiction.

The parties understand that, absent this mandatory provision, they would have the right to sue in court and have a jury trial. They further understand that, in some instances, the costs of arbitration could exceed the costs of litigation and the right to discovery may be more limited in arbitration than in court.

14.3. Location
Binding arbitration shall take place in the state of New York. You agree to submit to the personal jurisdiction of any federal or state court in New York County, New York, in order to compel arbitration, to stay proceedings pending arbitration, or to confirm, modify, vacate or enter judgment on the award entered by the arbitrator.

14.4. Class Action Waiver
The parties further agree that any arbitration shall be conducted in their individual capacities only and not as a class action or other representative action, and the parties expressly waive their right to file a class action or seek relief on a class basis. THE PARTIES AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. 

If any court or arbitrator determines that the class action waiver set forth in this paragraph is void or unenforceable for any reason or that an arbitration can proceed on a class basis, then the arbitration provision set forth above shall be deemed null and void in its entirety and the parties shall be deemed to have not agreed to arbitrate disputes.

14.5. Exception - Litigation of Intellectual Property and Small Claims Court Claims
Notwithstanding the parties' decision to resolve all disputes through arbitration, either party may bring an action in state or federal court to protect its intellectual property rights (“intellectual property rights” means patents, copyrights, moral rights, trademarks, and trade secrets, but not privacy or publicity rights). Either party may also seek relief in a small claims court for disputes or claims within the scope of that court’s jurisdiction.

14.6. 30-Day Right to Opt Out
You have the right to opt-out and not be bound by the arbitration and class action waiver provisions set forth above by sending written notice of your decision to opt-out to the following address: xDemic ℅ ConsenSys, 49 Bogart Street, Brooklyn NY 11206 and via email at notices@consensys.net. The notice must be sent within 30 days of September 6, 2016 or your first use of the Service, whichever is later, otherwise you shall be bound to arbitrate disputes in accordance with the terms of those paragraphs. If you opt-out of these arbitration provisions, xDemic also will not be bound by them.

14.7. Changes to this Section
xDemic will provide 60-days’ notice of any changes to this section. Changes will become effective on the 60th day and will apply prospectively only to any claims arising after the 60th day. For any dispute not subject to arbitration you and xDemic agree to submit to the personal and exclusive jurisdiction of and venue in the federal and state courts located in New York, New York. You further agree to accept service of process by mail, and hereby waive any and all jurisdictional and venue defenses otherwise available. The Terms and the relationship between you and xDemic shall be governed by the laws of the State of New York without regard to conflict of law provisions.

15. General Information

15.1. Entire Agreement
These Terms (and any additional terms, rules and conditions of participation that xDemic may post on the Service) constitute the entire agreement between you and xDemic with respect to the Service and supersedes any prior agreements, oral or written, between you and xDemic. In the event of a conflict between these Terms and the additional terms, rules and conditions of participation, the latter will prevail over the Terms to the extent of the conflict.

15.2. Waiver and Severability of Terms
The failure of xDemic to exercise or enforce any right or provision of the Terms shall not constitute a waiver of such right or provision. If any provision of the Terms is found by an arbitrator or court of competent jurisdiction to be invalid, the parties nevertheless agree that the arbitrator or court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of the Terms remain in full force and effect.

15.3. Statute of Limitations
You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to the use of the Service or the Terms must be filed within one (1) year after such claim or cause of action arose or be forever barred.

15.4. Section Titles
The section titles in the Terms are for convenience only and have no legal or contractual effect.

15.5. Communications
Users with questions, complaints or claims with respect to the Service may contact us at legal@xDemic.me.
`;

const TermsAndConditions = (props: void) => {
  return (
    <Screen>
      <Container flex={1}>
        <Container padding>
          <Text type={Text.Types.SubTitle}>Last modified May 24, 2018</Text>
        </Container>
        <Container paddingHorizontal>
          <Text type={Text.Types.Body}>{termsAndConditions1}</Text>
          <Text type={Text.Types.Body}>{termsAndConditions12}</Text>
          <Text type={Text.Types.Body}>{termsAndConditions2}</Text>
          <Text type={Text.Types.Body}>{termsAndConditions3}</Text>
        </Container>
      </Container>
    </Screen>
  );
};

TermsAndConditions.defaultProps = {
  defaultPadding: true
};

TermsAndConditions.navigatorStyle = {
  largeTitle: false,
  ...Theme.navigation
};

export default TermsAndConditions;
