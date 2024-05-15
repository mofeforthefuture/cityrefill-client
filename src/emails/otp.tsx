import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
  Img,
} from '@react-email/components';

interface AWSVerifyEmailProps {
  verificationCode?: string;
}

export default function CityrefillVerifyEmail({
  verificationCode = '596853',
}: AWSVerifyEmailProps) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: '#007291',
            },
          },
        },
      }}
    >
      <Html>
        <Head />
        <Preview>AWS Email Verification</Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={coverSection}>
              <Section style={imageSection}>
                <img
                  src='https://thumbs2.imgbox.com/aa/bd/Mc3Vxy3B_t.png'
                  alt='Logo'
                  className='w-30'
                />
              </Section>
              <Section style={upperSection}>
                <Heading style={h1}>Verify your email address</Heading>
                <Text style={mainText}>
                  Say goodbye to stockouts! Enter the verification code below to
                  activate your CITYREFILL account and achieve effortless
                  restocking. ✅
                </Text>
                <Section style={verificationSection}>
                  <Text style={codeText}>{verificationCode}</Text>
                  <Text
                    style={validityText}
                    className='text-sky-400  max-md:mt-6'
                  >
                    (This code is valid for 10 minutes)
                  </Text>
                </Section>
              </Section>
              <Hr />
              <Section style={lowerSection}>
                <Text style={cautionText}>
                  Phishing? Never heard of her! Here at CITYREFILL, we only ask
                  for verification codes to keep your information safe. Unlike
                  scams, we'll never request your password, credit card, or bank
                  details. Enter the code below to complete your account
                  creation securely.
                </Text>
              </Section>
            </Section>
            <Text style={footerText}>
              Want to streamline your organization's restocking needs? Explore
              CITYREFILL at{' '}
              <Link
                href='https://cityrefill.com'
                className='text-sky-400'
                target='_blank'
                style={link}
              >
                cityrefill.com
              </Link>{' '}
              and learn how we protect your data in our Privacy Policy{' '}
              <Link
                href='https://cityrefill.com/privacy'
                target='_blank'
                style={link}
                className='text-sky-400'
              >
                privacy policy
              </Link>
              .
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}

const main = {
  backgroundColor: '#fff',
  color: '#212121',
};

const container = {
  padding: '20px',
  margin: '0 auto',
  backgroundColor: '#eee',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '15px',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

const logoText = {
  ...text,
  color: '#D9D9D9',
  fontWeight: 'bold',
  fontSize: '36px',
  margin: '10px 0',
};
const imageSection = {
  backgroundColor: '#004AAD',
  display: 'flex',
  padding: '20px 0',
  alignItems: 'center',
  justifyContent: 'center',
};

const coverSection = { backgroundColor: '#fff' };

const upperSection = { padding: '25px 35px' };

const lowerSection = { padding: '25px 35px' };

const footerText = {
  ...text,
  fontSize: '12px',
  padding: '0 20px',
};

const verifyText = {
  ...text,
  margin: 0,
  fontWeight: 'bold',
  textAlign: 'center' as const,
};

const codeText = {
  ...text,
  color: '#00008B',
  fontWeight: 'bold',
  fontSize: '36px',
  margin: '10px 0',
  textAlign: 'center' as const,
};

const validityText = {
  ...text,
  margin: '0px',
  marginTop: '20px',
  textAlign: 'center' as const,
};

const verificationSection = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const mainText = { ...text, marginBottom: '14px' };

const cautionText = { ...text, margin: '0px' };
