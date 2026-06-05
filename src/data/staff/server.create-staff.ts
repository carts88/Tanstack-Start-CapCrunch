import { createServerFn } from "@tanstack/react-start";
import { sql } from "../db";

export interface CreateStaffInput {
  birthDate?: string | null;
  firstName: string;
  lastName: string;
  birthCity?: string | null;
  birthCountry?: string | null;
  birthStateProvince?: string | null;
  deceasedDate?: string | null;
  nationalityCode?: string | null;
  playerId?: number | null;
  notes?: string | null;
}


interface ICreateStaffPerson {
    data: CreateStaffInput
}

export const CreateStaffPerson = async ({
    data
} :  ICreateStaffPerson) => {
    const result = await sql`
      INSERT INTO staff_bios (
        birth_date,
        first_name,
        last_name,
        birth_city,
        birth_country,
        birth_state_province,
        deceased_date,
        nationality_code,
        player_id,
        notes
      )
      VALUES (
        ${data.birthDate},
        ${data.firstName},
        ${data.lastName},
        ${data.birthCity},
        ${data.birthCountry},
        ${data.birthStateProvince},
        ${data.deceasedDate},
        ${data.nationalityCode},
        ${data.playerId},
        ${data.notes}
      )
      RETURNING *
    `;
    return result[0]
}

export const createStaff = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: CreateStaffInput | undefined }) => {
    // Make data required at runtime
    if (!data) {
      throw new Error("No data provided");
    }
    if (!data.firstName || !data.lastName) {
      throw new Error("First name and last name are required");
    }
    const result = await CreateStaffPerson({data})

    return result[0];
  });