

export function groupBy<T, K extends PropertyKey>(
    items: T[],
    keySelector: (item: T) => K
): Record<K, T[]> {
    return items.reduce((acc, item) => {
        const key = keySelector(item);

        if (!acc[key]) {
            acc[key] = [];
        }

        acc[key].push(item);

        return acc;
    }, {} as Record<K, T[]>);
}

export function groupMap<T, K extends PropertyKey, TResult>(
    items: T[],
    keySelector: (item: T) => K,
    mapper: (group: T[], key: K) => TResult
): TResult[] {
    const grouped = groupBy(items, keySelector);

    return Object.entries(grouped).map(([key, group]) =>
        mapper(group as T[], key as K)
    );
}

export function groupNested<
    T,
    K1 extends PropertyKey,
    K2 extends PropertyKey,
    TParent,
    TChild
>(
    items: T[],
    parentKey: (item: T) => K1,
    childKey: (item: T) => K2,
    parentMapper: (
        first: T,
        parentGroup: T[],
        children: TChild[]
    ) => TParent,
    childMapper: (
        first: T,
        childGroup: T[]
    ) => TChild
): TParent[] {
    return groupMap(
        items,
        parentKey,
        (parentGroup) => {
            const children = groupMap(
                parentGroup,
                childKey,
                (childGroup) =>
                    childMapper(
                        childGroup[0],
                        childGroup
                    )
            );

            return parentMapper(
                parentGroup[0],
                parentGroup,
                children
            );
        }
    );
}

export function pickFirst<T>(
    group: readonly T[]
): T {
    return group[0];
}



// =======================================
// SNAKE TO CAMEL
// =======================================

function snakeToCamel(str: string): string {
  return str.replace(/([-_][a-z])/gi, (match) =>
    match.toUpperCase().replace(/[-_]/g, '')
  );
}



type Primitive = string | number | boolean | null | undefined;

type SnakeToCamel<T> = T extends Primitive
  ? T
  : T extends Array<infer U>
  ? Array<SnakeToCamel<U>>
  : T extends object
  ? {
      [K in keyof T as K extends string ? SnakeToCamelString<K> : K]: SnakeToCamel<T[K]>;
    }
  : T;

type SnakeToCamelString<S extends string> = S extends `${infer T}_${infer U}`
  ? `${Lowercase<T>}${Capitalize<SnakeToCamelString<U>>}`
  : S extends `${infer T}-${infer U}`
  ? `${Lowercase<T>}${Capitalize<SnakeToCamelString<U>>}`
  : S;

export function convertKeysToCamelCase<T>(obj: T): SnakeToCamel<T> {
  if (obj === null || typeof obj !== 'object') {
    return obj as SnakeToCamel<T>;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeysToCamelCase(item)) as SnakeToCamel<T>;
  }

  const converted: Record<string, any> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const camelKey = snakeToCamel(key);
      converted[camelKey] = convertKeysToCamelCase((obj as any)[key]);
    }
  }

  return converted as SnakeToCamel<T>;
}