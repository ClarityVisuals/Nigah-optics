
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function TermsOfServicePage() {
  const effectiveDate = "October 26, 2023"; // Example date

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <FileText className="h-16 w-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Terms of Service</h1>
        <p className="text-muted-foreground">Effective Date: {effectiveDate}</p>
      </header>

      <Card className="shadow-lg">
        <CardContent className="p-6 md:p-10 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the NigaH website (the "Service") operated by NigaH ("us", "we", or "our").
          </p>
          <p>
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
          </p>
          <p>
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">1. Accounts</h2>
            <p>
              When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p className="mt-2">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">2. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of NigaH and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of NigaH.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">3. Links To Other Web Sites</h2>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by NigaH.
            </p>
            <p className="mt-2">
              NigaH has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that NigaH shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
            <p className="mt-2">
              We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">4. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="mt-2">
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">5. Limitation Of Liability</h2>
            <p>
              In no event shall NigaH, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>
            <p className="mt-2">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">7. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="mt-2">
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@nigah.com.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
