import { PoolMember } from "../domain/Pool";

export function createPool(members: PoolMember[]): PoolMember[] {
  const total = members.reduce((s, m) => s + m.cbBefore, 0);
  if (total < 0) throw new Error("Pool sum negative");

  const surplus = members.filter(m => m.cbBefore > 0).sort((a,b)=>b.cbBefore-a.cbBefore);
  const deficit = members.filter(m => m.cbBefore < 0);

  for (const d of deficit) {
    let needed = -d.cbBefore;
    for (const s of surplus) {
      if (s.cbAfter <= 0) continue;
      const transfer = Math.min(s.cbAfter, needed);
      s.cbAfter -= transfer;
      needed -= transfer;
      if (needed === 0) break;
    }
    d.cbAfter = 0;
  }

  return members;
}
