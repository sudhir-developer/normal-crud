import type { Metadata } from "next";

const baseMetadata: Metadata = {
  metadataBase: new URL("https://yourwebsite.com"),
  openGraph: {
    siteName: "Demo Project",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export function createMetadata(
  title: string,
  description: string,
  path: string = ""
): Metadata {
  return {
    ...baseMetadata,
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description,
      url: path,
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description,
    },
  };
}