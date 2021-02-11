import { Meta } from '@/components/meta/Meta';
import { SanityClient, SanityDocument } from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type LocationListPageDocument = SanityDocument<{
  meta: Meta;
  title: string;
}>;

export type ArticleListPageDocument = SanityDocument<{
  meta: Meta;
  title: string;
}>;

export type FAQDocument = SanityDocument<{
  question: { en: string; ko: string };
  answer: { en: any[]; ko: any[] };
}>;

export type FAQPageDocument = SanityDocument<{
  meta: Meta;
  title: string;
  image: SanityImageSource;
  faqItems: FAQDocument[];
}>;

export type PrivacyPolicyPageDocument = SanityDocument<{
  meta: Meta;
  title: { en: string; ko: string };
  body: { en: any[]; ko: any[] };
}>;

export type TermsAndConditionsPageDocument = SanityDocument<{
  meta: Meta;
  title: { en: string; ko: string };
  body: { en: any[]; ko: any[] };
}>;

export type AboutUsPageDocument = SanityDocument<{
  meta: Meta;
  title: { en: string; ko: string };
  image: SanityImageSource;
  body: { en: any[]; ko: any[] };
}>;

export const createPageService = (client: SanityClient) => {
  const findLocationListPage = async () => {
    const query = `*[_type == "locationListPage"]{
      ...,
      meta->
    }`;
    const [locationListPage] = await client.fetch<LocationListPageDocument[]>(
      query
    );
    return locationListPage;
  };

  const findArticleListPage = async () => {
    const query = `*[_type == "articleListPage"]{
      ...,
      meta->
    }`;
    const [articleListPage] = await client.fetch<ArticleListPageDocument[]>(
      query
    );
    return articleListPage;
  };

  const findFAQPage = async () => {
    const query = `*[_type == "faqPage"]{
      ...,
      meta->,
      faqItems[]->
    }`;
    const [faqPage] = await client.fetch<FAQPageDocument[]>(query);
    return faqPage;
  };

  const findPrivacyPolicyPage = async () => {
    const query = `*[_type == "privacyPolicyPage"]{
      ...,
      meta->
    }`;
    const [privacyPolicyPage] = await client.fetch<PrivacyPolicyPageDocument[]>(
      query
    );
    return privacyPolicyPage;
  };

  const findTermsAndConditionsPage = async () => {
    const query = `*[_type == "termsAndConditionsPage"]{
      ...,
      meta->
    }`;
    const [termsAndConditionsPage] = await client.fetch<
      TermsAndConditionsPageDocument[]
    >(query);
    return termsAndConditionsPage;
  };

  const findAboutUsPage = async () => {
    const query = `*[_type == "aboutUsPage"]{
      ...,
      meta->
    }`;
    const [aboutUsPage] = await client.fetch<AboutUsPageDocument[]>(query);
    return aboutUsPage;
  };

  return {
    findLocationListPage,
    findArticleListPage,
    findFAQPage,
    findPrivacyPolicyPage,
    findTermsAndConditionsPage,
    findAboutUsPage
  };
};
