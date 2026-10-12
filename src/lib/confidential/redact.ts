/**
 * Derives an anonymized display name from a full name.
 * "Yanis Zerrar" -> "Yanis Z."   (single word -> returned as-is)
 */
export function anonymizeName(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length < 2) return name
  const first = parts[0]
  const lastInitial = parts[parts.length - 1][0]
  return `${first} ${lastInitial}.`
}
