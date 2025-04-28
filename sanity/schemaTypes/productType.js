import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "chibsproduct",
  title: "Product Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        minLength: 100,
      },
    }),
    defineField({
      name: "chibsproductImage",
      title: "Product Image",
      type: "image",
      validation: (Rule) => Rule.required().error("Image is required"),
    }),
    defineField({
      name: "chibsprice",
      title: "Product Price",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(0).error("Product Price is required"),
    }),

    defineField({
      name: "chibsSerial",
      title: "Serial Number",
      type: "string",
      validation: (Rule) => Rule.required().error("Serial Number is required"),
    }),
  ],
});
