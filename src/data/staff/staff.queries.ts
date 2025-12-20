import pool from '@/data/db';

export const queryStaffBios = async () => {
  const rows  = await pool.query(`
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
  `);
  return rows;
};

// utils/groupOneToMany.ts

type OneToManyGroupOptions<
  Row extends Record<string, any>,
  OneKey extends keyof Row,
  ManyKey extends keyof Row,
  ManyCollection extends string
> = {
  oneKey: OneKey;
  oneFields: (keyof Row)[];
  manyKey: ManyKey;
  manyFields: (keyof Row)[];
  manyCollection: ManyCollection;
};

export function groupOneToMany<
  Row extends Record<string, any>,
  OneKey extends keyof Row,
  ManyKey extends keyof Row,
  ManyCollection extends string
>(
  rows: Row[],
  options: OneToManyGroupOptions<Row, OneKey, ManyKey, ManyCollection>
): Array<
  Pick<Row, (typeof options.oneFields)[number]> & {
    [K in ManyCollection]: Array<Pick<Row, (typeof options.manyFields)[number]>>;
  }
> {
  const { oneKey, oneFields, manyKey, manyFields, manyCollection } = options;

  const map = new Map<Row[OneKey], any>();

  for (const row of rows) {
    const id = row[oneKey];

    // Initialize the "one" side if not exists
    if (!map.has(id)) {
      const one: any = {};
      for (const field of oneFields) {
        one[field] = row[field];
      }
      one[manyCollection] = [];
      map.set(id, one);
    }

    // Add to the "many" side if the many key is present (not null)
    if (row[manyKey] !== null && row[manyKey] !== undefined) {
      const many: any = {};
      for (const field of manyFields) {
        many[field] = row[field];
      }
      map.get(id)[manyCollection].push(many);
    }
  }

  return Array.from(map.values());
}