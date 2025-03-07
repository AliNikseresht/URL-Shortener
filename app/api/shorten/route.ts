import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    // Check if the link is valid
    if (!url || !/^https?:\/\/\S+$/.test(url)) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    // Create a random slug
    const slug = Math.random().toString(36).substring(2, 8);

    // Save to database
    const { error } = await supabase
      .from("short_links")
      .insert([{ slug, original_url: url }]);
    if (error) {
      console.log("Error while inserting into database:", error);
      throw error;
    }

    return NextResponse.json({
      shortUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
    });
  } catch (error) {
    console.error("Caught error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
