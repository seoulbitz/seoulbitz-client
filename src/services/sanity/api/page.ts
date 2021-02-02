import { SanityClient, SanityDocument } from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type FAQDocument = SanityDocument<{
  question: { en: string; ko: string };
  answer: { en: any[]; ko: any[] };
}>;

export type FAQPageDocument = SanityDocument<{
  title: string;
  image: SanityImageSource;
  faqItems: FAQDocument[];
}>;

export type PrivacyPolicyPageDocument = SanityDocument<{
  title: { en: string; ko: string };
  body: { en: any[]; ko: any[] };
}>;

export type TermsAndConditionsPageDocument = SanityDocument<{
  title: { en: string; ko: string };
  body: { en: any[]; ko: any[] };
}>;

export type AboutUsPageDocument = SanityDocument<{
  title: { en: string; ko: string };
  image: SanityImageSource;
  body: { en: any[]; ko: any[] };
}>;

export const createPageService = (client: SanityClient) => {
  const findFAQPage = async () => {
    const query = `*[_type == "faqPage"]{
      _id,
      _rev,
      _type,
      _createdAt,
      _updatedAt,
      title,
      image,
      faqItems[]->
    }`;
    const [faqPage] = await client.fetch<FAQPageDocument[]>(query);
    return faqPage;
  };

  const findPrivacyPolicyPage = async () => {
    const query = `*[_type == "privacyPolicyPage"]`;
    const [privacyPolicyPage] = await client.fetch<PrivacyPolicyPageDocument[]>(
      query
    );
    return privacyPolicyPage;
  };

  const findTermsAndConditionsPage = async () => {
    const query = `*[_type == "termsAndConditionsPage"]`;
    const [termsAndConditionsPage] = await client.fetch<
      TermsAndConditionsPageDocument[]
    >(query);
    return termsAndConditionsPage;
  };

  const findAboutUsPage = async () => {
    const query = `*[_type == "aboutUsPage"]`;
    const [aboutUsPage] = await client.fetch<AboutUsPageDocument[]>(query);
    return aboutUsPage;
  };

  return {
    findFAQPage,
    findPrivacyPolicyPage,
    findTermsAndConditionsPage,
    findAboutUsPage
  };
};
