import { sql } from "drizzle-orm"
import { db_user as db } from "../../drizzle/db"

export default defineEventHandler(async () => {
  try {
    const schools = await db.execute(
      sql.raw(`
        SELECT 
          s.school_id,
          s.school_name
        FROM 
          schools s;
      `)
    )

    return {
      success: true,
      err: null,
      schools: schools
    }
  } catch (error) {
    return {
      success: false,
      err: error,
      schools: null
    }
  }
})
