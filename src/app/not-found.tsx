import { SiteHeader } from "@/components/layout/SiteHeader";
import { ROUTES } from "@/config/site";
import { Badge, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <SiteHeader initialSection={null} />
      <main className="flex min-h-screen flex-col items-center justify-center gap-space-md px-4 pt-20 text-center">
        <Badge tone="purple" dot="pulse">
          404 // ROUTE NOT PROVISIONED
        </Badge>
        <h1 className="text-display-xl-mobile text-on-surface md:text-display-xl">This page is coming soon</h1>
        <p className="max-w-md text-body-lg text-on-surface-variant">
          The section you requested hasn&apos;t been deployed yet. Explore our products and services in the meantime.
        </p>
        <div className="flex flex-wrap justify-center gap-space-sm">
          <Button href={ROUTES.home}>Back to Home</Button>
          <Button href={ROUTES.products} variant="soft">
            View Products
          </Button>
        </div>
      </main>
    </>
  );
}
