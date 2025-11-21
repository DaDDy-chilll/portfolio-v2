import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID!;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [{ text: { content: name } }],
        },
        Email: {
          email: email,
        },
        Message: {
          rich_text: [{ text: { content: message } }],
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notion Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
