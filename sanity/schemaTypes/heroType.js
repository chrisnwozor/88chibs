import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "images1",
      title: "First Hero Images",
      type: "image",
      validation: (Rule) =>
        Rule.required().error("First Hero Images is required"),
    }),
    defineField({
      name: "images2",
      title: "Second Hero Images",
      type: "image",
      validation: (Rule) =>
        Rule.required().error("Second Hero Images is required"),
    }),
    defineField({
      name: "images3",
      title: "Third Hero Images",
      type: "image",
      validation: (Rule) =>
        Rule.required().error("Third Hero Images is required"),
    }),
  ],
});
