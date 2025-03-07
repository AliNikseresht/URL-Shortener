import { supabase } from "@/utils/supabaseClient";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function RedirectPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Search for the original link in the database
  const { data, error } = await supabase
    .from("short_links")
    .select("original_url")
    .eq("slug", slug)
    .single();

  // If link not found, display 404
  if (!data || error) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        404 | Not Found
      </h1>
    );
  }

  // Redirect to the original link
  redirect(data.original_url);
}
