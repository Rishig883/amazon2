import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { waitlist } from "@db/schema";
import { eq } from "drizzle-orm";

export function registerRoutes(app: Express): Server {
  // Waitlist signup endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const { email } = req.body;
      
      // Check if email already exists
      const existing = await db.select()
        .from(waitlist)
        .where(eq(waitlist.email, email))
        .execute();
      
      if (existing.length > 0) {
        return res.status(400).send("Email already registered");
      }
      
      // Add new email to waitlist
      await db.insert(waitlist)
        .values({ email })
        .execute();
      
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
