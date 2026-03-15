// src/serverFns/staff.ts
import { getPool } from '../db'


export const queryStaffBios = async () => {
    const pool = getPool()
    const { rows } = await pool.query(`
      SELECT 
        sb.staff_id,
        sb.first_name,
        sb.last_name,
        sb.staff_slug,
        sb.birth_date,
        st.tenure_id,
        st.team,
        st.staff_role,
        st.start_date,
        st.end_date
      FROM staff_bios sb
      LEFT JOIN staff_tenures st ON st.staff_id = sb.staff_id
      ORDER BY sb.last_name
    `)
    return rows 
}
