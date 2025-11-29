CREATE TABLE "tasks" (
	"id" uuid PRIMARY KEY DEFAULT uuidv7() NOT NULL,
	"text" text NOT NULL,
	"completed" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE INDEX "tasks_id_index" ON "tasks" USING btree ("id");--> statement-breakpoint
CREATE INDEX "tasks_text_index" ON "tasks" USING btree ("text");--> statement-breakpoint
CREATE INDEX "tasks_completed_index" ON "tasks" USING btree ("completed");