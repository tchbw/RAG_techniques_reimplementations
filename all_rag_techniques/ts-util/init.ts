import "jsr:@std/dotenv/load";

import OpenAI from "npm:openai";


export function init() {
    console.log(Deno.env.get("OPENAI_API_KEY"));
    const openai = new OpenAI({
        apiKey: Deno.env.get("OPENAI_API_KEY"),
      });

    return {openai};
}
