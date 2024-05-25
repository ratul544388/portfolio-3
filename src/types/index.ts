import { projects } from "@/constants";

export type Category = "all" | (typeof projects)[number]["categories"][number];
export type Project = (typeof projects)[number];
