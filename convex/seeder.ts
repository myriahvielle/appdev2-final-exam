import { mutation } from "./_generated/server";

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    // Reuse existing seed user or create one
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("username"), "seeduser"))
      .unique();

    const userId = existingUser
      ? existingUser._id
      : await ctx.db.insert("users", {
          fullname: "fullname",
          username: "seeduser",
          password: "password123",
        });

    const initialTasks = [
      "Buy groceries",
      "Finish React Native tutorial",
      "Clean the kitchen",
      "Call mom",
      "Schedule dentist appointment",
      "Fix bug in todo app",
      "Read 10 pages of a book",
      "Go for a 20-minute run",
      "Organize desk",
      "Meditate for 5 minutes",
    ];

    for (const taskText of initialTasks) {
      await ctx.db.insert("todos", {
        text: taskText,
        isCompleted: Math.random() > 0.7,
        userId,
      });
    }

    return " Successfully seeded 10 tasks linked to userId: ${userId};"
  },
});