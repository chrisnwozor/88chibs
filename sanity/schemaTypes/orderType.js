import { defineField, defineType } from "sanity";

export const orderType = defineType({
  name: "chibsorder",
  type: "document",
  title: "Chibs Orders",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Customer Name",
    }),
    defineField({
      name: "phone",
      type: "string",
      title: "Phone Number",
    }),
    defineField({
      name: "address",
      type: "text",
      title: "Delivery Address",
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email Address",
    }),
    defineField({
      name: "orderDate",
      type: "datetime",
      title: "Order Date",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
