import { LucideIcon, FileText, Database, Shield, Cpu, Activity, Server } from "lucide-react";

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // Markdown or HTML string
  tags: string[];
  imageUrl?: string;
  readTime: string;
  icon?: LucideIcon;
};

export const blogPosts: BlogPost[] = [];

