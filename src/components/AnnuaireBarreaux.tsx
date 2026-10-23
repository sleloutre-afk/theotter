'use client'

import { useMemo, useState } from 'react'

type Row = { ville: string; email: string; type: string; fiabilite: string; source: string }

export default function AnnuaireBarreaux({ rows }: { rows: Row[] }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return rows
    return rows.filter((r) => r.ville.toLowerCase().includes(q))
  }, [rows, query])

  const foundCount = rows.filter((r) => r.email !== 'non trouvé').length

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un barreau (ex. Lyon, Nantes…)"
          className="input-field sm:max-w-xs"
        />
        <p className="text-xs text-[var(--color-mist)]">
          {foundCount} adresses trouvées sur {rows.length} barreaux
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-6 text-xs text-[var(--color-mist)]">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-copper)' }} />
          Confirmé sur le site officiel du barreau
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-line)' }} />
          Source tierce (annuaire officiel, Conférence des bâtonniers…), à vérifier avant un envoi important
        </span>
      </div>

      <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid var(--color-line)' }}>
        <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--color-navy)' }}>
              <th className="text-left px-4 py-3 text-[var(--color-paper)] font-medium whitespace-nowrap">Barreau</th>
              <th className="text-left px-4 py-3 text-[var(--color-paper)] font-medium whitespace-nowrap">Email</th>
              <th className="text-left px-4 py-3 text-[var(--color-paper)] font-medium">Type</th>
              <th className="text-left px-4 py-3 text-[var(--color-paper)] font-medium whitespace-nowrap">Fiabilité</th>
              <th className="text-left px-4 py-3 text-[var(--color-paper)] font-medium">Source</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => {
              const notFound = r.email === 'non trouvé'
              return (
                <tr
                  key={r.ville + i}
                  style={{
                    background: i % 2 === 0 ? 'var(--color-paper)' : 'var(--color-paper-dim)',
                    borderTop: '1px solid var(--color-line)',
                  }}
                >
                  <td className="px-4 py-3 font-medium text-[var(--color-ink)] whitespace-nowrap">{r.ville}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {notFound ? (
                      <span className="text-[var(--color-mist)] italic">non trouvé</span>
                    ) : (
                      <a href={`mailto:${r.email}`} className="text-[var(--color-copper-dark)] hover:underline">
                        {r.email}
                      </a>
                    )}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-mist)] min-w-[140px]">{r.type}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 text-[var(--color-mist)]">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: r.fiabilite.startsWith('site officiel') ? 'var(--color-copper)' : 'var(--color-line)' }}
                      />
                      {r.fiabilite}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[var(--color-mist)] text-xs max-w-sm">{r.source}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
