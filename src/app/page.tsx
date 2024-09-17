import PageSidebar from "@/components/app/page-sidebar"
import PageHeader from "@/components/app/page-header"
import PageMain from "@/components/app/page-main"

export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action."

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <PageSidebar />
      </div>
      <div className="flex flex-col">
        <PageHeader />
        <PageMain />
      </div>
    </div>
  )
}
