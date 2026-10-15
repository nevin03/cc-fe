// Partners & collaborations. `icon` is a Simple Icons slug (https://simpleicons.org); entries without one
// render as a text wordmark (brands not in Simple Icons).

export interface Partner {
  name: string;
  icon?: string;
}

export const partners: Partner[] = [
  { name: "OpenAI" },
  { name: "Google Cloud", icon: "googlecloud" },
  { name: "Railway", icon: "railway" },
  { name: "D-U-N-S" },
  { name: "Shopify", icon: "shopify" },
  { name: "Claude", icon: "claude" },
  { name: "MSG91" },
  { name: "Razorpay", icon: "razorpay" },
  { name: "Cashfree" },
  { name: "Kerala Startup Mission" },
  { name: "Startup India" },
];
