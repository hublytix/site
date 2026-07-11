import { redirect } from "next/navigation";

// Pricing now lives on the homepage (#pricing) as the single source of truth.
// The old standalone tier matrix (Starter/Professional/Agency) is retired.
export default function PricingRedirect() {
  redirect("/#pricing");
}
