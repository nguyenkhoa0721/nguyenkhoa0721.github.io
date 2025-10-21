import matter from 'gray-matter';

export interface CVMetadata {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

export interface CVData {
  metadata: CVMetadata;
  content: string;
}

export async function parseCV(markdownContent: string): Promise<CVData> {
  const { data, content } = matter(markdownContent);

  return {
    metadata: data as CVMetadata,
    content,
  };
}

export async function loadCV(): Promise<CVData> {
  const response = await fetch('/src/content/cv.md');
  const text = await response.text();
  return parseCV(text);
}
